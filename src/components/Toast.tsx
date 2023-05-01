import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  text: string
  active: boolean
}

const StyledToast = styled.div<Props>`
  font-size: 0.9rem;
  line-height: 16px;
  width: 300px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  height: 16px;
  position: absolute;
  top: 0%;
  left: -100%;
  border-radius: 20px;
  margin-left: -150px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  z-index: 5;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      left: 50%;
    `};
`
const Toast = (props: Props) => (
  <StyledToast {...props}>{props.text}</StyledToast>
)

export default Toast
