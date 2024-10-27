import { useAppSelector } from "~/shared/lib/hooks"
import { searchQuerySelector } from "~/shared/model/store"

export const useHeaderGroups = () => {
  const searchQuery = useAppSelector(searchQuerySelector)

  return { searchQuery }
}
