import React from 'react';
import './Home.css';

import { Outlet, Link, useNavigate} from 'react-router-dom';

import  Mainbar from '../components/Mainbar/Mainbar'
import meeting from '../assets/Meeting.png';



function Home() {

  const navigate = useNavigate();

  const handleChange = (event) => {
    const path = event.target.value;
    navigate(path);
  }


  return (
    <div>
      <h1>Project Home</h1>
      <nav>
      <Mainbar />
        {/* <ul>
          <select onChange={handleChange}>
            <option value="">내 옷 카테고리</option>
            <option value="/myclothes">내 옷장</option>
            <option value="/top">상의</option>
            <option value="/bottom">하의</option>
            <option value="/outer">아우터</option>
          </select>
        </ul> */}
      </nav>
      {/* <Outlet /> */}
      <div className="img-container">
        <img src={meeting} alt="회의 이미지" />
      </div>
    </div>
  );
}

export default Home;
