interface loginErrorProps {
  response: {
    status?: keyof typeof statusCodeLogin;
  };
}

interface registerErrorProps {
  response: {
    status?: keyof typeof statusCodeRegister;
  };
}

const statusCodeLogin = {
  403: 'Usuário não autorizado',
  400: 'Código USP ou senha incorretos.',
  500: 'Algo deu errado. Tente novamente em alguns minutos.',
};

const statusCodeRegister = {
  400: 'Usuário já registrado.',
  500: 'Algo deu errado. Tente novamente em alguns minutos.',
};

export const mapErrorsLogin = (error: loginErrorProps) => {
  const { response: { status } = {} } = error;

  return statusCodeLogin[status || 500];
};

export const mapErrorsRegister = (error: registerErrorProps) => {
  const { response: { status } = {} } = error;

  return statusCodeRegister[status || 500];
};
