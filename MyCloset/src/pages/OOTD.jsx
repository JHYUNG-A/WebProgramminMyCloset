import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Mainbar from '../components/Mainbar/Mainbar';
import './OOTD.css';

function OOTD() {
  const [ootds, setOotds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const storedOotds = JSON.parse(localStorage.getItem('ootds')) || [];
    setOotds(storedOotds);
  }, []);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(ootds.length / itemsPerPage)));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOotds = ootds.slice(startIndex, endIndex);

  return (
    <div>
      <h1>OOTD</h1>
      <Mainbar />

      <div className='ootd-container'>
        {currentOotds.map((ootd, index) => (
          <Link to={`/ootd/${index}`} key={index}>
            <div key={index}>
              <img src={ootd.fullImage} alt={ootd.title} />
              <h2>{ootd.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className='button-container'>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <Link to="/addootd">
        <button>Add OOTD</button>
      </Link>

    </div>
  );
}

export default OOTD;
