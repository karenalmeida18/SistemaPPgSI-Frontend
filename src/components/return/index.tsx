import React, { FC } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

interface ReturnProps {
  route: string
}

const Return: FC<ReturnProps> = ({ route }) => {
  const history = useHistory();
  return (
    <S.Container onClick={() => history.push(route)}>
      <MdArrowBack size={20} />
      <span>Voltar</span>
    </S.Container>
  );
};

export default Return;
