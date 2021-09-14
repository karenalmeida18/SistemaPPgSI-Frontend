import styled from 'styled-components';
import { rotate } from '../../styles/animations';

export const LoadingWrapper = styled.div`
   animation: ${rotate} 2s linear infinite;
   font-size: 24px;
   width: max-content;
`;
