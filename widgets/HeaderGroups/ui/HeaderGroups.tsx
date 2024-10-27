import { HeaderAddButton } from "./HeaderGroupsAddButton/HeaderGroupsAddButton"
import { Styled } from "./HeaderGroupsContainer.styled"
import { HeaderGroupsInputSearch } from "./HeaderGroupsInputSearch/HeaderGroupsInputSearch"
import { HeaderSearchButton } from "./HeaderGroupsSearchButton/HeaderGroupsSearchButton"
import { useHeaderGroups } from "../hooks/useHeaderGroups"

export type HeaderGroupsProps = {
  handleGroupAddOpen: () => void
}

export const HeaderGroups = ({ handleGroupAddOpen }: HeaderGroupsProps) => {
  const { searchQuery } = useHeaderGroups()

  return (
    <Styled.HeaderGroupsContainer>
      <HeaderGroupsInputSearch searchQuery={searchQuery} />
      <HeaderSearchButton />
      <HeaderAddButton handleGroupAddOpen={handleGroupAddOpen} />
    </Styled.HeaderGroupsContainer>
  )
}
