import React, { useEffect, useState } from 'react';
import { AiFillEdit, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';

import * as S from './styles';

import {
  Loading, Input, Button, Select,
} from '../../../../components';

import api from '../../../../services/axios';

interface DetailsModalProps {
  form: {
    id?: number
    name?: string
    enabled?: boolean
  }
}

interface ErrorType {
   response: {
     data: {
       msg: string
     }
  }
}
interface Questions {
  [key: string]: string
}

const DetailsModal: React.FC<DetailsModalProps> = ({ form }) => {
  const [questions, setQuestions] = useState([]);
  const [questionsValues, setQuestionsValues] = useState<Questions>({});
  const [loading, setLoading] = useState(false);
  const [loadingUpdateQuestion, setLoadingUpdateQuestion] = useState(false);
  const [loadingCreateQuestion, setLoadingCreateQuestion] = useState(false);
  const [disabled, setDisabled] = useState({});
  const [formValues, setFormValues] = useState({
    name: form.name,
    enabled: form.enabled ? 'sim' : 'não',
  });
  const [formDisabled, setFormDisabled] = useState(true);
  const [loadingUpdateForm, setLoadingUpdateForm] = useState(false);
  const [fields, setFields] = useState<string[]>([]);
  const [error, setError] = useState('');

  async function loadQuestions() {
    setLoading(true);
    try {
      const { data } = await api.get(`question/index/${form.id}`);
      setQuestions(data);
      setQuestionsValues(
        data.reduce(
          (item: object, { id, description }: Questions) => ({
            ...item,
            [id]: description,
          }),
          {},
        ),
      );
      setDisabled(
        data.reduce(
          (item: object, { id, description }: Questions) => ({
            ...item,
            [id]: true,
          }),
          {},
        ),
      );
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    setError('');
    if (!questions || questions.length === 0) loadQuestions();
  }, []);

  const handleChange = (prop: number) => (event: {
    target: HTMLInputElement
  }) => {
    setQuestionsValues({ ...questionsValues, [prop]: event.target.value });
  };

  async function handleUpdateQuestion(
    question_id: number,
    description: string,
  ) {
    setLoadingUpdateQuestion(true);
    try {
      await api.put(`question/update/${question_id}`, { description });
      setLoadingUpdateQuestion(false);
      setDisabled({ ...disabled, [question_id]: true });
    } catch (err) {
      setLoadingUpdateQuestion(false);
    }
  }

  async function handleCreateQuestion(
    description: string,
  ) {
    setLoadingCreateQuestion(true);
    try {
      await api.post(`question/create/${form.id}`, { description });
      setLoadingCreateQuestion(false);
      loadQuestions();
      setFields([]);
    } catch (err) {
      setLoadingCreateQuestion(false);
    }
  }

  async function handleUpdateForm() {
    setLoadingUpdateForm(true);
    setError('');
    try {
      await api.put(`form/update/${form.id}`, {
        ...formValues,
        enabled: formValues.enabled === 'sim',
      });
      setLoadingUpdateForm(false);
      setFormDisabled(true);
      window.location.reload();
    } catch (err) {
      const {
        response: {
          data: {
            msg,
          } = {},
        } = {},
      } = err as ErrorType;
      if (msg === 'there is already an enabled form') {
        setError('Já existe um form habilitado, desabalite ele para conseguir habiltar o atual.');
      }
      setLoadingUpdateForm(false);
    }
  }

  const removeField = (index: number) => {
    fields.splice(index, 1);
    setFields([...fields]);
  };

  const handleChangeField = async (index: number, value: string) => {
    // await setValue(value);
    const values = [...fields];
    values[index] = value;
    setFields(values);
  };

  return (
    <S.Container>
      <S.Subtitle>Formulário</S.Subtitle>
      <p>* Só é permetido habiltar um formulário por semestre.</p>
      <S.Form>
        <Input
          name="name"
          label="Nome"
          color=""
          type="text"
          value={formValues.name}
          disabled={formDisabled}
          onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
        />
        <Select
          label="Habilitado"
          name="enabled"
          disabled={formDisabled}
          value={formValues.enabled}
          onChange={(e) => setFormValues({ ...formValues, enabled: e.target.value })}
        >
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </Select>
        <S.ContainerButton>
          {formDisabled ? (
            <Button
              text="Editar"
              type="button"
              onClick={() => setFormDisabled(false)}
            />
          ) : (
            <>
              <Button
                text="Cancelar"
                type="button"
                onClick={() => {
                  setFormValues({
                    name: form.name,
                    enabled: form.enabled ? 'sim' : 'não',
                  });
                  setFormDisabled(true);
                }}
              />
              <Button
                text="Salvar edição"
                type="button"
                loading={loadingUpdateForm}
                onClick={() => handleUpdateForm()}
              />
            </>
          )}
        </S.ContainerButton>
        <S.FormError>{error}</S.FormError>
      </S.Form>

      <S.Subtitle>Perguntas</S.Subtitle>
      <Loading isLoading={loading} />
      <S.Form>
        {!loading
          && questions.map(({ id, description }, index) => (
            <div key={id}>
              <Input
                name={id}
                label={`Pergunta ${index + 1}`}
                color=""
                type="text"
                Icon={AiFillEdit}
                iconOnClick={() => setDisabled({ ...disabled, [id]: !disabled[id] })}
                key={id}
                disabled={disabled[id]}
                value={questionsValues[id]}
                onChange={handleChange(id)}
              />
              {!disabled[id] && (
                <S.ContainerButton>
                  <Button
                    text="Cancelar"
                    type="button"
                    onClick={() => {
                      setQuestionsValues({
                        ...questionsValues,
                        [id]: description,
                      });
                      setDisabled({
                        ...disabled,
                        [id]: !disabled[id],
                      });
                    }}
                  />
                  <Button
                    text="Salvar edição"
                    type="button"
                    loading={loadingUpdateQuestion}
                    onClick={() => handleUpdateQuestion(id, questionsValues[id])}
                  />
                </S.ContainerButton>
              )}
            </div>
          ))}
        {fields.map((field, index: number) => (
          <div>
            <Input
              key={index.toString()}
              name={index.toString()}
              label="Nome"
              color=""
              type="text"
              Icon={AiOutlineDelete}
              value={fields[index] || ''}
              iconOnClick={() => removeField(index)}
              onChange={(e) => handleChangeField(index, e.target.value)}
            />
            <S.ContainerButton>
              <Button
                text="Salvar pergunta"
                type="button"
                onClick={() => handleCreateQuestion(fields[index])}
                loading={loadingCreateQuestion}
                disabled={loadingCreateQuestion}
              />
            </S.ContainerButton>
          </div>
        ))}
        <div className="button-plus">
          <Button
            type="button"
            Icon={AiOutlinePlus}
            onClick={() => { setFields([...fields, '']); }}
          />
        </div>
      </S.Form>
    </S.Container>
  );
};

export default DetailsModal;
