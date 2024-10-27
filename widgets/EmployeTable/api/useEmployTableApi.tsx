import { RoleUrlApi, useFetchUsersQuery } from "~/shared/api"

export const useEmploysTableApi = (searchQuery: string, role: RoleUrlApi) => {
  const queryOption = {
    role,
    queryParams: {
      roles: "MENTOR",
      search: searchQuery,
    },
  }
  const { data: usersData, error: errorFetchUsers, isFetching } = useFetchUsersQuery(queryOption)

  const employees = usersData?.content

  return { employees, errorFetchUsers, isFetching }
}
