import { NotificationStatuses } from "@/constants/notificationStatus"
import { AppDispatch } from "@/store"
import { notificationActions } from "@/store/slices/notificationSlice"

export const dispatchNotification = (
  dispatch: AppDispatch,
  status: NotificationStatuses,
  message: string,
) => {
  dispatch(
    notificationActions.addNotification({
      type: status,
      message,
    }),
  )
}
