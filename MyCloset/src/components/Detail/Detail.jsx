import React from 'react';

function Detail({ item }) {
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.type}</p>
      <p>{item.purchaseDate}</p>
      <p>{item.size}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default Detail;
