import { createSlice } from "@reduxjs/toolkit"
import { PersistPartial } from "redux-persist/es/persistReducer"
import { INotification } from "./notificationSlice"

export interface IUser {
  _id: string
  email: string
  birthday: string
  phone: string
  name: string
  token: string | null
}

const initialState: IUser = {
  _id: "",
  email: "",
  birthday: "",
  phone: "",
  name: "",
  token: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action: { payload: IUser; type: string }) => ({
      ...action.payload,
    }),
    removeUser: () => ({
      ...initialState,
    }),
  },
})

type State = {
  user: IUser
  notificationsList: INotification[]
} & PersistPartial

export const { setUser, removeUser } = userSlice.actions
export const selectToken = (state: State) => state.user.token
export const selectUserInfo = (state: State) => state.user
export const { reducer: userReducer, actions: userActions } = userSlice
