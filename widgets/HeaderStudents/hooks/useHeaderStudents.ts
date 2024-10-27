import { useAppSelector } from "~/shared/lib/hooks"
import useThrottle from "~/shared/lib/hooks/useThrottle"
import { searchQuerySelector } from "~/shared/model/store"

import { useGetUserApi } from "../api/useGetUserApi"
import { getQueryParams } from "../lib/getQueryParams.lib"

export const useHeaderStudents = () => {
  const searchQuery = useAppSelector(searchQuerySelector)

  const throttledSearchQuery = useThrottle(searchQuery, 2000)
  const queryParams = getQueryParams(throttledSearchQuery)

  // const {
  //   user: userByQuery,
  //   error: userByQueryError,
  //   isLoading: userByQueryLoading,
  // } = useGetUserApi(queryParams)

  return {
    searchQuery,
    // userByQuery,
    // userByQueryError,
    // userByQueryLoading,
  }
}

// TODO Требуется рефакторинг useGetUserApi