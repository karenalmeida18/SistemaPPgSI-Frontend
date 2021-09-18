import React, { ReactElement } from 'react';

import * as S from './styles';

import Loading from '../loading';

interface tableProps {
  columns: {
    text: string
    id: string
    width?: string
    render?(item: Object, value: string): ReactElement
  }[]
  items: {
    [key: string]: string
  }[]
  isLoading?: boolean
}

const Table: React.FC<tableProps> = ({
  columns,
  items = [],
  isLoading = false,
}) => (
  <>
    {isLoading || items.length === 0 ? (
      <S.Box>
        {isLoading ? (
          <Loading isLoading={isLoading} />
        ) : (
          <p> Não há nada para mostrar </p>
        )}
      </S.Box>
    ) : (
      <S.Table>
        <thead>
          <S.TableRow>
            {columns.map(({ text, id, ...props }) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <S.TableHead {...props} key={id}>
                {text}
              </S.TableHead>
            ))}
          </S.TableRow>
        </thead>
        <tbody>
          {items.map((item) => (
            <S.TableRow>
              {columns.map(({ id, text, render }) => (
                <S.TableCell key={id}>
                  <span aria-labelledby={text} className="table-mobile">
                    {text}
                    :
                    {' '}
                  </span>
                  <span id={text}>
                    {render ? render(item, item[id]) : item[id]}
                  </span>
                </S.TableCell>
              ))}
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
    )}
  </>
);

export default Table;
