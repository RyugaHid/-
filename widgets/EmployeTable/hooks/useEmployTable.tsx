import { enqueueSnackbar } from "notistack"
import { useEffect } from "react"
import { handleFetchError } from "~/shared/lib/helpers/error.helper"

import { useGetColumns } from "../lib/useGetColumns"
import { useSearchEmployees } from "./useSearchEmployes"

export const useEmployTable = () => {
  const { employees, errorFetchUsers, isFetching } = useSearchEmployees()
  const columnsHeaders = useGetColumns()
  const errorInfo = handleFetchError([errorFetchUsers])

  useEffect(() => {
    if (!errorInfo) return
    enqueueSnackbar(`Что-то пошло не так ☹ Статус: ${errorInfo}`, {
      preventDuplicate: true,
      variant: "error",
    })
  }, [errorInfo])

  return {
    employees,
    columnsHeaders,
    errorInfo,
    isFetching,
  }
}
