import Auth from "@/pages/Auth/Auth"
import Login from "@/pages/Login/Login"
import Signup from "@/pages/Signup/Signup"

export enum Routes {
  HOME = "/",
  PROFILE = "/profile",
  LOGIN = "/login",
  SIGNUP = "/signup",
  AUTH = "/auth",
  FEED = "/feed",
}

export const routes = [
  { path: Routes.AUTH, element: Auth },
  { path: Routes.LOGIN, element: Login },
  { path: Routes.SIGNUP, element: Signup },
]
