import { HTMLAttributes } from "react";
import { Colors } from "shared/colors";
import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: ${Colors.blue};
  border-radius: 25px;
  position: sticky;
  bottom: 1.5rem;
  width: 90%;
  align-self: center;
`;

export const Button = styled.button<HTMLAttributes<HTMLButtonElement>>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  width: 33px;
  box-shadow: 0 0 10px -6px;
  transition-duration: 0.4s;
  background-color: ${(props) =>
    props.disabled ? Colors.white : Colors.green};
  transform: scale(1.8) translate(-2px, 0px);
  border-radius: 25px;

  & > span {
    color: ${(props) => (props.disabled ? Colors.gray : Colors.white)};
    font-weight: 500;
    font-size: 1.4em;
  }

  &:hover {
    box-shadow: ${(props) =>
      props.disabled ? "none" : `0 0 10px ${Colors.green}`};
    transition-duration: 0.4s;
  }
`;
