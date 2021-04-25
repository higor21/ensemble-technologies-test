import { Colors } from 'shared/colors';
import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${Colors.white};
  border-radius: 15px;
  box-shadow: 5px 9px 40px -10px ${Colors.shadow};
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1em;
`;

export const Title = styled.span`
  color: ${Colors.green};
  font-weight: 500;
  font-size: 1.8em;
`;