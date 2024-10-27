import styled from "@emotion/styled"

export const SidebarAvatarUserPopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`
export const SidebarAvatarUserPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  p {
    color: #000;
  }
  input {
    width: 120px;
  }
  button {
    cursor: pointer;
  }
`
