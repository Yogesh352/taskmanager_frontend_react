import { useMutation } from 'react-query'

import { showNotification } from '@mantine/notifications'

import request from '@/lib/axios'
import { MutationConfig, queryClient } from '@/lib/react-query'

export default function deleteTodo(id: string) {
  return request({
    url: `/todo/${id}`,
    method: 'DELETE'
  })
}

type useDeleteTodoOptions = {
  config?: MutationConfig<typeof deleteTodo>
}

export function useDeleteTodo({ config }: useDeleteTodoOptions = {}) {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
      showNotification({ message: 'Todo successfully deleted' })
    },
    ...config,
    mutationFn: deleteTodo
  })
}