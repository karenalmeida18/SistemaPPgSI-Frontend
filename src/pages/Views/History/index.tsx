import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import * as S from './styles';

import { Table } from '../../../components';

import api from '../../../services/axios';

interface formType {
  data: {
    id: number
    name: string
  }
}

const History: React.FC = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function loadHistorys() {
      try {
        setIsLoading(true);
        const { data: { id } } = await api.get('form/enabled') as formType;

        const { data } = await api.get(`evaluate/read/${id}`);
        setItems(data as []);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    }

    loadHistorys();
  }, []);

  const columns = [
    {
      id: 'note_advisor',
      text: 'Nota orientador',
      width: '10%',
    },
    {
      id: 'selfguard_advisor',
      text: 'Ressalva Orientador',
      width: '15%',
    },
    {
      id: 'note_ccp',
      text: 'Nota CCP',
      width: '10%',
    },
    {
      id: 'selfguard_ccp',
      text: 'Ressalva CCP',
      width: '15%',
    },
  ];

  return (
    <>
      <S.Container>
        <S.Return onClick={() => history.push('/')} aria-label="voltar">
          <MdArrowBack size={20} />
          <span>Voltar</span>
        </S.Return>
        <S.Header>
          {' '}
          <h2> Histórico da última avaliação </h2>
        </S.Header>
        <Table isLoading={isLoading} columns={columns} items={items} />
      </S.Container>
    </>
  );
};

export default History;
