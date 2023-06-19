import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import './MyClothes.css';

function TopClothes() {
  const [topClothes, setTopClothes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    const allClothes = JSON.parse(localStorage.getItem('clothes')) || [];
    const filteredClothes = allClothes.filter(clothe => clothe.type === 'top');
    setTopClothes(filteredClothes);
  }, []);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(topClothes.length / itemsPerPage)));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClothes = topClothes.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Top Clothes</h1>
      <Navbar />
      <br/>
      <div className='clothes-container'>
        {currentClothes.map((clothe, index) => (
          <div key={index}>
            <img src={clothe.image} alt={clothe.name} />
            <h2>{clothe.name}</h2>
            <p>{clothe.price}</p>
          </div>
        ))}
      </div>

      <div className='button-container'>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default TopClothes