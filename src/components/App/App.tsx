import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { routes } from "@/constants/routes"
import { GlobalStyles } from "@/styles/globalStyles"
import { darkTheme } from "@/constants/theme"

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
