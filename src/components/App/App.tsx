import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { GlobalStyles } from "@/styles/globalStyles"
import { darkTheme } from "@/constants/theme"
import { NotificationList } from "../NotificationList/NotificationList"
import { privateRoutes, publicRoutes , Routes as RoutesEnum } from "@/constants/routes"
import { auth } from "@/firebase"

export function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user)
      setIsLoading(false)
    }), [])

  if (isLoading) {
    return <>Loading...</>
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <NotificationList />
        <Routes>
          {publicRoutes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          {privateRoutes.map(({ path, element: Element }) => (
            <Route
              key={path}
              path={path}
              element={
                isAuthenticated ? <Element /> : <Navigate to={RoutesEnum.AUTH} replace />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
