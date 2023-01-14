import React from 'react';
import styled from 'styled-components';

import { ButtonProps } from './index';
import { Button as StyledButton } from './styled-button';

export const ElevatedButton: React.FC<ButtonProps> = ({
  text,
  onClick,
}) => (
  <Button onClick={onClick}>
    {text}
  </Button>
);

const Button = styled(StyledButton)`
  border: 1px solid transparent;
  transition: border-color 0.25s;
  background-color: #f9f9f9;

  &:hover {
    border-color: var(--color-primary);
  }
  
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
