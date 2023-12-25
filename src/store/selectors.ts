import { PersistPartial } from "redux-persist/es/persistReducer"

import { INotification } from "./slices/notificationSlice"
import { IThemeType } from "./slices/themeSlice"
import { IUser } from "./slices/userSlice"

type State = {
  user: IUser
  notificationsList: INotification[]
  theme: IThemeType
} & PersistPartial

export const selectTheme = (state: State) => state.theme.theme
export const selectToken = (state: State) => state.user.token
export const selectUserInfo = (state: State) => state.user
export const selectNotificationList = (state: State) => state.notificationsList
