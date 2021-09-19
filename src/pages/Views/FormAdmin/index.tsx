import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaWpforms } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

import * as S from './styles';

import DetailsModal from './DetailsModal';
import NewFormModal from './NewFormModal';
import { Loading, Modal, Button } from '../../../components';

import api from '../../../services/axios';

interface FormType {
  id?: number
  name?: string
  enabled?: boolean
}

interface ListFormsProps {
  user: {
    name?: string
    usp_code?: string
    advisor?: string
    user_id?: number
  }
}

const FormAdmin: React.FC<ListFormsProps> = () => {
  const history = useHistory();
  const [isModalDetailsVisible, setIsModalDetailsVisible] = useState(false);
  const [isModalNewFormVisible, setIsModalNewFormVisible] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeForm, setActiveForm] = useState<FormType>({});
  const [activeFormId, setActiveFormId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState('');

  async function loadForms() {
    setLoading(true);
    try {
      const { data } = await api.get('form/read');
      setForms(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!forms || forms.length === 0) loadForms();
  }, []);

  async function handleDelete() {
    setError('');
    setDeleteLoading(true);
    try {
      await api.delete(`form/delete/${activeFormId}`);
      setDeleteLoading(false);
      loadForms();
      setOpenDialog(false);
    } catch (err) {
      setDeleteLoading(false);
      setError('Ocorreu um erro. Tente novamente');
    }
  }

  const handleOpenModal = (form: FormType) => {
    setIsModalDetailsVisible(true);
    setActiveForm(form);
  };

  return (
    <>
      {isModalDetailsVisible && (
        <Modal
          title="Visualizar perguntas"
          closeModal={() => setIsModalDetailsVisible(false)}
        >
          <DetailsModal form={activeForm} />
        </Modal>
      )}

      {isModalNewFormVisible && (
        <Modal
          title="Adicionar novo formulário"
          closeModal={() => setIsModalNewFormVisible(false)}
        >
          <NewFormModal />
        </Modal>
      )}

      {openDialog && (
        <Modal
          title="Deleter formulario"
          closeModal={() => setOpenDialog(false)}
        >
          <>
            <S.Dialog>
              <p> Tem Certeza que deseja deletar esse formulário? </p>
              <div>
                <Button text="Não, manter" onClick={() => setOpenDialog(false)} />
                <Button loading={deleteLoading} text="Sim, deletar" onClick={() => handleDelete()} />
              </div>
              <p style={{
                fontSize: '14px', color: 'red', marginTop: '10px', textAlign: 'right',
              }}
              >
                <b>{error}</b>
              </p>
            </S.Dialog>
          </>
        </Modal>
      )}

      <S.Container>
        <S.Return onClick={() => history.push('/')} aria-label="voltar">
          <MdArrowBack size={20} />
          <span>Voltar</span>
        </S.Return>

        <S.Header>
          <h3>Formulários</h3>
          <h4>
            {' '}
            Selecione um formulário específico para visualizar detalhes do mesmo
            {' '}
          </h4>
        </S.Header>

        <p>
          * Formulários com status habilitado são os que estão disponíveis no
          semestre atual para o aluno.
        </p>
        <S.Section>
          <Loading isLoading={loading} />
          {!loading && (
            <>
              {forms.map(({ id, name, enabled }) => {
                const styledProps = { enabled };
                return (
                  <S.Card
                    key={id}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...styledProps}
                  >
                    <S.Trash onClick={() => { setOpenDialog(true); setActiveFormId(id); }}>
                      <BsTrash />
                    </S.Trash>
                    <div
                      tabIndex={0}
                      role="button"
                      onClick={() => handleOpenModal({ id, name, enabled })}
                      onKeyUp={() => handleOpenModal({ id, name, enabled })}
                      aria-label="abrir formulário"
                    >
                      <h4>{name || 'Sem nome'}</h4>
                      <FaWpforms />
                      <p>{enabled ? 'Habilitado' : 'Desabilitado'}</p>
                    </div>
                  </S.Card>
                );
              })}

              <S.ContainerButton>
                <Button
                  onClick={() => setIsModalNewFormVisible(true)}
                  Icon={AiOutlinePlus}
                  ariaLabel="Adicionar novo formulário"
                />
              </S.ContainerButton>
            </>
          )}
        </S.Section>
      </S.Container>
    </>
  );
};

export default FormAdmin;
