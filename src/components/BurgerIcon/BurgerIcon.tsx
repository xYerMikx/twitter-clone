import {
  BottomBurgerLine,
  BurgerIconWrapper,
  MiddleBurgerLine,
  TopBurgerLine,
} from "./styled"

interface IBurgerIconProps {
  isOpen: boolean
  onClick: () => void
}
export function BurgerIcon({ isOpen, onClick }: IBurgerIconProps) {
  return <BurgerIconWrapper onClick={onClick}>
    <TopBurgerLine $isOpen={isOpen} />
    <MiddleBurgerLine $isOpen={isOpen} />
    <BottomBurgerLine $isOpen={isOpen} />
  </BurgerIconWrapper>
}
