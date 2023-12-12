import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { GlobalStyles } from "@/styles/globalStyles"
import { darkTheme, lightTheme } from "@/constants/theme"
import { NotificationList } from "../NotificationList/NotificationList"
import { privateRoutes, publicRoutes, Routes as RoutesEnum } from "@/constants/routes"
import { auth } from "@/firebase"
import { Layout } from "../Layout/Layout"
import { useAppSelector } from "@/hooks/redux"
import { selectTheme } from "@/store/selectors"

export function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const currentTheme = useAppSelector(selectTheme)

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setIsAuthenticated(!!user)
        setIsLoading(false)
      }),
    [],
  )

  if (isLoading) {
    return <>Loading...</>
  }
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <NotificationList />
        <Routes>
          {publicRoutes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route element={<Layout />}>
            {privateRoutes.map(({ path, element: Element }) => (
              <Route
                key={path}
                path={path}
                element={
                  isAuthenticated ? (
                    <Element />
                  ) : (
                    <Navigate to={RoutesEnum.AUTH} replace />
                  )
                }
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
