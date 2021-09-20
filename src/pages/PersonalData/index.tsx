import React, { useContext, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import { Return, Modal } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
// import { DateHelper } from '../../utils/date';
import * as S from './styles';
import UpdateData from './UpdateData';

const PersonalData: React.FC = () => {
  const [openModalUpdateData, setOpenModalUpdateData] = useState(false);

  const {
    userLogged: {
      name = '',
      user_type = '',
      usp_code = '',
      course = '',
      advisor = '',
      email = '',
      lattes = '',
      lattes_date = '',
    } = {},
  } = useContext(
    AuthContext,
  );

  const renderUserType = (userType: string) => {
    switch (userType) {
      case 'student':
        return 'Aluno';
      case 'advisor':
        return 'Orientador';
      case 'ccp':
        return 'CCP';
      default:
        return '';
    }
  };

  return (
    <>
      {
        openModalUpdateData
        && (
        <Modal
          closeModal={() => setOpenModalUpdateData(false)}
          title="Atualizar dados"
        >
          <UpdateData closeModal={() => setOpenModalUpdateData(false)} />
        </Modal>
        )
      }
      <S.Container>
        <Return route="/" />
        <S.Title>
          Dados pessoais
        </S.Title>
        <S.ContainerPersonalData>
          <S.ContainerInfo>
            <S.Info> Usuário </S.Info>
            <S.NameInfo>
              {' '}
              { renderUserType(user_type) }
              {' '}
            </S.NameInfo>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <S.Info> Nome </S.Info>
            <S.NameInfo>
              {' '}
              { name }
              {' '}
            </S.NameInfo>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <S.Info> Código USP </S.Info>
            <S.NameInfo>
              {' '}
              { usp_code }
              {' '}
            </S.NameInfo>
          </S.ContainerInfo>
          <S.ContainerInfo>
            <S.Info> Email </S.Info>
            <S.NameInfo>
              {' '}
              { email }
              {' '}
            </S.NameInfo>
          </S.ContainerInfo>
          {
            user_type === 'student'
            && (
            <>
              <S.ContainerInfo>
                <S.Info> Curriculum Lattes </S.Info>
                <S.NameInfo>
                  {' '}
                  { lattes }
                  {' '}
                </S.NameInfo>
              </S.ContainerInfo>
              <S.ContainerInfo>
                <S.Info> Data da última atualização do curriculum lattes </S.Info>
                <S.NameInfo>
                  {' '}
                  { format(parseISO(lattes_date), 'dd/MM/yyyy')}
                  {' '}
                </S.NameInfo>
              </S.ContainerInfo>
              <S.ContainerInfo>
                <S.Info> Orientador </S.Info>
                <S.NameInfo>
                  {' '}
                  { advisor }
                  {' '}
                </S.NameInfo>
              </S.ContainerInfo>
              <S.ContainerInfo>
                <S.Info> Curso </S.Info>
                <S.NameInfo>
                  {' '}
                  { course }
                  {' '}
                </S.NameInfo>
              </S.ContainerInfo>
            </>
            )
        }
        </S.ContainerPersonalData>
        <S.Edit onClick={() => setOpenModalUpdateData(true)}>
          <MdEdit size={24} />
          Atualizar dados
        </S.Edit>
      </S.Container>
    </>
  );
};

export default PersonalData;
