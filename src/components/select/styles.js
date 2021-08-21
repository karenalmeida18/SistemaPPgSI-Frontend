import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label(({ color, theme }) => `
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
  color: ${color || theme.gray4};
`);

export const Select = styled.select(({ theme }) => `
  padding: 16px 16px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid ${theme.gray3};
  outline-color: ${theme.primaryBlue};
  color: color: ${theme.gray3};

  > option {
    padding: 16px;
  }
`);

export const Option = styled.option`
`;
