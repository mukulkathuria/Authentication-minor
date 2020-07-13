import styled from "styled-components";

export const InputsGroup = styled.div`
  margin:1rem auto;
`;

export const InputDiv = styled.div`
  font-size: 12px;
  color: red;
  margin: 1rem auto;
  input {
    padding: 8px;
    width: 100%;
    border: 0.2px solid #f1f1f1;
    border-radius:8px;
    :focus{
        outline:1.5px solid blue;
    }
  }
`;
export const Labels = styled.div`
width :100%;
&::after{
  content:' *';
  color:red;
}
`;
