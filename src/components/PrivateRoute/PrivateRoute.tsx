import { Navigate } from "react-router-dom"
import { ReactElement } from "react"
import { Routes } from "@/constants/routes"
import { useAppSelector } from "@/hooks/redux"
import { selectToken } from "@/store/selectors"

interface PrivateRouteProps {
  element: ReactElement
}

export function PrivateRoute({ element }: PrivateRouteProps) {
  const token = useAppSelector(selectToken)

  return token ? element : <Navigate to={Routes.AUTH} replace />
}
