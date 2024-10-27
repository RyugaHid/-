import { IconButton } from "@mui/material"
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { Delete } from "assets/svgr"

import { defaultValueColumn } from "./const"

export const DirectionColumns = (): GridColDef[] => {
  return [
    {
      field: "name",
      headerName: "Название направления",
      flex: 0.5,
    },
    {
      field: "description",
      headerName: "Описание",
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
            <Delete fill='#EBEBEB' width={34} height={34} />
          </IconButton>
        </>
      ),
    },
  ].map((headerColumn) =>
    headerColumn.field === "actions" ? headerColumn : { ...headerColumn, ...defaultValueColumn },
  )
}
