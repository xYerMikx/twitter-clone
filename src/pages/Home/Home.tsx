import { useAppDispatch } from "@/hooks/redux"
import { HomeWrapper, Input, Label, NavBar, PageTitle, Switch } from "./styled"
import { themeActions } from "@/store/slices/themeSlice"
import { Feed } from "@/components/Feed/Feed"
import { Moon } from "@/components/Icons/Moon"
import { Sun } from "@/components/Icons/Sun"

export function Home() {
  const dispatch = useAppDispatch()

  const changeTheme = () => {
    dispatch(themeActions.setTheme())
  }
  return (
    <HomeWrapper>
      <NavBar>
        <PageTitle>Home</PageTitle>
        <Label>
          <Input type="checkbox" onChange={changeTheme} />
          <Switch>
            <Sun />
            <Moon />
          </Switch>
        </Label>
      </NavBar>
      <Feed />
    </HomeWrapper>
  )
}
