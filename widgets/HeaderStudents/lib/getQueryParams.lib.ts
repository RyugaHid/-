import { IQueryParams } from "~/shared/api/usersSlice/users.models"

export const getQueryParams = (userName = "", page = 0, size = 10): IQueryParams => {
  const queryParams: IQueryParams = { firstName: "", page, size }
  if (userName !== "") {
    queryParams.firstName = userName
  }
  return queryParams
}
