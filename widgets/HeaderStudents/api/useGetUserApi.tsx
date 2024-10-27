import { IQueryParams } from "~/shared/api"
import { useFetchUsersQuery } from "~/shared/api/usersSlice/users.service"

export const useGetUserApi = (queryParams: IQueryParams) => {
  const { data, error, isLoading } = useFetchUsersQuery(queryParams, {
    skip: !queryParams.firstName,
  })
  const user = data?.content
  return { user, error, isLoading }
}

// TODO Требуется рефакторинг useHeaderStudents