import React from "react";
import { Link } from "react-router-dom";
import { UserDiv } from "./accountDetail.style";

const AccountDetail = (props) => {
  return (
    <UserDiv>
      <div className='signed'>
        Signin as
        <div>{props.user.name}</div>
      </div>
      <Link to="/logout">
        <div>Logout</div>
      </Link>
    </UserDiv>
  );
};
export default AccountDetail;
