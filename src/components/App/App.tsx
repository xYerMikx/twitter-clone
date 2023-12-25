import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { privateRoutes, publicRoutes, Routes as RoutesEnum } from "@/constants/routes"
import { darkTheme, lightTheme } from "@/constants/theme"
import { auth } from "@/firebase"
import { useAppSelector } from "@/hooks/redux"
import { selectTheme } from "@/store/selectors"
import { GlobalStyles } from "@/styles/globalStyles"

import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary"
import { Layout } from "../Layout/Layout"
import { NotificationList } from "../NotificationList/NotificationList"

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
      <ErrorBoundary>
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
      </ErrorBoundary>
    </ThemeProvider>
  )
}
