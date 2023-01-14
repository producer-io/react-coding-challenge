
import React from 'react';
import styled from 'styled-components';

import { Button as StyledButton } from './styled-button';
import { ButtonProps } from './index';

export const DangerButton: React.FC<ButtonProps> = ({
  text,
  onClick,
}) => (
  <Button onClick={onClick}>
    {text}
  </Button>
);

const Button = styled(StyledButton)`
  color: white;
  background-color: var(--color-danger);
  border: none;

  &:hover {
    background-color: #dc2626c9;
  }
`
