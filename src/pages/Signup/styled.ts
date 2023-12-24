import styled from "styled-components"

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.s20} 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  max-height: 100vh;
`
