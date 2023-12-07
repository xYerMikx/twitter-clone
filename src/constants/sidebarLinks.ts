import { Bookmarks } from "@/components/Icons/Bookmarks"
import { Explore } from "@/components/Icons/Explore"
import { Home } from "@/components/Icons/Home"
import { Lists } from "@/components/Icons/Lists"
import { Messages } from "@/components/Icons/Messages"
import { More } from "@/components/Icons/More"
import { Notification } from "@/components/Icons/Notification"
import { Profile } from "@/components/Icons/Profile"

export const sidebarLinks = [
  {
    path: "Home",
    element: Home,
  },
  {
    path: "Explore",
    element: Explore,
  },
  {
    path: "Notification",
    element: Notification,
  },
  {
    path: "Messages",
    element: Messages,
  },
  {
    path: "Bookmarks",
    element: Bookmarks,
  },
  {
    path: "Lists",
    element: Lists,
  },
  {
    path: "Profile",
    element: Profile,
  },
  {
    path: "More",
    element: More,
  },
]
