import AddIcon from "@mui/icons-material/Add"

import { Styled } from "./HeaderEmployeesAddButton.styled"

export type HeaderEmployeesAddButtonProps = {
  handleEmployeeAddOpen: () => void
}

export const HeaderEmployeesAddButton = ({
  handleEmployeeAddOpen,
}: HeaderEmployeesAddButtonProps) => {
  return (
    <Styled.button
      size='large'
      variant='addUserButton'
      startIcon={<AddIcon />}
      onClick={handleEmployeeAddOpen}
    >
      Добавить сотрудника
    </Styled.button>
  )
}
