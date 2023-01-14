
import React from 'react';
import styled from 'styled-components';

import { Button as StyledButton } from './styled-button';
import { ButtonProps } from './index';

export const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  onClick,
}) => (
  <Button onClick={onClick}>
    {text}
  </Button>
);

const Button = styled(StyledButton)`
  color: var(--color-gray-800);
  background-color: white ;
  border: 1px solid var(--color-gray-400);
`
