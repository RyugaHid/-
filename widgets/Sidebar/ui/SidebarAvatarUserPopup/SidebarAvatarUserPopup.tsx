import { Button, DialogActions, DialogContent } from "@mui/material"
import { useState } from "react"
import { useUpdateUserImageMutation } from "~/shared/api"

import { AvatarInput } from "../AvatarInput/AvatarInput"

export type SidebarAvatarUserPopupProps = {
  closeModal: () => void
}

export const SidebarAvatarUserPopup = ({ closeModal }: SidebarAvatarUserPopupProps) => {
  const [image, setImage] = useState<File | null>(null)
  const [updateImage] = useUpdateUserImageMutation()

  const handleClickUpdateImage = () => {
    if (image) {
      const formData = new FormData()
      formData.append("imageRequest", image)
      updateImage(formData)
    }
    closeModal()
    setImage(null)
  }

  console.log(image)
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <DialogContent>
          <AvatarInput setImage={setImage} />
        </DialogContent>
      </form>

      <DialogActions>
        <Button
          type='submit'
          variant='contained'
          color='primaryReverse'
          onClick={handleClickUpdateImage}
        >
          Загрузить
        </Button>
        <Button color='primary' variant='outlined' onClick={closeModal}>
          Закрыть
        </Button>
      </DialogActions>
    </>
  )
}
