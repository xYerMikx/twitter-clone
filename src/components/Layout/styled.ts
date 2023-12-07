import styled from "styled-components"

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.s25} ${({ theme }) => theme.spacings.s50};
  display: flex;
  justify-content: space-between;
`
export const Main = styled.main`
  flex: 0 1 50%;
`
