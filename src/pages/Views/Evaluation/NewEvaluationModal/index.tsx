import React, { useState, SyntheticEvent, useContext } from 'react';

import * as S from './styles';

import { Input, Button } from '../../../../components';

import api from '../../../../services/axios';

import { AuthContext } from '../../../../contexts/AuthContext';

interface NewEvaluationProps {
  user: {
    name?: string
    usp_code?: string
    user_id?: number
  }
  closeModal(): void,
}

const NewEvaluationModal: React.FC<NewEvaluationProps> = ({
  user: {
    name, usp_code, user_id,
  },
  closeModal,
}) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});

  const { userLogged: { user_type = '' } = {} } = useContext(AuthContext);

  const handleSubmit = async (e: SyntheticEvent) => {
    setLoading(true);
    try {
      await api.post('evaluate/create/1', {
        user_id,
        ...values,
      });
      setLoading(false);
      closeModal();
    } catch (err) {
      setLoading(false);
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
              onChange={handleChange('note_advisor')}
            />
          </>
        ) : (
          <>
            <Input
              required
              name="note_ccp"
              label="Nota"
              placeholder="Insira a nota do aluno"
              onChange={handleChange('note_advisor')}
            />

            <Input
              name="selfguard_ccp"
              label="Ressalva"
              placeholder="Insira a ressalva"
              onChange={handleChange('note_advisor')}
            />
          </>
        )}

        <Button text="Enviar" type="submit" loading={loading} />
      </S.Form>
    </S.Container>
  );
};

export default NewEvaluationModal;
