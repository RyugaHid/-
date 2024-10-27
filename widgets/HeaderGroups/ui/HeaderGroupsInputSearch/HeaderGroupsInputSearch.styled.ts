import { Theme } from "@emotion/react"
import { styled } from "@mui/material"

const ErrorMessage = styled("div")(({ theme }: Theme) => ({
  color: theme.palette.error.main,
  fontSize: "12px",
  position: "fixed",
}))

export const Styled = {
  ErrorMessage,
}
