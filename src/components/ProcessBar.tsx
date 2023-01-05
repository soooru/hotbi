import styled, { css } from 'styled-components'

interface Props {
  total: number
  now: number
}

const ProcessBox = styled.div<{ process: number }>`
  margin: 10px;
  width: calc(100% - 20px);
  height: 16px;
  background-color: #eee;
  position: relative;
  border-radius: 10px;

  &:before {
    content: '';
    position: absolute;
    height: 16px;
    border-radius: 10px;
    background-color: #07a899;
    animation: processbar-wordpress 2s ease-in;
    width: ${(props) => `${props.process}%`};
  }
`

function ProcessBar(props: Props) {
  return <ProcessBox process={(props.now / props.total) * 100}></ProcessBox>
}

export default ProcessBar
