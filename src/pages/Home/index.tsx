import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BsFillPersonFill, BsReverseLayoutTextSidebarReverse, BsFillChatSquareQuoteFill } from 'react-icons/bs';

import { AuthContext } from '../../contexts/AuthContext';

import * as S from './styles';

const student = [
  {
    title: 'Dados Pessoais',
    description: 'Visualize suas informaçõs pessoais de perfil',
    Icon: BsFillPersonFill,
    route: '/',
  },
  {
    title: 'Histórico',
    description: 'Verificar notas atuais e histórico semestral',
    Icon: BsReverseLayoutTextSidebarReverse,
    route: '/',
  },
  {
    title: 'Formulário',
    description: 'Verificar formulários semestrais disponíveis',
    Icon: BsFillChatSquareQuoteFill,
    route: '/form',
  },
];

const ccp = [
  {
    title: 'Dados Pessoais',
    description: 'Visualize suas informaçõs pessoais de perfil',
    Icon: BsFillPersonFill,
    route: '/',
  },
  {
    title: 'Tabela',
    description: 'Verificar respostas de formulário por aluno, e contabilizar avaliação.',
    Icon: BsReverseLayoutTextSidebarReverse,
    route: '/evaluation',
  },
  {
    title: 'Formulário',
    description: 'Visualizar ou liberar formulário para alunos',
    Icon: BsFillChatSquareQuoteFill,
    route: '/ccp/form',
  },
];

const advisor = [
  {
    title: 'Dados Pessoais',
    description: 'Visualize suas informaçõs pessoais de perfil',
    Icon: BsFillPersonFill,
    route: '/',
  },
  {
    title: 'Tabela',
    description: 'Verificar respostas de formulário por aluno, e contabilizar avaliação.',
    Icon: BsReverseLayoutTextSidebarReverse,
    route: '/evaluation',
  },
];

const screen = {
  advisor,
  ccp,
  student,
};

const Home = () => {
  const history = useHistory();
  const { userLogged: { name = '', user_type = '' } = {} } = useContext(
    AuthContext,
  );

  return (
    <>
      <S.Container>
        <S.Header>
          <h3>{`Olá, ${name}`}</h3>
        </S.Header>

        <S.Section>
          {screen[user_type as keyof typeof screen]?.map(({
            title, description, Icon, route,
          }) => (
            <S.Card key={title} onClick={() => history.push(route)}>
              <S.Icon>
                <Icon />
              </S.Icon>
              <h4>{title}</h4>
              <p>{description}</p>
            </S.Card>
          ))}
        </S.Section>
      </S.Container>
    </>
  );
};

export default Home;
