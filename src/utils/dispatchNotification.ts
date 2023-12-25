import { NotificationStatuses } from "@/constants/notificationStatus"
import { AppDispatch } from "@/store"
import { addNotification } from "@/store/slices/notificationSlice"

export const dispatchNotification = (
  dispatch: AppDispatch,
  status: NotificationStatuses,
  message: string,
) => {
  dispatch(
    addNotification({
      type: status,
      message,
    }),
  )
}
