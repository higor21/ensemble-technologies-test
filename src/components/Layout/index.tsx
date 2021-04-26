import React from "react";
import { Header, Body, LogOutBtn, Logo } from "./styles";

import LogoImg from "assets/images/logo.png";
import { Colors } from "shared/colors";
import { RouteNames } from "shared/constants";
import { LogInIcon } from "shared/icons";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "store/auth/slice";
import { RootState } from "store";

interface Props {
  hasHeader?: boolean;
}

const Layout: React.FC<Props> = ({ children, hasHeader = true }) => {
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.auth);

  const handleLogOut = () => dispatch(clear());

  return (
    <div>
      {hasHeader && (
        <Header className="px-3 d-flex align-items-center justify-content-between">
          <Logo to={RouteNames.listFeed}>
            <img className="px-2 h-100" src={LogoImg} alt="MSN Feed - logo" />
            <span className="ml-2 d-flex flex-column justify-content-center align-items-start">
              <div>
                <strong>MSN</strong> <em>Feed</em>
              </div>
              <small className="user-info">Logged as {username}</small>
            </span>
          </Logo>
          <LogOutBtn
            onClick={handleLogOut}
            className="d-flex align-items-center"
          >
            <span>LogOut</span>
            <LogInIcon className="ml-1" size={30} color={Colors.red} />
          </LogOutBtn>
        </Header>
      )}
      <Body
        noheader={hasHeader ? 0 : 1}
        className="mx-auto justify-content-around pb-4 d-flex flex-column"
      >
        {children}
      </Body>
    </div>
  );
};

export default Layout;
