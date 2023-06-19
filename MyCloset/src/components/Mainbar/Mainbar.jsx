import React from 'react';
import { Link } from 'react-router-dom';
import './Mainbar.css';

function Mainbar() {
  return (
    <nav className="Mainbar">
      <ul className="Mainbar-list">

        <li className="Mainbar-item">
          <Link to="/" className="Mainbar-link">Home</Link>
        </li>

        <li className="Mainbar-item">
          <Link to="/myclothes" className="Mainbar-link">My Closet</Link>
        </li>

        <li className="Mainbar-item">
          <Link to="/ootd" className="Mainbar-link">OOTD</Link>
        </li>

        <li className="Mainbar-item">
          <Link to="/about" className="Mainbar-link">About</Link>
        </li>

        <li className="Mainbar-item">
          <Link to="/proposal" className="Mainbar-link">Proposal</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Mainbar;
