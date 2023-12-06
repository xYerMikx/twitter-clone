import { Navigate } from "react-router-dom"
import { ReactElement } from "react"
import { selectToken } from "@/store/slices/userSlice"
import { Routes } from "@/constants/routes"
import { useAppSelector } from "@/hooks/redux"

interface PrivateRouteProps {
  element: ReactElement
}

export function PrivateRoute({ element }: PrivateRouteProps) {
  const token = useAppSelector(selectToken)

  return token ? element : <Navigate to={Routes.AUTH} replace />
}
