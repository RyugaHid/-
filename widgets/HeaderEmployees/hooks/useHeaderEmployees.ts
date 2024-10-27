import { useAppSelector } from "~/shared/lib/hooks"
import { searchQuerySelector } from "~/shared/model/store"

export const useHeaderEmployees = () => {
  const searchQuery = useAppSelector(searchQuerySelector)

  return { searchQuery }
}
