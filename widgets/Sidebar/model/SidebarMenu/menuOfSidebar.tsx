import {
  Courses,
  Groups,
  Learn,
  Messages,
  Notifications,
  Reviews,
  Schedule,
  Students,
} from "assets/svgr"
import React from "react"
import { RoutingStateEnum } from "~/shared/model/RoutingState.models"

export const sidebarConfig = [
  {
    name: "Студенты",
    path: RoutingStateEnum.STUDENTS,
    icon: <Students width={19} height={19} strokeWidth={2} />,
    role: null,
  },
  {
    name: "Группы",
    path: RoutingStateEnum.GROUPS,
    icon: <Groups width={19} height={19} strokeWidth={2} />,
    role: null,
  },
  {
    name: "Направления",
    path: RoutingStateEnum.COURSES_LIST,
    icon: <Courses width={19} height={19} />,
    role: null,
  },
  {
    name: "Сотрудники",
    path: RoutingStateEnum.EMPLOYEES,
    icon: <Students width={19} height={19} strokeWidth={2} />,
    role: null,
  },
  {
    name: "Расписание",
    path: RoutingStateEnum.SCHEDULE,
    icon: <Schedule width={19} height={19} strokeWidth={2} />,
    role: null,
  },
  {
    name: "Ревью",
    path: RoutingStateEnum.REVIEWS,
    icon: <Reviews width={19} height={19} />,
    role: null,
  },
  {
    name: "Уведомления",
    path: RoutingStateEnum.NOTIFICATIONS,
    icon: <Notifications width={19} height={19} strokeWidth={2} />,
    role: null,
  },
  {
    name: "Сообщения",
    path: RoutingStateEnum.MESSAGES,
    icon: <Messages width={19} height={19} strokeWidth={2} />,
    role: null,
  },
  {
    name: "Обучение",
    path: RoutingStateEnum.LEARN,
    icon: <Learn width={19} height={19} strokeWidth={2} />,
  },
]
