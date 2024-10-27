import { InputSearch } from "~/shared/ui/InputSearch"

import { useHeaderInput } from "../../hooks/useHeaderInput"
import { Styled } from "./HeaderEmployeesSearchInput.styled"

/**
 * @param {string} props.searchQuery - Строка поискового запроса.
 */

interface HeaderEmployeesSearchInputProps {
  searchQuery: string
}

export const HeaderEmployeesSearchInput = ({ searchQuery }: HeaderEmployeesSearchInputProps) => {
  const { handleInputChange, handleInputClear, errorMessage } = useHeaderInput()

  return (
    <div>
      <InputSearch
        placeholder='Искать сотрудника'
        onChange={handleInputChange}
        reset={handleInputClear}
        value={searchQuery}
      />
      {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
    </div>
  )
}
