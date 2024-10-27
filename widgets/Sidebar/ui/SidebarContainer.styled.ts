import styled from "@emotion/styled"

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 28px 10px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.main.borderRadius};
  width: 100%;

  img {
    cursor: pointer;
  }
`
