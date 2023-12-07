import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface INotification {
  id: number
  message: string
  type: string
}

const initialState: INotification[] = []

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, { payload }: PayloadAction<Omit<INotification, "id">>) => {
      state.push({ id: state[state.length - 1]?.id || 0 + 1, ...payload })
    },
    removeNotification: (
      state,
      { payload }: PayloadAction<Pick<INotification, "id">>,
    ) => {
      const removeIndex = state.findIndex(
        (notification) => notification.id === payload.id,
      )
      if (removeIndex !== -1) {
        state.splice(removeIndex, 1)
      }
    },
  },
})

export const { addNotification, removeNotification } = notificationSlice.actions

export const { reducer: notificationReducer, actions: notificationActions } =
  notificationSlice
