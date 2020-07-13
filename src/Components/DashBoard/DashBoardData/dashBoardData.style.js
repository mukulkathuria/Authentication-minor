import styled from "styled-components";

export const DivContainer = styled.div`
  margin: auto 18%;
  background-color: #f7f8fa;
`;

export const StyleDiv = styled.div`
  display: flex;
  font-size: 14px;
`;
export const ProfileImg = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const MojorBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 1.4;
  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
  a:hover {
    color: #0366d6;
  }
`;
export const MajorBodyStatus = styled.div`
  font-size: 13px;
  margin-bottom: 14px;
  color:black;
  .timestamp {
    margin-left: 10px;
    font-size: 10px;
    color: #94989e;
  }
  .bold {
    margin-right: 5px;
    font-weight: 600;
  }
`;
export const MinorBody = styled.div`
  display: flex;
  padding: 10px;
  font-size: 12px;
  background-color: white;
  justify-content: space-between;
  border: 0.2px solid #e8e9eb;
  button {
    height: 30px;
    width: 70px;
    color: #24292e;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 6px;
    font-size: 12px;
    line-height: 20px;
    border: 0.2px solid;
    border-color: rgba(27, 31, 35, 0.15);
    box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
      inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  }
  button:hover {
    background-color: #f3f4f6;
    transition-duration: 0.1s;
  }
`;
export const StyleBody = styled.div`
  display: flex;
  flex-direction: column;
  color: #586069;
  .small {
    font-size: 10px;
    margin: 0.8rem 0;
    word-spacing: 2px;
  }
  .headings {
    font-weight: 600;
    color: #24292e;
  }
`;
export const Bodypart1 = styled.div`
  display: flex;
`;
export const BorderLine = styled.div`
  padding: 15px;
  hr {
    margin-top: 1rem;
    border: 0.2px solid #e8e9eb;
  }
`;
