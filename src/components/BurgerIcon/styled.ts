import styled from "styled-components"

export const BurgerIconWrapper = styled.div`
  width: 30px;
  height: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.z4};
`

export const BurgerLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  transition: all 0.3s ease;
`

export const TopBurgerLine = styled(BurgerLine)<{ $isOpen: boolean }>`
  position: ${({ $isOpen }) => ($isOpen ? "absolute" : "relative")};
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
`

export const MiddleBurgerLine = styled(BurgerLine)<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
`

export const BottomBurgerLine = styled(BurgerLine)<{ $isOpen: boolean }>`
  position: ${({ $isOpen }) => ($isOpen ? "absolute" : "relative")};
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
`
