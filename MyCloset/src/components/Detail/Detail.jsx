import React from 'react';

function Detail({ clothes }) {
  return (
    <div>
      <h2>{clothes.name}</h2>
      <p>{clothes.type}</p>
      <p>{clothes.purchaseDate}</p>
      <p>{clothes.size}</p>
      <p>{clothes.price}</p>
    </div>
  );
}

export default Detail;
