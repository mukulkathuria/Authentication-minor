import styled from "styled-components";

export const SignForm = styled.div`
  width: 25rem;
  margin: 6rem auto;
  margin-bottom:9rem;
  button {
    width: 100%;
    padding: 10px;
    border: 0.2px solid #f1f1f1;
    background-color: blue;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    :disabled {
      background-color: lightblue;
    }
  }
  span {
    font-size: 12px;
    color: red;
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormHeading = styled.div`
  text-align: center;
  svg {
    font-size: 5em;
  }
  h2 {
    font-size: 3em;
    font-weight: 400;
  }
`;
