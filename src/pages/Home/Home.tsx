import { useAppDispatch } from "@/hooks/redux"
import { HomeWrapper, Input, Label, NavBar, PageTitle, Switch } from "./styled"
import { themeActions } from "@/store/slices/themeSlice"

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
          <Switch />
        </Label>
      </NavBar>
    </HomeWrapper>
  )
}
