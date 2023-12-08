import styled from "styled-components"

export const TextareaWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s10};
  align-items: flex-end;
  border-top: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.borderColor};
  padding-top: ${({ theme }) => theme.spacings.s10};
  margin-top: ${({ theme }) => theme.spacings.s30};
`
export const AreaColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1 0 60%;
`
export const Image = styled.img`
  align-self: flex-start;
`
export const UploadImage = styled.img`
  cursor: pointer;
`
export const InputForFile = styled.input`
  position: absolute;
  opacity: ${({ theme }) => theme.opacityMin};
  visibility: hidden;
  width: 0;
`
export const Label = styled.label`
  width: 30px;
  height: 30px;
`
export const Textarea = styled.textarea`
  height: 120px;

  outline: none;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSize.f18};
  color: ${({ theme }) => theme.primaryColor};
  background: none;
  border: none;
  resize: none;
  transition: all 0.2s linear;

  &::placeholder {
    font: inherit;
    font-size: ${({ theme }) => theme.fontSize.f18};
    color: ${({ theme }) => theme.primaryColor};
  }
`
