import React, { useEffect, useState } from 'react';

import * as S from './styles';

import { Loading } from '../../../../components';

import api from '../../../../services/axios';

interface ListQuestionsProps {
  user: {
    name?: string
    usp_code?: string
    user_id?: number
  }
}

const ListQuestionsModal: React.FC<ListQuestionsProps> = ({
  user: { name, usp_code, user_id },
}) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadQuestions() {
      setLoading(true);
      try {
        const { data } = await api.get('question/readByUserId/1', {
          params: { user_id },
        });
        setQuestions(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    if (!questions || questions.length === 0) loadQuestions();
  }, []);

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

      <S.Subtitle>Respostas</S.Subtitle>
      <Loading isLoading={loading} />

      {!loading && questions.map(({ description, answers = [], id }, index) => (
        <S.Question key={id}>
          <p>
            <b>{`${index + 1} - ${description}`}</b>
          </p>
          {answers.map(({ answer }) => (
            <p>{answer}</p>
          ))}
        </S.Question>
      ))}
    </S.Container>
  );
};

export default ListQuestionsModal;
