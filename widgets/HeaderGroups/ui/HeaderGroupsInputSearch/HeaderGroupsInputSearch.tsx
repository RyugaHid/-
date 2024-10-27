import { InputSearch } from "~/shared/ui/InputSearch/InputSearch"

import { useHeaderInput } from "../../hooks/useHeaderInput"
import { Styled } from "./HeaderGroupsInputSearch.styled"

/**
 * @property {string} searchQuery - Текущая строка запроса поиска.
 */

type HeaderGroupsSearchInputProps = {
  searchQuery: string
}

export const HeaderGroupsInputSearch = ({ searchQuery }: HeaderGroupsSearchInputProps) => {
  const { handleInputChange, handleInputClear, errorMessage } = useHeaderInput()

  return (
    <div>
      <InputSearch
        placeholder='Искать группу'
        onChange={handleInputChange}
        reset={handleInputClear}
        value={searchQuery}
      />
      {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
    </div>
  )
}
