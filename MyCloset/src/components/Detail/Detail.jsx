import React from 'react';
import { DetailContainer, DetailTitle, DetailText } from './Detail.style';

function Detail({ item }) {
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <DetailContainer>
      <DetailTitle>{item.name}</DetailTitle>
      <DetailText>{item.type}</DetailText>
      <DetailText>{item.purchaseDate}</DetailText>
      <DetailText>{item.size}</DetailText>
      <DetailText>{item.price}</DetailText>
    </DetailContainer>
  );
}

export default Detail;
