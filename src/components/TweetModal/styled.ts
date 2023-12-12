import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Modal = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  padding: ${({ theme }) => theme.spacings.s20};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: 0px 0.5px 10px 2px ${({ theme }) => theme.borderColor};

  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.bgColor};
`
export const Button = styled.button`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.s15};
  font-size: ${({ theme }) => theme.fontSize.f20};
  border: none;
  background: none;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.2s linear;
  &:hover {
    background: ${({ theme }) => theme.bgSidebarColor};
    opacity: ${({ theme }) => theme.opacity};
  }
`
