import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  children?: ReactNode
  mode?: string
}
const StyledButton = styled.button<Props>`
  border-radius: 10px;
  font-size: 1.2rem;
  border: 1px solid lightgray;
  padding: 0px;
  ${(props) =>
    props.mode === 'primary' &&
    css`
      color: white;
      background: #9c27b0;
      border-color: #9c27b0;
      a {
        color: white;
        display: block;
        padding: 10px 12px;
      }
      :hover {
        background: #7b1fa2;
      }
    `}
`

function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
