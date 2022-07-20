import { MemberResponse } from "@/domains/members/types/member";
import { TodoResponse } from "./../../domains/todo/types/todo";
import { createServer } from "miragejs";
import { AnyRegistry } from "miragejs/-types";
import { RouteHandler } from "miragejs/server";
import { generateTodo } from "./todo";
import { PaginatedResponse } from "@/types/api";
import { paginatedResponse } from "./utils";
import { generateMember } from "./member";

type HTTPMethod = "get" | "post" | "put" | "delete";

export function makeServer({ environment = "test" } = {}) {
  const hashMap = new Map();
  const server = createServer({
    environment,

    routes() {
      this.namespace = "/api/v1";

      const register = <T>(
        method: HTTPMethod,
        path: string,
        handler: RouteHandler<AnyRegistry, T>
      ) => {
        this[method](path, async (schema, request) => {
          let response;
          const jsonRequest = JSON.stringify(request);
          if (hashMap.get(jsonRequest)) {
            response = hashMap.get(jsonRequest);
          } else {
            response = handler(schema, request);
            hashMap.set(jsonRequest, response);
          }
          return response;
        });
      };

      register<PaginatedResponse<Partial<TodoResponse>>>(
        "get",
        "/todo",
        (_, request) => paginatedResponse<TodoResponse>(request, generateTodo)
      );
      register<TodoResponse>("post", "/todo", generateTodo);
      register<TodoResponse>("get", "/todo/:id", generateTodo);
      register<TodoResponse>("put", "/todo/:id", generateTodo);
      register("delete", "/todo/:id", () => ({}));

      register<PaginatedResponse<Partial<MemberResponse>>>(
        "get",
        "/members",
        (_, request) =>
          paginatedResponse<MemberResponse>(request, generateMember)
      );

      this.namespace = "";
      this.passthrough();
    },
  });
  return server;
}
