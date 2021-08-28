interface errorProps {
  response: {
    status?: keyof typeof statusCode,
  },
}

const statusCode = {
  403: 'Usuário não autorizado',
  400: 'Email ou senha incorretos.',
  500: 'Algo deu errado. Tente novamente em alguns minutos.',
};

export const mapErrorsLogin = (error: errorProps) => {
  const {
    response: {
      status,
    } = {},
  } = error;

  return statusCode[status || 500];
};
