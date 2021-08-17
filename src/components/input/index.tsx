import React, { FC, InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder?: string
  color?: string
  required?: boolean
}

const Input: FC<InputProps> = ({
  name, label, color, required, placeholder,
}) => (
  <S.Wrapper>
    <S.Label color={color} htmlFor={name}>
      {label}
      {required && ' *'}
    </S.Label>
    <S.Input id={name} placeholder={placeholder} />
  </S.Wrapper>
);

export default Input;
