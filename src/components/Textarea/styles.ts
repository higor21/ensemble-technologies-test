import { Colors } from 'shared/colors';
import styled from 'styled-components';

export const TAWrapper = styled.div``;

type TAProps = { valid?: boolean };

export const TA = styled.textarea<TAProps>`
  border-radius: 1em;
  box-shadow: inset 0 0 10px -2px ${(props) => (props.valid ? Colors.shadow : Colors.red)};
  width: max-content;
  padding: 0.5em 1em;
  background-color: ${Colors.white};
  color: ${Colors.black};
  font-weight: 500;
  font-size: 1.4em;
  border: none;
  min-height: 100px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${Colors.gray};
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.4em;
  color: ${Colors.blue};
`;

export const ErrorText = styled.small`
  font-size: 1.3em;
  font-weight: 500;
  color: ${Colors.red};
`;
