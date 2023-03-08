import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}
const StyledWrapper = styled.div<Props>`
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  height: calc(100vh - 50px);
  min-height: calc(100vh - 50px);
  max-height: 100vh;
  overflow: auto;
  width: calc(100vw - 50px);
  position: relative;
  top: 25px;
  z-index: 1;
  border: 5px solid #9e9e9e;
  box-sizing: border-box;
`

function WrapperBox({ children, ...props }: Props) {
  return <StyledWrapper {...props}>{children}</StyledWrapper>
}

export default WrapperBox
