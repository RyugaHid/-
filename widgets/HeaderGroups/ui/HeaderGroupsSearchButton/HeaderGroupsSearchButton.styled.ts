import { Theme } from "@emotion/react"
import { Button, styled } from "@mui/material"

export const SearchButton = styled(Button)(({ theme }: Theme) => ({
  marginRight: theme.main.spacings.md,
}))
