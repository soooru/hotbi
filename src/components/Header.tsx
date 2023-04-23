import styled from 'styled-components'
import useDrawerState from 'hooks/useDrawerState'
import MenuBtn from 'components/MenuBtn'

const StyledHeader = styled.header`
  display: flex;
  padding: 0 10px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`

function Header() {
  const { onToggle } = useDrawerState()
  return (
    <>
      <StyledHeader>
        <MenuBtn clickEvent={onToggle} text="메뉴" />
      </StyledHeader>
    </>
  )
}

export default Header
