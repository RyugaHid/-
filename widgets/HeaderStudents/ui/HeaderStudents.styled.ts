import { Theme } from "@emotion/react"
import { Stack, styled } from "@mui/material"

const HeaderStudents = styled(Stack)(({ theme }: Theme) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "130px",
  paddingRight: theme.main.spacings.lg,
  "@media (max-width: 840px)": {
    paddingRight: theme.main.spacings.xs,
    gap: theme.main.spacings.xs,
  },
}))

export const Styled = {
  HeaderStudents
}
