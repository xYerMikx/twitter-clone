import styled from "styled-components"

export const HomeWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.s30} ${({ theme }) => theme.spacings.s10};
`
export const PageTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  color: ${({ theme }) => theme.primaryColor};
`
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`
export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 32px;
  background: ${({ theme }) => theme.bgColor};
  border-radius: 32px;
  border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.primaryColor};
  transition: 300ms all;
  z-index: ${({ theme }) => theme.zIndex.z4};

  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 35px;
    top: 50%;
    background: ${({ theme }) => theme.bgColor};
    border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.primaryColor};
    transform: translate(0, -50%);
    transition: 0.3s all;

    transform: translate(
      ${(props) => (props.theme.currentTheme === "dark" ? "0px" : "28px")},
      -50%
    );
  }
`

export const Input = styled.input`
  opacity: ${({ theme }) => theme.opacityMin};
  position: absolute;

  &:checked + ${Switch} {
    background: ${({ theme }) => theme.bgColor};

    &:before {
      transform: translate(
        ${(props) => (props.theme.currentTheme === "dark" ? "0rem" : "28px")},
        -50%
      );
    }
  }
`
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
