import { Divider, Tooltip, Typography, tooltipClasses } from "@mui/material"
import Chip from "@mui/material/Chip"
import { useKeycloak } from "@react-keycloak/web"
import { ColumnDirection, ColumnDirectionFlexScrollable } from "app/styles"
import { LinkTo } from "~/app/styles/LinkTo.styled"
import { userAPI } from "~/shared/api"
import { getModalControls } from "~/shared/ui/ModalDialog"

import useIsMobileWidth from "./hooks/useIsMobileWidth"
import { sidebarConfig } from "./model/SidebarMenu/menuOfSidebar"
import { SidebarAvatarUserPopup } from "./ui/SidebarAvatarUserPopup/SidebarAvatarUserPopup"
import { SidebarContainer } from "./ui/SidebarContainer.styled"
import { LogoMini } from "./ui/SidebarLogo/LogoMini"
import { SidebarLogo } from "./ui/SidebarLogo/SidebarLogo.styled"
import { SidebarPersonInfo } from "./ui/SidebarPersonInfo.styled"
import { SidebarSettingsExit } from "./ui/SidebarSettingsExit/SidebarSettingsExit"

export const Sidebar = () => {
  const isMobileWidth = useIsMobileWidth()

  const modalControls = getModalControls()

  const { data: person } = userAPI.useFetchUserQuery(/* keycloak.subject || "" */)

  const {
    keycloak: { realmAccess },
  } = useKeycloak()

  const handleAvatarClick = () => {
    modalControls?.openModal(
      <SidebarAvatarUserPopup closeModal={modalControls.closeModal} />,
      "Сменить аватарку",
      { maxWidth: false, fullWidth: false },
    )
  }

  const isModerator = realmAccess?.roles?.includes("MODERATOR")

  return (
    <>
      <SidebarContainer>
        <SidebarLogo>
          <LogoMini />
        </SidebarLogo>
        <SidebarPersonInfo>
          <img src='/images/avatar.png' alt='avatar' onClick={handleAvatarClick} />
          {person && (
            <ColumnDirection>
              <Typography fontWeight={700}>
                {person.firstName} {person.lastName}
              </Typography>
              <Typography fontSize={"12px"} display='flex' gap='4px' flexWrap='wrap'>
                {person.roles?.map((role) => (
                  <Chip
                    key={role.name}
                    label={role.name}
                    variant='outlined'
                    size='small'
                    sx={{
                      color: "white",
                      width: "fit-content",
                    }}
                  />
                ))}
              </Typography>
            </ColumnDirection>
          )}
        </SidebarPersonInfo>
        <Divider sx={{ margin: "20px 0 40px 0" }} />

        <ColumnDirectionFlexScrollable>
          {sidebarConfig.map(({ path, icon, name, role }) => {
            const linkContent = isMobileWidth ? (
              <> {icon}</>
            ) : (
              <>
                {icon}
                <Typography fontWeight={700} className='link-text'>
                  {name}
                </Typography>
              </>
            )

            const linkElement = (
              <LinkTo aria-disabled={true} state={path} to={path || "/"} key={crypto.randomUUID()}>
                {linkContent}
              </LinkTo>
            )

            const tooltipElement = (
              <Tooltip
                title={name}
                followCursor
                slotProps={{
                  popper: {
                    sx: {
                      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                        {
                          marginTop: "-25px",
                        },
                    },
                  },
                }}
                key={crypto.randomUUID()}
              >
                {linkElement}
              </Tooltip>
            )

            if (!role || realmAccess?.roles?.includes(role)) {
              return isMobileWidth ? tooltipElement : linkElement
            }
          })}
        </ColumnDirectionFlexScrollable>
        <Divider sx={{ margin: "40px 0 15px 0" }} />
        <SidebarSettingsExit />
      </SidebarContainer>
    </>
  )
}
