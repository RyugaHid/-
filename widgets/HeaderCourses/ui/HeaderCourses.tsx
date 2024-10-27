import { HeaderCoursesAddButton } from "./HeaderCoursesAddButton/HeaderCoursesAddButton"
import { HeaderCoursesContainer } from "./HeaderCoursesContainer.styled"
import { HeaderCoursesSearchInput } from "./HeaderCoursesSearchInput/HeaderCoursesSearchInput"

export type HeaderCoursesProps = {
  handleDirectionModalOpen: () => void
}

export const HeaderCourses = ({ handleDirectionModalOpen }: HeaderCoursesProps) => {
  return (
    <HeaderCoursesContainer>
      <HeaderCoursesSearchInput />
      <HeaderCoursesAddButton handleDirectionModalOpen={handleDirectionModalOpen} />
    </HeaderCoursesContainer>
  )
}
