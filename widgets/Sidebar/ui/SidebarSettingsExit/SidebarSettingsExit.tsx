import { useKeycloak } from "@react-keycloak/web"
import { ColumnDirection } from "app/styles"
import { Exit, Settings } from "assets/svgr"
import { useCallback } from "react"

import { SidebarButton } from "../SidebarButton.styled"

export const SidebarSettingsExit = () => {
  const { keycloak } = useKeycloak()

  const logout = useCallback(() => {
    keycloak.logout({ redirectUri: window.location.origin })
  }, [keycloak])

  return (
    <ColumnDirection>
      <SidebarButton>
        <Settings width={19} height={19} strokeWidth={2} />
        <b>Настройки</b>
      </SidebarButton>
      <SidebarButton onClick={logout}>
        <Exit width={19} height={19} strokeWidth={2} fill='none' />
        <b>Выход</b>
      </SidebarButton>
    </ColumnDirection>
  )
}
