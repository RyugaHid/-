import { Loading } from "~/entities/Loading"
import { NotFound } from "~/entities/NotFound"
import { Table } from "~/shared/ui/Table"

import { useEmployTable } from "../hooks/useEmployTable"

export const EmployTable = () => {
  const { employees, columnsHeaders, errorInfo, isFetching } = useEmployTable()

  if (isFetching || !employees) return <Loading />
  if (!isFetching && (!employees || employees.length === 0)) return <NotFound />

  return (
    <>
      <Table
        columns={columnsHeaders}
        rows={employees}
        pageSizeOptions={[10, 20, 30]}
        disableColumnFilter={true}
        disableColumnMenu={true}
      />
    </>
  )
}
