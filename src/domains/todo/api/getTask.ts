import { useQuery } from "react-query";

import { TodoResponse } from "@/domains/todo/types/todo";
import request from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

export default function getTodo(id: string) {
  return request<TodoResponse>({
    url: `/todo/${id}`,
    method: "GET",
  });
}

type QueryFnType = typeof getTodo;

interface UseTodoOptions {
  id: string;
  config?: QueryConfig<QueryFnType>;
}

export function useTodo({ config, id }: UseTodoOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["todo", id],
    queryFn: () => getTodo(id),
  });
}
