import React from "react";
import { Header, Body } from "./styles";

import LogoImg from "assets/images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "shared/colors";
import { RouteNames } from "shared/constants";

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
  color: ${Colors.white};
  font-size: 2em;

  & img {
    background-color: ${Colors.white};
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

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header className="px-3">
        <Logo to={RouteNames.listFeed}>
          <img
            className="px-2 h-100"
            src={LogoImg}
            alt="MSN evolution - logo"
          />
          <span className="ml-2">
            <strong>MSN</strong> <em>evolution</em>
          </span>
        </Logo>
      </Header>
      <Body className="mx-auto justify-content-around px-4 py-4 d-flex flex-column">
        {children}
      </Body>
    </div>
  );
};

export default Layout;