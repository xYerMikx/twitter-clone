import styled, { keyframes } from "styled-components"
import { NotificationStatuses } from "@/constants/notificationStatus"

const fadeIn = keyframes`
  0% { opacity: ${({ theme }) => theme.opacityMin}; transform: translateY(50px); }
  100% { opacity: ${({ theme }) => theme.opacityMax}; transform: translateY(0); }
`

const fadeOut = keyframes`
  0% { opacity: ${({ theme }) => theme.opacityMax}; transform: translateY(0); }
  100% { opacity: ${({ theme }) => theme.opacityMin}; transform: translateX(200px); }
`

const slideOut = keyframes`
  0% { width: 100%; }
  100% { width: 0; }
`

export const NotificationWrapper = styled.div<{
  $type: string
}>`
  position: relative;
  border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 200px;
  padding: ${({ theme }) => theme.spacings.s10};
  display: flex;
  justify-content: space-between;
  color: ${({ theme, $type }) =>
    $type === NotificationStatuses.SUCCESS ? theme.green : theme.red};
  animation:
    ${fadeIn} 0.5s ease-in-out,
    ${fadeOut} 0.5s 2.25s ease-in-out forwards;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ theme, $type }) =>
      $type === NotificationStatuses.SUCCESS ? theme.green : theme.red};
    animation: ${slideOut} 2.5s linear forwards;
  }
`

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.lightGray};
  font-size: ${({ theme }) => theme.fontSize.f20};
  transition: all 0.2s linear;

  &:hover {
    filter: brightness(110%);
  }
`
export const StyledP = styled.p``
