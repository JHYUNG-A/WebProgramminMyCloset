import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
`;

export const NavbarItem = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007BFF;
  }
`;
