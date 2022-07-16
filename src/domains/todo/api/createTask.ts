import { useMutation } from 'react-query'

import { showNotification } from '@mantine/notifications'
import { TodoResponse, TodoType} from '../types/todo'
import request from '@/lib/axios'
import { MutationConfig, queryClient } from '@/lib/react-query'

export type CreateTodoRequest = {
    type: TodoType;
    title: string;
    description: string;
    date: Date;
    attachments: Number;
}

export default function createTodo(data: CreateTodoRequest) {
  return request<TodoResponse>({
    url: '/todo',
    method: 'POST',
    data
  })
}

type useCreateTodoOptions = {
  config?: MutationConfig<typeof createTodo>
}

export function useCreateAlert({ config }: useCreateTodoOptions = {}) {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('alerts')
      showNotification({ message: 'Alert successfully created!' })
    },
    ...config,
    mutationFn: createTodo
  })
}