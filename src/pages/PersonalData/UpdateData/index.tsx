import React, {
  SyntheticEvent, useContext, useEffect, useState,
} from 'react';
import { parseISO, format } from 'date-fns';
import { Input, Button } from '../../../components';
import { AuthContext } from '../../../contexts/AuthContext';
import api from '../../../services/axios';

import * as S from './styles';

interface IPropsUpdate {
  closeModal: () => void
}

const UpdateData: React.FC<IPropsUpdate> = (props: IPropsUpdate) => {
  const { closeModal } = props;
  const {
    userLogged: {
      user_type = '',
      name = '',
      course = '',
      advisor = '',
      email = '',
      lattes = '',
      lattes_date = '',
    } = {},
    updateUser,
  } = useContext(
    AuthContext,
  );

  const [form, setForm] = useState({
    name,
    course,
    advisor,
    email,
    lattes,
    lattesDate: lattes_date,
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (prop: string) => (event: {
    target: HTMLInputElement
  }) => {
    setError({ ...error, [prop]: '' });
    setForm({ ...form, [prop]: event.target.value });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  const updateData = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const req = {
        name: form.name,
        email: form.email,
        lattes: form.lattes,
        lattes_date: new Date(form.lattesDate),
        advisor: form.advisor,
        course: form.course,
      };
      const response = await api.post('/user/update', {
        ...req,
      });
      updateUser(response.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    closeModal();
  };

  return (
    <S.Container>
      <S.Form onSubmit={(e) => updateData(e)}>
        <Input
          label="Nome"
          name="name"
          value={form.name}
          onChange={handleChange('name')}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange('email')}
        />
        {
          user_type === 'student'
          && (
          <>
            <Input
              label="Link para o curriculum lattes"
              name="lattes"
              value={form.lattes}
              onChange={handleChange('lattes')}
            />
            <Input
              label="Data da última atualização do curriculum lattes"
              name="date_lattes"
              type="date"
              value={format(parseISO(form.lattesDate), 'yyyy-MM-dd')}
              onChange={handleChange('lattesDate')}
            />
            <Input
              label="Orientador"
              name="advisor"
              value={form.advisor}
              onChange={handleChange('advisor')}
            />
            <Input
              label="Curso"
              name="course"
              value={form.course}
              onChange={handleChange('course')}
            />
          </>
          )
        }
        <Button
          text="Salvar"
          loading={loading}
          type="submit"
        />
      </S.Form>
    </S.Container>
  );
};

export default UpdateData;
