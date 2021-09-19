/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { Button, Input } from '../../components';
import api from '../../services/axios';

import * as S from './styles';

interface Question {
  id: number;
  description: string;
}

interface Answers {
  [key: string]: string,
}

const Form: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answersValues, setAnswersValues] = useState<Answers>({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleChange = (prop: number) => (event: {
    target: HTMLInputElement
  }) => {
    setError({ ...error, [prop]: '' });
    setAnswersValues({ ...answersValues, [prop]: event.target.value });
  };

  const loadQuestions = async () => {
    try {
      const response = await api.get('/question/read');

      if (response.data) {
        setQuestions(response.data);
      }
    // eslint-disable-next-line no-shadow
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const keys = Object.keys(answersValues);
    const answers = keys.map((key) => (
      {
        question_id: key,
        answer: answersValues[key],
      }
    ));

    setLoading(true);
    try {
      await api.post('/answer/multcreate', {
        answers,
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <S.Container>
      <S.Return onClick={() => history.push('/')}>
        <MdArrowBack size={20} />
        <span>Voltar</span>
      </S.Return>
      <S.Title>Relatório Semestral</S.Title>
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        {
          questions.map((question) => (
            <Input
              name={String(question.id)}
              label={question.description}
              color=""
              onChange={handleChange(question.id)}
                  // error={}
              type="text"
              key={question.id}
              required
            />
          ))
        }
        <S.ContainerButton>
          <Button text="Enviar Relatório" type="submit" loading={loading} />
        </S.ContainerButton>
      </S.Form>
    </S.Container>
  );
};

export default Form;
