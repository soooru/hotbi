import styled from 'styled-components'
import ic_portion from 'assets/images/ic_portion.png'

interface Props {
  total: number
  now: number
}

const ProcessWrap = styled.div`
  position: relative;
  padding: 40px;
  @media screen and (max-width: 500px) {
    padding: 40px 20px 30px;
  }
  img {
    display: block;
    width: 50px;
    height: 50px;
    transform: rotate(30deg);
    position: absolute;
    top: 18px;
    right: 15px;
  }
`
const ProcessBox = styled.div<{ process: number }>`
  width: 100%;
  height: 16px;
  background-color: #fff;
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
  return (
    <ProcessWrap>
      <ProcessBox process={(props.now / props.total) * 100}></ProcessBox>
      <img src={ic_portion} alt="avatar" />
    </ProcessWrap>
  )
}

export default ProcessBar
