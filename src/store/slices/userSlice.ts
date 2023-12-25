import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
    updateUser: (state, action: PayloadAction<Partial<IUser>>) => ({
      ...state,
      ...action.payload,
    }),
  },
})

export const { setUser, removeUser, updateUser } = userSlice.actions

export const { reducer: userReducer } = userSlice
