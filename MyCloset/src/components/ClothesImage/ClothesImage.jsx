import React from 'react';

function ClothesImage({ item }) {
  return <img src={item.image} alt={item.name} />;
}

export default ClothesImage;
