import React from 'react';

import * as S from './styles';

interface tableProps {
  columns: {
    text: string
    id: string,
    width?: string,
  }[]
  items: {
    [key: string]: string;
  }[]
}

const Table: React.FC<tableProps> = ({ columns, items }) => (
  <S.Table>
    <S.TableRow>
      {columns.map(({ text, id, ...props }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <S.TableHead {...props} key={id}>{text}</S.TableHead>
      ))}
    </S.TableRow>
    {items.map((item) => (
      <S.TableRow>
        {columns.map(({ id, text }) => (
          <S.TableCell key={id}>
            <span aria-labelledby={text} className="table-mobile">
              {text}
              :
              {' '}
            </span>
            <span id={text}>{item[id]}</span>
          </S.TableCell>
        ))}
      </S.TableRow>
    ))}
  </S.Table>
);

export default Table;
