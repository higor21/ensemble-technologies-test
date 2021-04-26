import { Colors } from 'shared/colors';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${Colors.blue};
  z-index: 1;
  height: 60px;
  min-height: 55px;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 9px 40px -10px ${Colors.blue};
`;

type BodyProps = {
  noheader?: number;
}

export const Body = styled.div<BodyProps>`
  max-width: 700px;
  min-height: 100vh;
  position: fixed;
  ${props => props.noheader ? '' : 'top: 60px;'}
  left: 0;
  right: 0;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
  color: ${Colors.white};
  font-size: 2em;

  & img {
    background-color: ${Colors.white};
  }

  & .user-info {
    font-size: 0.6em;
    font-weight: 500;
    color: ${Colors.black};
  }

  & span {
    transition-duration: 0.4s;
  }

  &:hover {
    text-decoration: none;
    color: ${Colors.white};

    & span {
      transition-duration: 0.4s;
      transform: translate(5px, 0);
    }
  }
`;

export const LogOutBtn = styled.button`
  transition-duration: 0.5s;

  & span {
    color: ${Colors.white};
    font-size: 1.5em;
    font-weight: 500;
  }

  &:hover {
    transition-duration: 0.5s;
    transform: scale(1.1);
  }
`
