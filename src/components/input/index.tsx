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
  name, label, color, required, placeholder, onChange, value,
}) => (
  <S.Wrapper>
    <S.Label color={color} htmlFor={name}>
      {label}
      {required && ' *'}
    </S.Label>
    <S.Input id={name} placeholder={placeholder} onChange={onChange} value={value} />
  </S.Wrapper>
);

export default Input;
