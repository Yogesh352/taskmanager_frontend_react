import { MemberResponse } from "../types/member";
import { useQuery } from "react-query";

import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import request from "@/lib/axios";
import { PaginatedRequest, PaginatedResponse } from "@/types/api";

export type ListMembersRequest = PaginatedRequest & {
  avatar?: string ;
  name?: string;
  jobRole?: string;
  hireDate?: Date;
  boss?: string;
};

export function listMembers(params: ListMembersRequest) {
  return request<PaginatedResponse<ListMembersRequest>>({
    url: `/members`,
    method: "GET",
    params,
  });
}

type QueryFnType = typeof listMembers;

interface UseMembersOptions {
  params?: ListMembersRequest;
  config?: QueryConfig<QueryFnType>;
}

export function useMember({ config, params }: UseMembersOptions) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["members", params || {}],
    queryFn: () => listMembers(params || {}),
  });
}
