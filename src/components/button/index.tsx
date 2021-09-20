import React, { FC, ElementType } from 'react';
import { VscLoading } from 'react-icons/vsc';

import { StyledButton, LoadingWrapper, IconWrapper } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string
  textColor?: string
  text?: string
  loading?: boolean
  Icon?: ElementType
  ariaLabel?: string
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  loading = false,
  textColor,
  bgColor,
  Icon,
  ariaLabel,
  onClick,
}) => {
  const buttonStylesProp = { loading, textColor, bgColor };
  return (
    <StyledButton
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      disabled={loading}
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonStylesProp}
    >
      {text}
      {loading && (
        <LoadingWrapper>
          <VscLoading />
        </LoadingWrapper>
      )}
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
    </StyledButton>
  );
};

export default Button;
