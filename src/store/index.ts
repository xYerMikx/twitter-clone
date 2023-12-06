import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./slices/userSlice"
import { notificationReducer } from "./slices/notificationSlice"

const rootReducer = combineReducers({
  user: userReducer,
  notificationsList: notificationReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
