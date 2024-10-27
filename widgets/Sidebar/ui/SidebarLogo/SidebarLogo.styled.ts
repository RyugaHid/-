import styled from "@emotion/styled"

export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  gap: 8px;
  border-radius: ${({ theme }) => theme.main?.borderRadius};
`
