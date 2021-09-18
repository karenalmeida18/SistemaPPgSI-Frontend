import React, { useState, SyntheticEvent, useContext } from 'react';

import * as S from './styles';

import { Input, Button } from '../../../../components';

import api from '../../../../services/axios';

import { AuthContext } from '../../../../contexts/AuthContext';

interface NewEvaluationProps {
  user: {
    name?: string
    usp_code?: string
    id?: number
    advisor?: string
  }
  closeModal(): void
}

const NewEvaluationModal: React.FC<NewEvaluationProps> = ({
  user: {
    name, usp_code, id, advisor = '',
  },
  closeModal,
}) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});
  const [error, setError] = useState('');

  console.log({ id });

  const { userLogged: { user_type = '' } = {} } = useContext(AuthContext);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('evaluate/create/1', {
        user_id: id,
        ...values,
      });
      setLoading(false);
      closeModal();
    } catch (err) {
      setLoading(false);
      setError('Ocorreu um erro, tente novamente mais tarde.');
    }
  };

  const handleChange = (prop: string) => (event: {
    target: HTMLInputElement
  }) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <S.Container>
      <S.Subtitle>Dados do aluno</S.Subtitle>
      <S.Header>
        <p>
          <b>Nome: </b>
          {name}
        </p>
        <p>
          <b>Código USP: </b>
          {usp_code}
        </p>
        <p>
          <b>Nome do orientador: </b>
          {advisor}
        </p>
      </S.Header>

      <S.Subtitle>Adicionar avaliação</S.Subtitle>

      <S.Form onSubmit={(e) => handleSubmit(e)}>
        {user_type === 'advisor' ? (
          <>
            <Input
              required
              name="note_advisor"
              label="Nota"
              placeholder="Insira a nota do aluno"
              onChange={handleChange('note_advisor')}
            />

            <Input
              name="selfguard_advisor"
              label="Ressalva"
              placeholder="Insira a ressalva"
              onChange={handleChange('selfguard_advisor')}
            />
          </>
        ) : (
          <>
            <Input
              required
              name="note_ccp"
              label="Nota"
              placeholder="Insira a nota do aluno"
              onChange={handleChange('note_ccp')}
            />

            <Input
              name="selfguard_ccp"
              label="Ressalva"
              placeholder="Insira a ressalva"
              onChange={handleChange('selfguard_ccp')}
            />
          </>
        )}

        <Button text="Enviar" type="submit" loading={loading} />
        {error && <S.FormError>{error}</S.FormError>}
      </S.Form>
    </S.Container>
  );
};

export default NewEvaluationModal;
