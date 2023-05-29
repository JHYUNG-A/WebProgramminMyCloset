import styled from "styled-components";

export const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px solid blue;
    padding: 20px;
  }
  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
  }
`;

export const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 1px black solid;
  border-radius: 8px;
`;
