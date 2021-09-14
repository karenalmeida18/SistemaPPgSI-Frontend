import React, { useState, useEffect } from 'react';
import { BsEye, BsPencil } from 'react-icons/bs';

import ListQuestionsModal from './ListQuestionsModal';
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
  const [isEvaluationModalVisible, setIsEvaluationModalVisible] = useState(false);
  const [isQuestionModalVisible, setIsQuestionModalVisible] = useState(false);

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

  const openEvaluationModal = (item: Object) => {
    setUserOpen(item);
    setIsEvaluationModalVisible(true);
  };

  const openQuestionsModal = (item: Object) => {
    setUserOpen(item);
    setIsQuestionModalVisible(true);
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
        <div style={{ display: 'flex' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              border: '1px solid lightgray',
              padding: '0 8px',
            }}
            onClick={() => openQuestionsModal(item)}
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
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              border: '1px solid lightgray',
              padding: '0 8px',
              marginLeft: '8px',
            }}
            onClick={() => openEvaluationModal(item)}
          >
            <BsPencil
              style={{
                cursor: 'pointer',
                color: '#1094ab',
                fontSize: '18px',
                marginRight: '5px',
              }}
            />
            Avaliar
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      {isQuestionModalVisible && (
        <Modal
          title="Informações"
          closeModal={() => setIsQuestionModalVisible(false)}
        >
          <ListQuestionsModal user={userOpen} />
        </Modal>
      )}

      {isEvaluationModalVisible && (
        <Modal
          title="Avaliar aluno"
          closeModal={() => setIsEvaluationModalVisible(false)}
        >
          <NewEvaluationModal user={userOpen} closeModal={() => setIsEvaluationModalVisible(false)} />
        </Modal>
      )}

      <S.Container>
        <S.Header>
          {' '}
          <h2> Avaliações </h2>
        </S.Header>
        <Table columns={columns} items={items} />
      </S.Container>
    </>
  );
};

export default Evaluation;
