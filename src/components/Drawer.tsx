import styled from 'styled-components';
import useDrawerState from '../hooks/useDrawerState';

const StyledNav = styled.nav`
  background: pink;
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
`;

function Drawer() {
  const { onToggle, isActive } = useDrawerState();

  return (
    <>
      {isActive && (
        <StyledNav>
          <div>
            {' '}
            <button onClick={onToggle}>햄버거 메뉴</button>
          </div>
          <div>네비게이션이에요</div>
        </StyledNav>
      )}
    </>
  );
}

export default Drawer;
