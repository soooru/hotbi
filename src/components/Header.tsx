import styled from 'styled-components';
import useDrawerState from '../hooks/useDrawerState';

const StyledHeader = styled.header`
  background: skyblue;
  display: flex;
  padding: 0 10px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  const { onToggle } = useDrawerState();
  return (
    <>
      <StyledHeader>
        <button onClick={onToggle}>햄버거 메뉴</button>
        <div>프로젝트 이름</div>
      </StyledHeader>
    </>
  );
}

export default Header;
