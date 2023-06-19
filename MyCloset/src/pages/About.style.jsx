import styled from 'styled-components';

export const DeveloperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  `;
  
export const DeveloperCard = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  
`;

export const DeveloperImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  
`;

export const DeveloperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  
`;

export const DeveloperName = styled.h2`
  margin: 0;
`;

export const DeveloperMajor = styled.p`
  margin: 5px 0;
`;

export const DeveloperID = styled.p`
  margin: 5px 0;
`;

export const DeveloperRole = styled.p`
  margin: 5px0;
  font-weight: bold;
  color: #007BFF;
`;
