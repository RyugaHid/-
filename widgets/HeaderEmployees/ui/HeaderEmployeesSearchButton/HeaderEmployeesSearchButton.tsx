import { ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import { createSearchQuery } from "~/shared/model/store"

import { SearchEmployeesButton } from "./SearchEmployeesButton.styled"

export const HeaderEmployeesSearchButton = () => {
  const dispatch = useDispatch()

  const handleSearch = (
    event: ChangeEvent<HTMLInputElement> & React.MouseEvent<HTMLButtonElement>,
  ) => {
    const value = event.target.value
    if (value) {
      dispatch(createSearchQuery(value))
    }
  }

  return (
    <SearchEmployeesButton color='secondary' size='large' variant='outlined' onClick={handleSearch}>
      Поиск
    </SearchEmployeesButton>
  )
}
