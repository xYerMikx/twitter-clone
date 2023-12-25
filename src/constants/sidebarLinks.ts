import { Bookmarks } from "@/components/Icons/Bookmarks"
import { Explore } from "@/components/Icons/Explore"
import { Home } from "@/components/Icons/Home"
import { Lists } from "@/components/Icons/Lists"
import { Messages } from "@/components/Icons/Messages"
import { More } from "@/components/Icons/More"
import { Notification } from "@/components/Icons/Notification"
import { Profile } from "@/components/Icons/Profile"

import { Routes } from "./routes"

export const sidebarLinks = [
  {
    name: "Home",
    path: Routes.HOME,
    element: Home,
  },
  {
    name: "Explore",
    path: "/explore",
    element: Explore,
  },
  {
    name: "Notification",
    path: "/notification",
    element: Notification,
  },
  {
    name: "Messages",
    path: "/messages",
    element: Messages,
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    element: Bookmarks,
  },
  {
    name: "Lists",
    path: "/lists",
    element: Lists,
  },
  {
    name: "Profile",
    path: Routes.PROFILE,
    element: Profile,
  },
  {
    name: "More",
    path: "/more",
    element: More,
  },
]
