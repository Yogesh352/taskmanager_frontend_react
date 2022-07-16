export type PaginatedRequest = {
    page?: number
    page_size?: number
  }
  
  export type PaginatedResponse<T> = {
    count: number
    page: number
    next: string | null
    prev: string | null
    page_size: number
    data: T[]
  }
  