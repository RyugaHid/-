import { Theme } from "@emotion/react"
import { Button, styled } from "@mui/material"

const button = styled(Button)(({ theme }: Theme) => ({
  "@media (max-width: 840px)": {
    marginRight: "12px",
  },
}))

export const Styled = {
  button,
}
