import { createPortal } from "react-dom"

import { useAppSelector } from "@/hooks/redux"

import { Notification } from "../Notification/Notification"
import { ListWrapper } from "./styled"

export const NotificationList = () => {
  const notificationList = useAppSelector((state) => state.notificationsList)
  return createPortal(
    <ListWrapper>
      {notificationList.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </ListWrapper>,
    document.body,
  )
}
