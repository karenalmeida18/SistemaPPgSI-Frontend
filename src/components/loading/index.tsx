import React, { FC } from 'react';
import { VscLoading } from 'react-icons/vsc';

import { LoadingWrapper } from './styles';

interface LoadingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean
}

const Button: FC<LoadingProps> = ({ isLoading }) => (
  <>
    {isLoading && (
      <LoadingWrapper>
        <VscLoading />
      </LoadingWrapper>
    )}
  </>
);

export default Button;
