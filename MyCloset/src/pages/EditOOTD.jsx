import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Mainbar from '../components/Mainbar/Mainbar';

function EditOOTD() {
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

  const handleChange = (event) => {
    setOotd({
      ...ootd,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedOotds = JSON.parse(localStorage.getItem('ootds')) || [];
    const updatedOotds = storedOotds.map((storedOotd, index) => 
      index === Number(id) ? ootd : storedOotd
    );
    localStorage.setItem('ootds', JSON.stringify(updatedOotds));
    alert('OOTD updated!');
    navigate('/ootd');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Edit OOTD</h1>
      <Mainbar />
      <form onSubmit={handleSubmit} className='ootd-form'>
        <input 
          className='input-field' 
          name="fullImage" 
          placeholder="Full Image URL" 
          onChange={handleChange} 
          value={ootd.fullImage}
        />
        <input 
          className='input-field' 
          name="topImage" 
          placeholder="Top Image URL" 
          onChange={handleChange} 
          value={ootd.topImage}
        />
        <input 
          className='input-field' 
          name="bottomImage" 
          placeholder="Bottom Image URL" 
          onChange={handleChange} 
          value={ootd.bottomImage}
        />
        <input 
          className='input-field' 
          name="outerImage" 
          placeholder="Outer Image URL" 
          onChange={handleChange} 
          value={ootd.outerImage}
        />
        <div className='button-container'>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditOOTD;
