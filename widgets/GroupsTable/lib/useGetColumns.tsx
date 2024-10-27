import { IconButton } from "@mui/material"
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { Delete } from "assets/svgr"

import { defaultValueColumn } from "./const"

export const useGetColumns = (deleteData: (id: string) => void): GridColDef[] => {
  return [
    {
      field: "name",
      headerName: "Название группы",
      flex: 0.5,
    },
    {
      field: "direction",
      headerName: "Направление",
      flex: 0.5,
    },
    {
      field: "startCount",
      headerName: "Кол-во участников",
      flex: 0.5,
    },
    {
      field: "startDate",
      headerName: "Дата регистрации",
      flex: 0.3,
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
            onClick={() => deleteData(row.id)}
          >
            <Delete fill='#EBEBEB' width={34} height={34} />
          </IconButton>
        </>
      ),
    },
  ].map((headerColumn) =>
    headerColumn.field === "actions" ? headerColumn : { ...headerColumn, ...defaultValueColumn },
  )
}
