import styled from 'styled-components';
import useDrawerState from '../hooks/useDrawerState';

const StyledNav = styled.nav`
  background: pink;
`;

function Drawer() {
  const { isActive, onToggle } = useDrawerState();
  return (
    <>
      {isActive && <StyledNav>네비게이션 바에용</StyledNav>}
      <button onClick={onToggle}>
        네비게이션 바 활성 여부 훅을 만들었어요 :{' '}
        {isActive ? 'active' : 'not-active'}
      </button>
    </>
  );
}

export default Drawer;
