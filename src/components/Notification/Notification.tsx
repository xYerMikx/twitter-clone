import { memo, useCallback, useEffect, useRef } from "react"
import { useAppDispatch } from "@/hooks/redux"
import { CloseButton, NotificationWrapper, StyledP } from "./styled"
import { notificationActions } from "@/store/slices/notificationSlice"

interface INotification {
  id: number
  message: string
  type: string
}

export const Notification = memo(
  ({ notification: { id, message, type } }: { notification: INotification }) => {
    const dispatch = useAppDispatch()
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleDismiss = useCallback(() => {
      dispatch(notificationActions.removeNotification({ id }))
    }, [dispatch, id])

    useEffect(() => {
      timeoutRef.current = setTimeout(() => {
        handleDismiss()
      }, 2500)
      return () => {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [handleDismiss])

    return (
      <NotificationWrapper $type={type}>
        <StyledP>{message}</StyledP>
        <CloseButton type="button" onClick={handleDismiss}>
          x
        </CloseButton>
      </NotificationWrapper>
    )
  },
)
