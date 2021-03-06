import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

export const InputWrapper = styled.div(({ theme, error }) => `
   position: relative;
   display: flex;
   align-items: center;

   > svg {
     position: absolute;
     right: 0;
     width: 25px;
     height: 25px;
     color: gray;
     margin-right: 10px;
     cursor: pointer;
   }
   
   .icon-custom {
    position: absolute;
    right: 0;
    width: 40px;
    height: 100%;
    color: gray;
    margin-right: 10px;
    cursor: pointer;
    border-left: 1px solid ${theme.gray3};
    margin-left: 130px;
    padding-left: 10px;
   }
`);

export const Input = styled.input(({
  theme, error, type, disabled,
}) => `
   padding: 14px 10px;
   width: 100%;
   background-color: ${disabled ? theme.gray2 : 'transparent'};
   border-radius: 4px;
   outline-color: ${theme.primaryBlue};
   outline-width: thin;
   border: 1px solid ${error ? theme.red : theme.gray3};
   padding-right: ${type === 'password' && '40px'};

   ::placeholder {
     color: ${theme.gray3};
   }
`);

export const Label = styled.label(({ color, theme }) => `
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
  color: ${color || theme.gray4};
`);

export const Error = styled.label(({ theme }) => `
  font-weight: bold;
  font-size: 14px;
  color: ${theme.red};
  margin-top: 4px;
`);
