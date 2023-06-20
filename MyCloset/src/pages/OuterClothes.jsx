import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './MyClothes.css';
import { useState, useEffect } from 'react'

function OuterClothes() {
  const [outerClothes, setOuterClothes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    const allClothes = JSON.parse(localStorage.getItem('clothes')) || [];
    const filteredClothes = allClothes.filter(clothe => clothe.type === 'outer');
    setOuterClothes(filteredClothes);
  }, []);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(outerClothes.length / itemsPerPage)));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClothes = outerClothes.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Outer Clothes</h1>
      <Navbar />

      <br />

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

export default OuterClothes