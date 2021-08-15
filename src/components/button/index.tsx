import React, { FC } from 'react';

import StyledButton from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string
  textColor?: string
  text: string
}

const Button: FC<ButtonProps> = ({
  bgColor, textColor, text, ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledButton {...props}>
    {text}
  </StyledButton>
);

export default Button;
