import { useQuery } from "react-query";

import { TodoResponse, TodoType } from "../types/todo";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import request from "@/lib/axios";
import {PaginatedRequest, PaginatedResponse } from '@/types/api'

export type ListTodoRequest = PaginatedRequest & {
  type?: TodoType;
  title?: string;
  description?: string;
  attachments?: number;
  date?: Date;
};

export function listTodo(params: ListTodoRequest) {
  return request<PaginatedResponse<TodoResponse>>({
    url: `/todo`,
    method: "GET",
    params,
  });
}

type QueryFnType = typeof listTodo;

interface UseTodoOptions {
  params?: ListTodoRequest;
  config?: QueryConfig<QueryFnType>;
}

export function useTodo({ config, params }: UseTodoOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["todo", params || {}],
    queryFn: () => listTodo(params || {}),
  });
}
