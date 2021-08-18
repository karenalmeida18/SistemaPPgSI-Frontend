import React from 'react';
import { Button, Input } from '../../components';

import { Container, FormCard } from './styles';

const UserRegistration: React.FC = () => (
  <Container>
    <FormCard>
      <Input
        name="nome"
        label="Nome"
        color=""
        required
        placeholder="Insira seu nome: "
      />
      <Input
        name="nome"
        label="Nome"
        color=""
        required
        placeholder="Insira seu nome: "
      />
      <Button
        text="Enviar"
      />
    </FormCard>
  </Container>
);

export default UserRegistration;
