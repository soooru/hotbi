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
  bottom: -16px;
  left: 50%;
  border-radius: 20px;
  margin-left: -150px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.active &&
    css`
      bottom: 50px;
      opacity: 1;
    `};
`
const Toast = (props: Props) => (
  <StyledToast {...props}>{props.text}</StyledToast>
)

export default Toast
