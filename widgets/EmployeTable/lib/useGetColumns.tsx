import { IconButton } from "@mui/material"
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid"
import { Edit } from "assets/svgr"

import { defaultValueColumn } from "../config/defaultValueColumn"

export const useGetColumns = (): GridColDef[] => {
  return [
    {
      field: "firstName",
      headerName: "Имя",
      flex: 0.5,
    },
    {
      field: "lastName",
      headerName: "Фамилия",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.5,
    },
    {
      field: "roles",
      valueGetter: (params: GridValueGetterParams) => {
        const roles = params.row.roles
        return roles ? roles[0].name : ""
      },
      headerName: "Роль",
      flex: 0.5,
    },
    {
      field: "groups",
      valueGetter: (params: GridValueGetterParams) => {
        const groups = params.row.groups
        return groups ? groups[0].name : ""
      },
      headerName: "Группа",
      flex: 0.5,
    },
    {
      field: "actions",
      type: "actions",
      renderCell: ({ row }: GridRenderCellParams) => (
        <>
          <IconButton
            aria-label='delete'
            size='small'
            sx={{ padding: 0, margin: 0.5 }}
            onClick={() => console.log(row.id)}
          >
            <Edit fill='#EBEBEB' width={34} height={34} />
          </IconButton>
          {/* <IconButton
          aria-label='delete'
          size='small'
          sx={{ padding: 0, margin: 0.5 }}
          onClick={() => {
            setIsDeletePopupOpen(row)
          }}
        >
          <Delete fill='#EBEBEB' width={34} height={34} />
        </IconButton> */}
        </>
      ),
    },
  ].map((headerColumn) =>
    headerColumn.field === "actions" ? headerColumn : { ...headerColumn, ...defaultValueColumn },
  )
}
