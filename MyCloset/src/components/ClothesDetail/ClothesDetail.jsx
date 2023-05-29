import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClothesDetail({ id }) {
  const [details, setDetails] = useState({
    size: '',
    price: '',
    purchaseDate: '',
    store: '',
  });

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(`http://localhost:3000/clothes/${id}`);
      setDetails(response.data);
    };
    fetchDetails();
  }, [id]);

  return (
    <div>
      <h2>Clothes Detail</h2>
      <p><strong>Size:</strong> {details.size}</p>
      <p><strong>Price:</strong> {details.price}</p>
      <p><strong>Purchase Date:</strong> {details.purchaseDate}</p>
      <p><strong>Purchased From:</strong> {details.store}</p>
    </div>
  );
}

export default ClothesDetail;
