import { createPortal } from "react-dom"

import { useAppSelector } from "@/hooks/redux"
import { selectNotificationList } from "@/store/selectors"

import { Notification } from "../Notification/Notification"
import { ListWrapper } from "./styled"

export const NotificationList = () => {
  const notificationList = useAppSelector(selectNotificationList)

  return createPortal(
    <ListWrapper>
      {notificationList.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </ListWrapper>,
    document.body,
  )
}
