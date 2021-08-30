import React, { FC, InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder?: string
  color?: string
  required?: boolean
  error?: string
}

const Input: FC<InputProps> = ({
  name,
  label,
  required,
  placeholder,
  onChange,
  value,
  error,
  color,
}) => {
  const inputPropStyles = { error };
  return (
    <S.Wrapper>
      <S.Label htmlFor={name} color={color}>
        {label}
        {required && ' *'}
      </S.Label>
      <S.Input
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...inputPropStyles}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default Input;
