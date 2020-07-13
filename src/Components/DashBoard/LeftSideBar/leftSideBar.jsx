import React from "react";
import { withRouter } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsLock } from "react-icons/bs";
import { GoRepo } from "react-icons/go";
import { SideBar, User, SideLinks, Teams } from "./leftSideBar.style";

const DashLeftSideBar = (props) => {
  return (
    <SideBar>
      <User>
        <FaUserAlt />
        {props.user.name}
      </User>
      <hr />
      <SideLinks>
        <div>
          <div className="flex">
            <div>Repositories</div>
            <button>
              <GoRepo />
              New
            </button>
          </div>
          <input type="text" placeholder="Find a repository" />
        </div>
        <ul>
          {props.data.map((repo, i) => (
            <li key={i}>
              <BsLock />
              <a href={props.location.pathname + "/" + repo}>{repo}</a>
            </li>
          ))}
        </ul>
        <div className="showmore">Show more</div>
      </SideLinks>
      <hr />
      <Teams>
        <span>Your teams</span>
        <div>You don't belong to any team yet</div>
      </Teams>
    </SideBar>
  );
};
export default withRouter(DashLeftSideBar);
