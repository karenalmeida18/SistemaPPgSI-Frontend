import React, { useState, useEffect } from 'react';
import { BsEye } from 'react-icons/bs';

import NewEvaluationModal from './NewEvaluationModal';

import * as S from './styles';

import { Table, Modal } from '../../../components';

import api from '../../../services/axios';

interface EvaluationData {
  users: {
    usp_code?: string
    name?: string
  }
}
interface EvaluationResponse {
  data: EvaluationData[]
}

const Evaluation: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [userOpen, setUserOpen] = useState({});

  useEffect(() => {
    async function loadEvaluations() {
      const { data } = (await api.get('evaluate/list/1')) as EvaluationResponse;
      const dataFormatted = data.map(
        ({ users: { usp_code, name }, ...item }) => ({
          ...item,
          name,
          usp_code,
        }),
      );
      setItems(dataFormatted as []);
    }

    loadEvaluations();
  }, []);

  const openModal = (item: Object) => {
    setUserOpen(item);
    setIsModalVisible(true);
  };

  const columns = [
    {
      id: 'name',
      text: 'Nome',
      width: '30%',
    },
    {
      id: 'usp_code',
      text: 'Código USP',
      width: '20%',
    },
    {
      id: 'note_advisor',
      text: 'Nota orientador',
      width: '15%',
    },
    {
      id: 'note_ccp',
      text: 'Nota ccp',
      width: '15%',
    },
    {
      id: 'actions',
      text: 'Ações',
      width: '20%',
      render: (item: Object, value: string) => (
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            border: '1px solid lightgray',
            padding: '0 8px',
          }}
          onClick={() => openModal(item)}
        >
          <BsEye
            style={{
              cursor: 'pointer',
              color: '#1094ab',
              fontSize: '18px',
              marginRight: '5px',
            }}
          />
          Ver mais
        </button>
      ),
    },
  ];

  return (
    <>
      {isModalVisible && (
        <Modal title="Avaliar aluno" closeModal={() => setIsModalVisible(false)}>
          <NewEvaluationModal user={userOpen} />
        </Modal>
      )}
      <S.Container>
        <S.Header>
          {' '}
          <h2> Avaliações </h2>
          {' '}
        </S.Header>
        <Table columns={columns} items={items} />
      </S.Container>
    </>
  );
};

export default Evaluation;
