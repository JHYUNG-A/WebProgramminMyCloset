// import styled from "styled-components";

// export const AppWrap = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 20px;
  
//   .appContentWrap {
//     border: 5px solid black;
//     padding: 20px;
//     border-radius: 20px;
//     align-items: center;
//   }
//   input {
//     padding: 16px;
//     border: 2px black solid;
//     border-radius: 16px;
//   }
// `;

// export const ResultWrap = styled.div`
//   margin-top: 60px;
//   padding: 10px;
//   border: 1px black solid;
//   border-radius: 8px;
// `;

import styled from "styled-components";

export const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  
  .appContentWrap {
    display: flex; 
    flex-direction: column; // 추가
    justify-content: center; 
    align-items: center; // 추가
    border: 5px solid black;
    padding: 20px;
    border-radius: 20px;
  }
  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
    margin-bottom: 20px; // 추가: input과 결과 사이에 간격을 줍니다.
  }
`;

export const ResultWrap = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px black solid;
  border-radius: 8px;
`;


