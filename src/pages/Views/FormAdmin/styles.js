import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;

  > p {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Header = styled.header(({ theme }) => `
  width: 100%;
  margin: 16px auto;
  text-align: center;
  
  > h3 {
    color: ${theme.black};
  }

  > h4 {
    color: ${theme.gray4};
    margin-top: 8px;
  }
`);

export const Dialog = styled.div(({ theme }) => `
  > div {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    
    button {
    margin: 0 8px;
    font-size: 14px;
    padding: 10px;
    margin-top: -5px;
    transition: all .2s;

    &:first-child {
       background-color: ${theme.white};
       color: ${theme.primaryBlue};
       border: 1px solid ${theme.primaryBlue};

       &:hover {
         background-color: ${theme.secondaryBlue};
         color: ${theme.white};
       }
    }
  }
  }
`);

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px auto;
  
  @media (max-width: 800px) {
   flex-direction: column;
   align-items: center;
  }
`;

export const Card = styled.div(({ theme, enabled }) => `
  text-align: center;
  border: 1px solid ${theme.gray2};
  box-shadow: ${theme.shadow};
  border-radius: 4px;
  color: ${theme.black};
  cursor: pointer;
  transition: all 0.2s;
  margin: 0px 14px 10px 14px;
  border-left: 1px solid ${theme.purple};
  position: relative;
  min-height: 200px;
  width: 170px;
  background-color: ${!enabled && theme.gray2};
  color: ${enabled ? theme.purple : theme.black};

  > div {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  svg {
    font-size: 40pt;
    fill: ${enabled ? theme.purple : theme.gray4};
    margin-top: 30px;
  }

  p {
    font-size: 16px;
    max-width: 300px;
    background: ${enabled ? theme.primaryBlue : theme.gray4};
    width: 100%;
    position: absolute;
    left: 0;
    color: white;
    font-weight: 700;
    bottom: 10px;
  }
  
  &:hover {
    box-shadow: ${theme.shadow3};
  }

  @media (max-width: 800px) {
    padding: 10px;
    font-size: 16px;

    p {
      font-size: 14px;
    }
  }
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

export const ContainerButton = styled.div(({ theme }) => `
  > button {
    padding: 5px 10px;
  }
`);

export const Trash = styled.button(({ theme }) => `
  background: transparent;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  
  > svg {
    fill: ${theme.red};
    font-size: 28px;
    margin: 0;
    box-shadow: ${theme.shadow};
    border: 1px solid ${theme.gray1};
    border-radius: 4px;
    transition: all .2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`);
