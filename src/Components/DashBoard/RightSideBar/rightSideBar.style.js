import styled from "styled-components";

export const SideBar = styled.div`
  width: 17%;
  float: right;
  padding: 12px;
  position:relative;
  hr {
    border: 0.2px solid #e8e9eb;
  }
  .small {
    font-size: 10px;
  }
`;

export const Heading = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const RepoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  font-size: 10px;
  line-height: 1.6;
  .mark {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: yellow;
  }
  .title {
    font-weight: 600;
  }
`;
export const Lang = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  .small {
    font-size: 10px;
    margin: 0 5px;
  }
`;
export const Notif = styled.div`
  font-size: 11px;
  background-color: #4764f0;
  padding: 12px;
  color: white;
  line-height: 1.6;
  margin: 1rem auto;
  border-radius: 8px;
  position: relative;

  .cross {
    cursor: pointer;
    position: absolute;
    top: 3px;
    right: 8px;
  }
  p {
    margin: 5px auto;
    font-size: 10px;
  }
`;
