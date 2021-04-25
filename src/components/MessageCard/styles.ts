import { Colors } from 'shared/colors';
import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${Colors.white};
  border-radius: 15px;
  box-shadow: 5px 9px 40px -10px ${Colors.shadow};
`;

export const CardHeader = styled.div`
  & > div.user {
    & > span:first-of-type {
      color: ${Colors.black};
      font-size: 1.3em;
    }
    & > span:last-of-type {
      color: ${Colors.blue};
      font-size: 1.5em;
      font-weight: 500;
    }
  }

  & > div.seq {
    font-size: 1.2em;
    & > span {
      color: ${Colors.black};
    }
    & > strong {
      color: ${Colors.green};
    }
  }
`;

export const CardFooter = styled.div`
  & > span:first-of-type {
    color: ${Colors.black};
    font-size: 1.2em;
  }
  & > span:last-of-type {
    color: ${Colors.blue};
    font-size: 1.3em;
  }
`

export const Button = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  padding: 0;
  border-radius: 50%;
  transition-duration: 0.4s;
  &:hover {
    box-shadow: 0 0 10px -5px;
    transition-duration: 0.4s;
  }
`;

export const Message = styled.div`
  font-size: 1.8em;
  word-break: break-word;
  hyphens: auto;
  color: ${Colors.black};
`;