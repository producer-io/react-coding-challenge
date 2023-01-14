import React from 'react';
import styled from 'styled-components';

import { Button as StyledButton } from './styled-button';
import {ButtonProps} from './index';

export const TextButton: React.FC<ButtonProps> = ({
  text,
  onClick,
}) => (
  <Button onClick={onClick}>
    {text}
  </Button>
);

const Button = styled(StyledButton)`
  border: none;
  color: var(--color-primary);
  background: none;
  
  &:hover {
    cursor: pointer;
  }
`
