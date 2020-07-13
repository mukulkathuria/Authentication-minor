import React from "react";
import { Link, withRouter } from "react-router-dom";
import AccountDetail from "../AccountDetail/accountDetail";
import { BsCircleHalf, BsMoon } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import {
  HeaderDiv,
  DivContainer,
  NavLink,
  LeftHeader,
  RightHeader,
  LogoImg,
  Themebutton,
  UserDetail,
} from "./header.style";
import logo from "../../images/kinglogo.svg";
const Header = (props) => {
  const [showDetail, hideDetail] = React.useState(false);
  const { location } = props;
  const { pathname } = location;
  return (
    <HeaderDiv bgtheme={props.theme}>
      <DivContainer>
        <LeftHeader>
          <NavLink>
            <Link to="/">
              <div>
                <LogoImg src={logo} alt="" />
              </div>
            </Link>
            {pathname === "/login" || props.user ? null : (
              <Link to="/login">
                <div>Login</div>
              </Link>
            )}
            {pathname === "/signup" || props.user ? null : (
              <Link to="/signup">
                <div>Sign Up</div>
              </Link>
            )}
          </NavLink>
        </LeftHeader>
        <RightHeader>
          <Themebutton onClick={props.clicked}>
            {props.theme ? <BsCircleHalf /> : <BsMoon />}
          </Themebutton>
          {props.user && (
            <UserDetail onClick={() => hideDetail(!showDetail)}>
              <FaUserTie />
              {showDetail && <AccountDetail user={props.user} />}
            </UserDetail>
          )}
        </RightHeader>
      </DivContainer>
    </HeaderDiv>
  );
};
export default withRouter(Header);
