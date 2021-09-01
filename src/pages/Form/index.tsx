/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Input } from '../../components';

import * as S from './styles';

// eslint-disable-next-line arrow-body-style
const Form: React.FC = () => {
  const renderForm = () => (
    <>
      <Input
        name="email"
        label="E-mail"
        color=""
          // error={}
        required
        placeholder="Insira seu e-mail"
      />
      <Input
        name="name"
        label="Nome do aluno"
        color=""
          // error={}
        required
        placeholder="Insira seu nome"
      />
      <Input
        name="advisor_name"
        label="Nome do orientador"
        color=""
          // error={}
        required
        placeholder="Insira o nome do orientador"
      />
      <Input
        name="usp_number"
        label="Número USP"
        color=""
          // error={}
        required
        placeholder="Insira o número USP"
      />
      <Input
        name="curriculum_lattes"
        label="Link para o curriculum lattes"
        color=""
          // error={}
        required
        placeholder="Insira o link para o curriculum lattes"
      />
      <Input
        name="latest_lattes_update"
        label="Data da última atualização do lattes"
        color=""
          // error={}
        type="date"
        required
        placeholder="Insira a data da última atualização do lattes"
      />
    </>
  );

  return (
    <S.Container>
      <S.Title>Relatório Semestral</S.Title>
      <S.Form>
        {renderForm()}
      </S.Form>
    </S.Container>
  );
};

export default Form;
