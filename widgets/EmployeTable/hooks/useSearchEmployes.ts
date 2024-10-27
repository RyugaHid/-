import { useAppSelector } from "~/shared/lib/hooks"
import useThrottle from "~/shared/lib/hooks/useThrottle"
import { searchQuerySelector } from "~/shared/model/store"

import { useEmploysTableApi } from "../api/useEmployTableApi"

export const useSearchEmployees = () => {
  const searchQuery: string = useAppSelector(searchQuerySelector)
  const throttledSearchQuery = useThrottle(searchQuery)

  const { employees, errorFetchUsers, isFetching } = useEmploysTableApi(throttledSearchQuery)

  return { employees: employees, errorFetchUsers, isFetching }
}
