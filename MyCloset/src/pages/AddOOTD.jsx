import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddOOTD.css';
import Mainbar from '../components/Mainbar/Mainbar';

function AddOOTD() {
  const [ootd, setOotd] = useState({
    title: '',
    date: '',
    description: '',
    fullImage: '',
    topImage: '',
    bottomImage: '',
    outerImage: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setOotd({
      ...ootd,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedOotds = JSON.parse(localStorage.getItem('ootds')) || [];
    storedOotds.push(ootd);
    localStorage.setItem('ootds', JSON.stringify(storedOotds));
    alert('OOTD added!');
    navigate('/ootd');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Add OOTD</h1>
      <Mainbar />
      <form onSubmit={handleSubmit} className='ootd-form'>
        <input 
          className='input-field' 
          name="title" 
          placeholder="Title" 
          onChange={handleChange} 
        />
        <input 
          className='input-field' 
          name="date" 
          placeholder="Date" 
          onChange={handleChange} 
        />
        <textarea 
          className='input-field' 
          name="description" 
          placeholder="Description" 
          onChange={handleChange} 
        />
        <input 
          className='input-field' 
          name="fullImage" 
          placeholder="Full Image URL" 
          onChange={handleChange} 
        />
        <input 
          className='input-field' 
          name="topImage" 
          placeholder="Top Image URL" 
          onChange={handleChange} 
        />
        <input 
          className='input-field' 
          name="bottomImage" 
          placeholder="Bottom Image URL" 
          onChange={handleChange} 
        />
        <input 
          className='input-field' 
          name="outerImage" 
          placeholder="Outer Image URL" 
          onChange={handleChange} 
        />
        <div className='button-container'>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddOOTD;
