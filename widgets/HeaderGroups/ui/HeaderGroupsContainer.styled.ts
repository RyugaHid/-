import { Theme } from "@emotion/react"
import { Stack, styled } from "@mui/material"

export const HeaderGroupsContainer = styled(Stack)(({ theme }: Theme) => ({
  top: 0,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "130px",
  paddingRight: theme.main.spacings.lg,
}))

export const Styled = {
  HeaderGroupsContainer
}