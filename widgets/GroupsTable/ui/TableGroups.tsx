import { Groups } from "~/shared/model/types/GroupService"
import { Table } from "~/shared/ui/Table"

import { useGetColumns } from "../lib/useGetColumns"

interface TableGroupsProps {
  groups: Groups
  getData: (id: string) => void
  deleteData: (id: string) => void
}

export const TableGroups = ({ groups, deleteData }: TableGroupsProps) => {
  const columns = useGetColumns(deleteData)

  return (
    <Table
      rows={groups}
      columns={columns}
      disableColumnFilter={true}
      disableColumnMenu={true}
    />
  )
}
