import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}
const StyledWrapper = styled.div<Props>`
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`

function WrapperBox({ children, ...props }: Props) {
  return <StyledWrapper {...props}>{children}</StyledWrapper>
}

export default WrapperBox
