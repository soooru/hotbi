import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}
const StyledWrapper = styled.div<Props>`
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  height: calc(100vh - 40px);
  min-height: calc(100vh - 40px);
  max-height: 100vh;
  overflow: auto;
  width: calc(100vw - 40px);
  position: relative;
  top: 20px;
`

function WrapperBox({ children, ...props }: Props) {
  return <StyledWrapper {...props}>{children}</StyledWrapper>
}

export default WrapperBox
