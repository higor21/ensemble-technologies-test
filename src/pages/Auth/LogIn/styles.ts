import { Colors } from 'shared/colors';
import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${Colors.white};
  border-radius: 15px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 5px 9px 40px -10px ${Colors.shadow};
`;

export const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  span {
    font-size: 5em;
    color: ${Colors.gray};
    text-align: center;
    strong {
      font-style: italic;
      white-space: nowrap;
      color: ${Colors.blue};
    }
  }
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