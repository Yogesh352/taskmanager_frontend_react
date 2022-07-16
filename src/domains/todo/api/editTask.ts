import { useMutation } from "react-query";

import { showNotification } from "@mantine/notifications";

import { TodoResponse, TodoType } from "../types/todo";
import request from "@/lib/axios";
import { MutationConfig, queryClient } from "@/lib/react-query";

export type EditTodoRequest = {
  type: TodoType;
  title: string;
  description: string;
  date: Date;
  attachments: Number;
};

type editTodoDTO = {
  id: string;
  data: EditTodoRequest;
};

export default function editTodo({ id, data }: editTodoDTO) {
  return request<TodoResponse>({
    url: `/todo/${id}`,
    method: "PUT",
    data,
  });
}
type useEditTodoOptions = {
  config?: MutationConfig<typeof editTodo>;
};

export function useEditAlert({ config }: useEditTodoOptions = {}) {
  return useMutation({
    onSuccess: () => {
      queryClient.refetchQueries("todos");
      showNotification({ message: "Todo successfully updated" });
    },
    ...config,
    mutationFn: editTodo,
  });
}
