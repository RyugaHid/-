import AddIcon from "@mui/icons-material/Add"
import { Button } from "@mui/material"

export type HeaderAddButtonProps = {
  handleGroupAddOpen: () => void
}

export const HeaderAddButton = ({ handleGroupAddOpen }: HeaderAddButtonProps) => {
  return (
    <Button
      size='large'
      variant='addUserButton'
      startIcon={<AddIcon />}
      onClick={handleGroupAddOpen}
    >
      Добавить группу
    </Button>
  )
}
