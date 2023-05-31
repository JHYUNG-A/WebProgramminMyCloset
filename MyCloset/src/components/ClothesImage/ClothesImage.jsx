import React from 'react';

function ClothesImage({ clothes }) {
  return <img src={clothes.imageUrl} alt={clothes.name} />;
}

export default ClothesImage;
