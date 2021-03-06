import React, {
  FC, InputHTMLAttributes, ElementType, useState,
} from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder?: string
  color?: string
  required?: boolean
  error?: string
  Icon?: ElementType,
  disabled?: boolean,
  iconOnClick?(): void,
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
  type,
  Icon,
  iconOnClick,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputPropStyles = { error, disabled };

  const RenderPasswordIcon = !showPassword
    ? <AiOutlineEye onClick={() => setShowPassword(true)} />
    : <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} />;

  const renderTypePassword = showPassword ? 'text' : 'password';

  return (
    <S.Wrapper>
      <S.Label htmlFor={name} color={color}>
        {label}
        {required && ' *'}
      </S.Label>
      <S.InputWrapper>
        <S.Input
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...inputPropStyles}
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type={type === 'password' ? (renderTypePassword) : type}
          required={required}
        />
        {type === 'password' && (RenderPasswordIcon)}
        {Icon && <Icon onClick={iconOnClick || undefined} className="icon-custom" />}
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default Input;
