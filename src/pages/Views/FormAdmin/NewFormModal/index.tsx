import React, { useState } from 'react';

import * as S from './styles';

import {
  Input, Button,
} from '../../../../components';

import api from '../../../../services/axios';

const NewFormModal: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    name: '',
  });

  async function handleCreateForm() {
    setError('');
    setLoading(true);
    try {
      await api.post('form/create', {
        ...values,
      });
      setLoading(false);
      window.location.reload();
    } catch (err) {
      setLoading(false);
      setError('Ocorreu um erro, tente novamente mais tarde.');
    }
  }

  return (
    <S.Container>
      <S.Subtitle>Aidicionar novo formulário</S.Subtitle>
      <p>* Só é permetido habiltar um formulário por semestre.</p>
      <S.Form>
        <Input
          name="name"
          label="Nome"
          color=""
          type="text"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
      </S.Form>
      {error && <S.FormError>{error}</S.FormError>}
      <Button text="Adicionar" onClick={() => handleCreateForm()} loading={loading} />
    </S.Container>
  );
};

export default NewFormModal;
