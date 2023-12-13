import { Auth } from "@/pages/Auth/Auth"
import { Home } from "@/pages/Home/Home"
import { Login } from "@/pages/Login/Login"
import { NotFound } from "@/pages/NotFound/NotFound"
import { Profile } from "@/pages/Profile/Profile"
import { Signup } from "@/pages/Signup/Signup"

export enum Routes {
  HOME = "/",
  PROFILE = "/profile",
  LOGIN = "/login",
  SIGNUP = "/signup",
  AUTH = "/auth",
  FEED = "/feed",
  NOT_FOUND = "*",
}

export const publicRoutes = [
  { path: Routes.AUTH, element: Auth },
  { path: Routes.LOGIN, element: Login },
  { path: Routes.SIGNUP, element: Signup },
  { path: Routes.NOT_FOUND, element: NotFound },
]

export const privateRoutes = [
  { path: Routes.HOME, element: Home },
  { path: Routes.PROFILE, element: Profile },
]
