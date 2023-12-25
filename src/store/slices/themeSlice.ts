import { createSlice } from "@reduxjs/toolkit"

export interface IThemeType {
  theme: "dark" | "light"
}

const initialState: IThemeType = {
  theme: "dark",
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    }),
  },
})

export const { setTheme } = themeSlice.actions

export const { reducer: themeReducer } = themeSlice
