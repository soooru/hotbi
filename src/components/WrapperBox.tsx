import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import useDrawerState from 'hooks/useDrawerState'

interface Props {
  children?: ReactNode
  open?: string
}
const StyledWrapper = styled.div<Props>`
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: 7px solid #ffffff;
  border-radius: 34px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: calc(100% - 48px);
  max-width: 500px;
  width: calc(100% - 20px);
  top: 24px;
  overflow-y: auto;
  overflow-x: hidden;
`

function WrapperBox({ children, ...props }: Props) {
  const { isActive } = useDrawerState()

  return (
    <StyledWrapper {...props} className={isActive ? 'overflow-hidden' : ''}>
      {children}
    </StyledWrapper>
  )
}

export default WrapperBox
