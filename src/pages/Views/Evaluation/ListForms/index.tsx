import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaWpforms } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';

import * as S from './styles';

import { Loading } from '../../../../components';

import api from '../../../../services/axios';

interface ListFormsProps {
  user: {
    name?: string
    usp_code?: string
    advisor?: string
    user_id?: number
  }
}

const ListFormsModal: React.FC<ListFormsProps> = () => {
  const history = useHistory();
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadForms() {
      setLoading(true);
      try {
        const { data } = await api.get('form/read');
        setForms(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    if (!forms || forms.length === 0) loadForms();
  }, []);

  const redirectToTable = (id: number) => {
    history.push({
      pathname: `evaluation/${id}`,
      state: {
        form_id: id,
      },
    });
    window.location.reload();
  };

  return (
    <S.Container>
      <S.Return onClick={() => history.push('/')} aria-label="voltar">
        <MdArrowBack size={20} />
        <span>Voltar</span>
      </S.Return>

      <S.Header>
        <h3>Formulários</h3>
        <h4>
          {' '}
          Selecione o formulário para visualizar as respostas de cada aluno
          {' '}
        </h4>
      </S.Header>

      <p>
        * Formulários com status habilitado são os que estão disponíveis no
        semestre atual para o aluno.
      </p>
      <S.Section>
        {loading && <Loading isLoading={loading} />}
        {forms.map(({ id, name, enabled }) => {
          const styledProps = { enabled };
          return (
            <S.Card
              key={id}
              onClick={() => redirectToTable(id)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...styledProps}
            >
              <h4>{name || 'Sem nome'}</h4>
              <FaWpforms />
              <p>{enabled ? 'Habilitado' : 'Desabilitado'}</p>
            </S.Card>
          );
        })}
      </S.Section>
    </S.Container>
  );
};

export default ListFormsModal;
