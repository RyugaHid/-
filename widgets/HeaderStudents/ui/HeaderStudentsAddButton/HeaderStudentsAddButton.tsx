import AddIcon from "@mui/icons-material/Add"
import { Button } from "@mui/material"

export type HeaderStudentsAddButtonProps = {
  handleStudentAddOpen: () => void
}

export const HeaderStudentsAddButton = ({ handleStudentAddOpen }: HeaderStudentsAddButtonProps) => {
  return (
    <Button
      size='large'
      variant='addUserButton'
      startIcon={<AddIcon />}
      onClick={handleStudentAddOpen}
    >
      Добавить студента
    </Button>
  )
}
