import { FC } from "react";
import { Table } from "~/shared/ui/Table"
import { DirectionColumns } from "../lib/DirectionColumns"
import { GetDirectionsResponse } from "~/shared/model/types/DirectionService";

type TableDirectionsProps = {
  directions: GetDirectionsResponse | undefined
}

export const TableDirections: FC<TableDirectionsProps> = ({directions}) => {
  const rows = directions?.content ?? []
  return (
    <Table
      rows={rows}
      columns={DirectionColumns()}
      disableColumnFilter={true}
      disableColumnMenu={true}
    />
  )
}