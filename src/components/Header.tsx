import styled from "styled-components";
import useDrawerState from "../hooks/useDrawerState";

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
        <button onClick={onToggle}>menu</button>
        <div>logo</div>
      </StyledHeader>
    </>
  );
}

export default Header;
