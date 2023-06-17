import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  color: #ff9b9b;
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  font-size: 1.2rem;
  color: #0056b3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Oops!</NotFoundTitle>
      <NotFoundText>We can't seem to find the page you're looking for.</NotFoundText>
      <HomeLink to="/">Go back home</HomeLink>
    </NotFoundContainer>
  );
}
