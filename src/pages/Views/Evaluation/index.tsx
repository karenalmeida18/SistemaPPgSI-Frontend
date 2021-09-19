import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsEye, BsPencil } from 'react-icons/bs';
import { MdArrowBack } from 'react-icons/md';

import ListQuestionsModal from './ListQuestionsModal';
import NewEvaluationModal from './NewEvaluationModal';

import * as S from './styles';

import { Table, Modal } from '../../../components';

import api from '../../../services/axios';

interface EvaluationProps {
  location: {
    state: {
      form_id?: number
    }
  }
}

interface EvaluationData {
  user_id: string
  id?: number
  users: {
    usp_code?: string
    name?: string
  }
}
interface EvaluationResponse {
  data: EvaluationData[]
}

interface UserData {
  id: string
}
interface UserResponse {
  data: UserData[]
}

const Evaluation: React.FC<EvaluationProps> = ({
  location: { state: { form_id } = {} } = {},
}) => {
  const [isEvaluationModalVisible, setIsEvaluationModalVisible] = useState(
    false,
  );
  const [isQuestionModalVisible, setIsQuestionModalVisible] = useState(false);

  const [items, setItems] = useState([]);
  const [userOpen, setUserOpen] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function loadEvaluations() {
      try {
        setIsLoading(true);
        const { data: userList } = (await api.get('user/read')) as UserResponse;
        const { data: evaluateList } = (await api.get(
          `evaluate/list/${form_id}`,
        )) as EvaluationResponse;

        const dataFormatted = userList.map((user) => {
          const evaluation = evaluateList.find(
            ({ user_id }) => user_id === user.id,
          );
          delete evaluation?.id;
          return {
            ...user,
            ...evaluation,
          };
        });

        setItems(dataFormatted as []);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
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
      width: '20%',
    },
    {
      id: 'usp_code',
      text: 'Código USP',
      width: '15%',
    },
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
    {
      id: 'actions',
      text: 'Ações',
      width: '15%',
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
          <ListQuestionsModal user={userOpen} form_id={form_id} />
        </Modal>
      )}

      {isEvaluationModalVisible && (
        <Modal
          title="Avaliar aluno"
          closeModal={() => setIsEvaluationModalVisible(false)}
        >
          <NewEvaluationModal
            form_id={form_id}
            user={userOpen}
            closeModal={() => setIsEvaluationModalVisible(false)}
          />
        </Modal>
      )}

      <S.Container>
        <S.Return onClick={() => history.push('/evaluation')} aria-label="voltar">
          <MdArrowBack size={20} />
          <span>Voltar</span>
        </S.Return>
        <S.Header>
          {' '}
          <h2> Avaliações </h2>
        </S.Header>
        <Table isLoading={isLoading} columns={columns} items={items} />
      </S.Container>
    </>
  );
};

export default Evaluation;
