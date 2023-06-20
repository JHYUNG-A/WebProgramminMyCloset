import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Mainbar from '../components/Mainbar/Mainbar';

function OOTDDetail() {
  const [ootd, setOotd] = useState({
    fullImage: '',
    topImage: '',
    bottomImage: '',
    outerImage: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedOotds = JSON.parse(localStorage.getItem('ootds')) || [];
    const currentOotd = storedOotds.find((ootd, index) => index === Number(id));
    if (currentOotd) {
      setOotd(currentOotd);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate]);

  const handleDelete = () => {
    const storedOotds = JSON.parse(localStorage.getItem('ootds')) || [];
    const updatedOotds = storedOotds.filter((_, index) => index !== Number(id));
    localStorage.setItem('ootds', JSON.stringify(updatedOotds));
    navigate('/ootd');
  };

  const handleEdit = () => {
    navigate(`/edit-ootd/${id}`);
  };

  const handleBack = () => {
    navigate('/ootd');
  };

  return (
    <div>
      <h1>OOTD Detail</h1>
      <Mainbar />
      <div className='ootd-detail'>
        <div className='ootd-images'>
          <img src={ootd.fullImage} alt="Full outfit" />
          <img src={ootd.topImage} alt="Top outfit" />
          <img src={ootd.bottomImage} alt="Bottom outfit" />
          <img src={ootd.outerImage} alt="Outer outfit" />
        </div>
        <div className='ootd-actions'>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <button className='back-button' onClick={handleBack}>Back to OOTD list</button>
      </div>
    </div>
  );
}

export default OOTDDetail;
