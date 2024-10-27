import { useHeaderEmployees } from "../hooks/useHeaderEmployees"
import { HeaderEmployeesAddButton } from "./HeaderEmployeesAddButton/HeaderEmployeesAddButton"
import { Styled } from "./HeaderEmployees.styled"
import { HeaderEmployeesSearchInput } from "./HeaderEmployeesSearchInput/HeaderEmployeesSearchInput"

export type HeaderEmployeesProps = {
  handleEmployeeAddOpen: () => void
}

export const HeaderEmployees = ({ handleEmployeeAddOpen }: HeaderEmployeesProps) => {
  const { searchQuery } = useHeaderEmployees()

  return (
    <Styled.HeaderEmployees>
      <HeaderEmployeesSearchInput searchQuery={searchQuery} />
      <HeaderEmployeesAddButton handleEmployeeAddOpen={handleEmployeeAddOpen} />
    </Styled.HeaderEmployees>
  )
}
