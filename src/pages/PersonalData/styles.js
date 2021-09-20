import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 18px;
`;

export const Title = styled.h2(({ theme }) => `
  font-weight: bold;
  color: ${theme.primaryBlue};

  margin-top: 36px;
  margin-bottom: 20px;
  
`);

export const ContainerPersonalData = styled.div(({ theme }) => `
  border: solid 2px ${theme.primaryBlue};
  padding: 24px;

  width: 60%;

  @media(max-width: 600px){
    width: 95%;
    padding: 8px;
  }
`);

export const ContainerInfo = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  margin: 16px 0; 
  
  font-size: 16px;

  @media(max-width: 600px){
    font-size: 14px;
  }
`);

export const Info = styled.div(({ theme }) => `
  width: 50%;
  
  color: ${theme.primaryBlue};
  
  font-weight: bold;
  
`);

export const NameInfo = styled.div(({ theme }) => `
  margin-left: 8px;
  width: 50%;
  font-weight: 500;
  word-break: break-word;;
`);

export const Edit = styled.div(({ theme }) => `
  color: ${theme.primaryBlue};
  font-weight: bold;

  display: flex;
  align-items: center;
  font-size: 16px;

  margin-top: 16px;
  cursor: pointer;
`);
