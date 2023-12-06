import { createSlice } from "@reduxjs/toolkit"

interface IUser {
  _id: string
  email: string
  birthday: string
  phone: string
  name: string
}

const initialState: IUser = {
  _id: "",
  email: "",
  birthday: "",
  phone: "",
  name: "",
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

export const { setUser, removeUser } = userSlice.actions

export const { reducer: userReducer, actions: userActions } = userSlice
