import styled, { css } from 'styled-components'
import useDrawerState from 'hooks/useDrawerState'
import { NavLink } from 'react-router-dom'

interface Props {
  open: string
}

const StyledNav = styled.nav<Props>`
  background: pink;
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  transform: translate(-300px);
  ${(props) =>
    props.open === 'open' &&
    css`
      transform: translate(0px);
    `}
`

function Drawer() {
  const { onToggle, isActive } = useDrawerState()

  return (
    <>
      <StyledNav open={isActive ? 'open' : 'close'}>
        <div>
          <button onClick={onToggle}>닫기</button>
        </div>
        <div>
          <ul onClick={onToggle}>
            <li>
              <NavLink to="question">question 페이지</NavLink>
            </li>
            <li>
              <NavLink to="result/intp">결과 페이지</NavLink>
            </li>
            <li>
              <NavLink to="store">모든 결과 페이지</NavLink>
            </li>
            <li>
              <NavLink to="developer">만든사람</NavLink>
            </li>
            <li>
              <NavLink to="notfound">notFound 페이지</NavLink>
            </li>
          </ul>
        </div>
      </StyledNav>
    </>
  )
}

export default Drawer
