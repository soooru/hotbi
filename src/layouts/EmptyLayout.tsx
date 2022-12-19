import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const EmptyElements = styled.section`
  background: green;
`;

// ----------------------------------------------------------------------

function EmptyLayout() {
  return (
    <>
      <EmptyElements></EmptyElements>
      <Outlet />
    </>
  );
}

export default EmptyLayout;
