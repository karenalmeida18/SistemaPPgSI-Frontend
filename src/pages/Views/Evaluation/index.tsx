import React from 'react';

import { Table } from '../../../components';

import * as S from './styles';

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
    id: 'updated_at',
    text: 'Data de resposta',
    width: '15%',
  },
  {
    id: 'advisor_note',
    text: 'Nota orientador',
    width: '15%',
  },
  {
    id: 'ccp_note',
    text: 'Nota ccp',
    width: '10%',
  },
  {
    id: 'actions',
    text: 'Ações',
    width: '10%',
  },
];

const items = [
  {
    name: 'Karen',
    usp_code: '18',
    updated_at: '',
    advisor_note: '',
    ccp_note: '',
  },
  {
    name: 'Maykon',
    usp_code: '20',
    updated_at: '',
    advisor_note: '',
    ccp_note: '',
  },
];

const Evaluation: React.FC = () => (
  <S.Container>
    <S.Header>
      {' '}
      <h2> Avaliações </h2>
      {' '}
    </S.Header>
    <Table
      columns={columns}
      items={items}
    />
  </S.Container>
);

export default Evaluation;
