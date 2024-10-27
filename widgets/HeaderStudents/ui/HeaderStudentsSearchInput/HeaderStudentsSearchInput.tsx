import { FilterButton } from "shared/ui/FilterButton"
import { InputSearch } from "~/shared/ui/InputSearch/InputSearch"

import { useHeaderInput } from "../../hooks/useHeaderInput"
import { Styled } from "./HeaderStudentsSearchInput.style"

/**
 * @property {string} searchQuery - Текущая строка запроса поиска.
 */
type HeaderStudentsSearchInputProps = {
  searchQuery: string
}

export const HeaderStudentsSearchInput = ({ searchQuery }: HeaderStudentsSearchInputProps) => {
  const { handleInputChange, handleInputClear, handleToggleSelectVisibility, errorMessage } =
    useHeaderInput()

  return (
    <div>
      <InputSearch
        placeholder='Искать студента'
        onChange={handleInputChange}
        reset={handleInputClear}
        value={searchQuery}
        endAdornmentButton={<FilterButton onClick={handleToggleSelectVisibility} />}
      />
      {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
    </div>
  )
}
