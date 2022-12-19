import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children?: ReactNode;
  mode?: string;
}
const StyledButton = styled.button<Props>`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  ${(props) =>
    props.mode === 'primary' &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}
`;

function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
