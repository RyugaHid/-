import { FC } from "react"
import { Loading } from "~/entities/Loading"
import { NotFound } from "~/entities/NotFound"
import { RoleUrlApi } from "~/shared/api"
import { StudentType } from "~/shared/types/UserServiceTypes"
import { Table } from "~/shared/ui/Table"

import { useTableStudents } from "../hooks/useStudents"
import { useStudentsPage } from "~/pages/Students/hooks/useStudentsPage"

/**
 * @prop setIsDeletePopupOpen - Функция для установки флага открытия диалога удаления.
 * @prop role - пропс для смены прав модератора или админа.
 */

type TableStudentsProps = {
  setIsDeletePopupOpen: (student: StudentType) => void
  role: RoleUrlApi
}

export const TableStudents: FC<TableStudentsProps> = ({ setIsDeletePopupOpen, role }) => {

  const { modal } = useStudentsPage()

  const {
    paginationModel,
    setPaginationModel,
    sortModel,
    setSortModel,
    students,
    totalElements,
    columnsHeaders,
    isFetching,
  } = useTableStudents(setIsDeletePopupOpen, role)

  if (isFetching) {
    return <Loading />
  }
  if (!isFetching && (!students || students.length === 0)) {
    return <NotFound />
  }
  return (
    <>
      <Table
        columns={columnsHeaders}
        rows={students ?? []}
        pageSizeOptions={[10, 20, 30]}
        checkboxSelection
        disableRowSelectionOnClick
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode='server'
        rowCount={totalElements}
        disableColumnFilter={false}
        disableColumnMenu={false}
        sortingMode='server'
        sortModel={sortModel}
        onSortModelChange={setSortModel}
        onRowClick={() => modal.handleStudentCardOpen()}
      />
    </>
  )
}
