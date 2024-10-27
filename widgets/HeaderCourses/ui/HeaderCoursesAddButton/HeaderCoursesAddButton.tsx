import AddIcon from "@mui/icons-material/Add"
import { Button } from "@mui/material"

export type HeaderCoursesAddButtonProps = {
  handleDirectionModalOpen: () => void
}

export const HeaderCoursesAddButton = ({
  handleDirectionModalOpen,
}: HeaderCoursesAddButtonProps) => {
  return (
    <Button
      size='large'
      variant='addUserButton'
      startIcon={<AddIcon />}
      onClick={handleDirectionModalOpen}
    >
      Добавить направления
    </Button>
  )
}
