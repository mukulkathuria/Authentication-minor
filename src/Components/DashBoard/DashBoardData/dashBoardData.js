import React from "react";
import {
    DivContainer,
    StyleDiv,
    ProfileImg,
    MojorBody,
    MajorBodyStatus,
    MinorBody,
    StyleBody,
    Bodypart1,
    BorderLine,
  } from './dashBoardData.style';

const DashBoardData = (props) => {
  return (
    <DivContainer>
      {props.data.map((list) => (
        <BorderLine key={list.id}>
          <StyleDiv>
            <ProfileImg>
              <img src={list.img1} alt="" />
            </ProfileImg>
            <MojorBody>
              <MajorBodyStatus>
                <span className="bold">
                  <a href={list.status.split(" ")[0]}>
                    {list.status.split(" ")[0]}
                  </a>
                </span>
                {list.status
                  .split(" ")
                  .filter((list, i) => i > 0)
                  .join(" ")}
                <span className="timestamp">yesterday</span>
              </MajorBodyStatus>
              <MinorBody>
                <Bodypart1>
                  <ProfileImg>
                    <img src={list.img2} alt="" />
                  </ProfileImg>
                  <StyleBody>
                    <div className="headings">
                      <a href={list.title}>{list.title}</a>
                    </div>
                    <div>{list.body}</div>
                    <div className="small">
                      {list.repo > 0 && `${list.repo} repositories`}
                      {list.followers > 0 && ` ${list.followers} followers`}
                    </div>
                  </StyleBody>
                </Bodypart1>
                <button>Follow</button>
              </MinorBody>
            </MojorBody>
          </StyleDiv>
          {list.id < props.data.length && <hr />}
        </BorderLine>
      ))}
    </DivContainer>
  );
};
export default DashBoardData;