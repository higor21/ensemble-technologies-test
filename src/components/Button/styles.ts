import { HTMLAttributes } from 'react';
import { Colors } from 'shared/colors';
import styled from 'styled-components';

interface BtnProps extends HTMLAttributes<HTMLButtonElement> {
  btnColor: string;
  inShadow?: boolean;
  outline: number;
}
export const BtnWrapper = styled.button<BtnProps>`
  border-radius: 1em;
  box-shadow: 0 0 10px -6px;
  transition-duration: 0.4s;
  background-color: ${props => props.outline || props.disabled ? Colors.white : props.btnColor};

  & > span {
    color: ${(props) => props.outline || props.disabled ? props.btnColor : Colors.white};
    font-weight: 500;
    font-size: 1.4em;
  }

  &:hover {
    box-shadow: ${({ btnColor, disabled, inShadow, outline }) =>
      disabled
        ? 'none'
        : `${inShadow ? 'inset' : ''} 0 0 10px ${outline ? btnColor : btnColor}`};
    transition-duration: 0.4s;
  }
`;
