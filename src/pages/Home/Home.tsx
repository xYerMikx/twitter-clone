import { useAppDispatch } from "@/hooks/redux"
import {
  HomeWrapper,
  Input,
  Label,
  NavBar,
  PageTitle,
  Switch,
  Text,
  ThemeWrapper,
} from "./styled"
import { themeActions } from "@/store/slices/themeSlice"
import { Feed } from "@/components/Feed/Feed"

export function Home() {
  const dispatch = useAppDispatch()

  const changeTheme = () => {
    dispatch(themeActions.setTheme())
  }
  return (
    <HomeWrapper>
      <NavBar>
        <PageTitle>Home</PageTitle>
        <ThemeWrapper>
          <Text>Theme</Text>
          <Label>
            <Input type="checkbox" onChange={changeTheme} />
            <Switch />
          </Label>
        </ThemeWrapper>
      </NavBar>
      <Feed />
    </HomeWrapper>
  )
}
