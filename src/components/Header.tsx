import styled from 'styled-components'
import useDrawerState from 'hooks/useDrawerState'

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
        <button id="menu" onClick={onToggle}>
          menu
        </button>
      </StyledHeader>
    </>
  )
}

export default Header
