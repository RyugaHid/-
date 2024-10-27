import { useHeaderStudents } from "../hooks/useHeaderStudents"
import { Styled } from "./HeaderStudents.styled"
import { HeaderStudentsAddButton } from "./HeaderStudentsAddButton/HeaderStudentsAddButton"
import { HeaderStudentsSearchInput } from "./HeaderStudentsSearchInput/HeaderStudentsSearchInput"

export type HeaderStudentsProps = {
  handleStudentAddOpen: () => void
}

export const HeaderStudents = ({ handleStudentAddOpen }: HeaderStudentsProps) => {
  const { searchQuery } = useHeaderStudents()

  return (
    <Styled.HeaderStudents>
      <HeaderStudentsSearchInput searchQuery={searchQuery} />
      <HeaderStudentsAddButton handleStudentAddOpen={handleStudentAddOpen} />
    </Styled.HeaderStudents>
  )
}
