import { faker } from '@faker-js/faker'
import { range } from 'lodash'
import { Request } from 'miragejs'

import { PaginatedResponse } from '@/types/api'

const repeat: <T>(n: number, fn: () => T) => T[] = (n, fn) => range(n).map(() => fn())

const paginatedResponse: <T>(request: Request, fn: () => T) => PaginatedResponse<T> = (
  request,
  fn
) => ({
  count: faker.datatype.number(),
  page: request.queryParams?.page ? Number(request.queryParams.page) : 1,
  next: null,
  prev: null,
  page_size: request.queryParams?.page_size ? Number(request.queryParams.page_size) : 10,
  data: repeat(request.queryParams?.page_size ? Number(request.queryParams.page_size) : 10, fn)
})

export { paginatedResponse, repeat }