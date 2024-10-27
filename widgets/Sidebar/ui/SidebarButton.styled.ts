import { Theme } from "@emotion/react"
import { Button, styled } from "@mui/material"

export const SidebarButton = styled(Button)`
  justify-content: flex-start;
  gap: 10px;
  flex: 0 0 50px;
  min-height: 50px;
  color: #cccc;
  margin: 6px 0;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: ${({ theme }: { theme: Theme }) => theme.main?.borderRadius};

  &:hover {
    border: 1px solid #fff;
  }

  &.active {
    background-color: ${({ theme }: { theme: Theme }) => theme.main?.colors.white};
    color: ${({ theme }: { theme: Theme }) => theme.main?.colors.black};
  }
  &.active svg {
    color: #000;
  }
`
