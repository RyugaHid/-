import { Theme } from "@emotion/react"
import { Stack, styled } from "@mui/material"
import { green } from "@mui/material/colors"

export const HeaderCoursesContainer = styled(Stack)(({ theme }: Theme) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "130px",
  paddingRight: theme.main.spacings.lg,
  "@media (max-width: 840px)": {
    justifyContent: "center",
    paddingRight: 0,
    gap: "12px",
  },
}))