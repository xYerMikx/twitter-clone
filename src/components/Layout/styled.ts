import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  padding: 0 ${({ theme }) => theme.spacings.s50};
  display: flex;
  justify-content: space-between;
`
export const Main = styled.main`
  flex: 1 1 65%;
`
