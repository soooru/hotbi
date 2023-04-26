import styled from 'styled-components'

interface Props {
  text: string
  clickEvent: () => void
}

const StyledMenuBtn = styled.button`
  display: block;
  padding: 12px 24px;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px 0 26px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  border: none;
  background: #fff;
`
function MenuBtn({ clickEvent, text }: Props) {
  return <StyledMenuBtn onClick={clickEvent}>{text}</StyledMenuBtn>
}

export default MenuBtn
