import React, { FC } from 'react';
import { VscLoading } from 'react-icons/vsc';

import { StyledButton, LoadingWrapper } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string
  textColor?: string
  text: string
  loading?: boolean
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  loading,
  textColor,
  bgColor,
}) => {
  const buttonStylesProp = { loading, textColor, bgColor };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledButton type={type} disabled={loading} {...buttonStylesProp}>
      {text}
      {loading && (
        <LoadingWrapper>
          <VscLoading />
        </LoadingWrapper>
      )}
    </StyledButton>
  );
};

export default Button;
