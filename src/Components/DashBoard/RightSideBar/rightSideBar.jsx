import React from "react";
import { SideBar, Heading, RepoDiv, Lang, Notif } from "./rightSideBar.style";
import { GoX } from "react-icons/go";

const DashRightSideBar = (props) => {
  const [show, changeshow] = React.useState(true);

  return (
    <SideBar>
      {show && (
        <Notif>
          <div>
            <div>
              Github is now free for our teams
              <span onClick={() => changeshow(false)} className="cross">
                <GoX />
              </span>
            </div>
            <p>
              Github free give teams private repositories with unlimited
              collaboration at no cost.Github cost is now reduce to 4$/month.
            </p>
          </div>
        </Notif>
      )}
      <Heading>Explore repositories</Heading>
      {props.suggestion.map((list) => (
        <RepoDiv key={list.id}>
          <div className="title">{list.title}</div>
          <div>{list.body}</div>
          <Lang>
            <div className="mark" />
            <div className="small">{list.lang}</div>
            <div className="star">&#9734;18.0k</div>
          </Lang>
          {list.id < props.suggestion.length && <hr />}
        </RepoDiv>
      ))}
      <div className="small">Explore more &#8594;</div>
    </SideBar>
  );
};
export default DashRightSideBar;
