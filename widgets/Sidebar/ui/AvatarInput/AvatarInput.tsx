import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"
import React, { useRef, useState } from "react"

interface IAvatarInputProps {
  setImage: (parameter: File | null) => void
}

export const AvatarInput = ({ setImage }: IAvatarInputProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0]
    setImage(selectedFile)
    if (selectedFile) {
      const previewImg = URL.createObjectURL(selectedFile)
      setImagePreview(previewImg)
    } else {
      setImagePreview(null)
    }
  }

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div>
      <input
        type='file'
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
        accept='image/*'
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <AddAPhotoIcon
          fontSize='large'
          onClick={openFileInput}
          sx={{
            cursor: "pointer",
            transition: "opacity 0.3s",
            opacity: 1,
            "&:hover": {
              opacity: 0.7,
            },
          }}
        />
        {imagePreview ? null : <span>Выбери аватарку</span>}
      </div>
      {imagePreview && (
        <div
          style={{
            position: "absolute",
            left: "51%",
            top: "47%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={imagePreview}
            alt='Selected'
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  )
}

export default AvatarInput
