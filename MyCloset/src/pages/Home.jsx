import React from 'react';
import { Outlet, Link, useNavigate} from 'react-router-dom';


function Home() {

  const navigate = useNavigate();

  const handleChange = (event) => {
    const path = event.target.value;
    navigate(path);
  }


  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <select onChange={handleChange}>
            <option value="">내 옷  카테고리</option>
            <option value="/myclothes">내 옷장</option>
            <option value="/top">상의</option>
            <option value="/bottom">하의</option>
            <option value="/outer">아우터</option>
          </select>
          <li>
            <Link to="/weather-recommend">날씨별 옷차림 추천</Link>
          </li>
          <li>
            <Link to="ootd">OOTD</Link>
          </li>
          <li>
            <Link to="about">개발자 소개</Link>
          </li>
          <li>
            <Link to="proposal">기획서</Link>
          </li>
        </ul>
      </nav>
      {/* <Outlet /> */}

    </div>
  );
}

export default Home;
