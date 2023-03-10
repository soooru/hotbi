import styled, { css } from 'styled-components'
import useDrawerState from 'hooks/useDrawerState'
import { NavLink } from 'react-router-dom'

interface Props {
  open: string
}

const StyledNavHead = styled.div`
  text-align: right;
  padding: 10px;
`
const StyledNav = styled.nav<Props>`
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100%;
  transition: all 0.3s ease-in-out;
  transform: translate(-300px);
  z-index: 2;
  ${(props) =>
    props.open === 'open' &&
    css`
      transform: translate(0px);
    `}
`
const StyledListItem = styled.li`
  a {
    font-size: 1.2rem;
    padding: 16px;
    display: block;
  }
`
const StyleDim = styled.div`
  background: #000;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
function Drawer() {
  const { onToggle, isActive } = useDrawerState()

  return (
    <>
      {isActive ? <StyleDim onClick={onToggle} /> : null}
      <StyledNav open={isActive ? 'open' : 'close'}>
        <StyledNavHead>
          <button onClick={onToggle}>닫기</button>
        </StyledNavHead>
        <div>
          <ul onClick={onToggle}>
            <StyledListItem>
              <NavLink to="/">처음으로</NavLink>
            </StyledListItem>
            <StyledListItem>
              <NavLink to="store">모든 인형</NavLink>
            </StyledListItem>
            <StyledListItem>
              <NavLink to="developer">가게 정보</NavLink>
            </StyledListItem>
          </ul>
        </div>
      </StyledNav>
    </>
  )
}

export default Drawer
