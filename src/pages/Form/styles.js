import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 18px;
`;

export const Title = styled.h1(({ theme }) => `
  font-weight: bold;
  color: ${theme.primaryBlue};

  margin: 28px 0;
`);

export const TitleInfo = styled.div(({ theme }) => `
  font-weight: bold;
  color: ${theme.primaryBlue};

  margin-top: 36px;
  margin-bottom: 16px;
`);

export const Return = styled.div(({ theme }) => `
  position: absolute;
  left: 12px;
  top: 68px;
  color: ${theme.primaryBlue};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;

  span {
    padding: 0 16px;
  }
`);

export const Form = styled.form(({ theme }) => `  
  width: 50%;

  > div {
    margin-top: 20px;
  }

  .MuiTypography-body1 {
    font-size: 12px;
  }

  @media(max-width: 600px){
    width: 90%;
  }
`);

export const ContainerButton = styled.div(({ theme }) => `
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;

  button{
    padding: 16px 16px;  
    margin: 0 8px;
  }
`);
