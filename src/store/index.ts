import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import { notificationReducer } from "./slices/notificationSlice"
import { themeReducer } from "./slices/themeSlice"
import { userReducer } from "./slices/userSlice"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  notificationsList: notificationReducer,
  theme: themeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)

declare global {
  interface Window {
    Cypress?: unknown
    store?: typeof store
  }
}

if (typeof window !== "undefined" && window.Cypress) {
  window.store = store
}

export default store
