import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const initialState = [
    {
      id: 1,
      value: '상의',
      isHovered: false,
      imgUrl: 'Navbar_icon_shirt.png',
      color: '#ff9b9b',
    },
    {
      id: 2,
      value: '하의',
      isHovered: false,
      imgUrl: 'Navbar_icon_pants.png',
      color: '#9BC3FF',
    },
    {
      id: 3,
      value: '아우터',
      isHovered: false,
      imgUrl: 'Navbar_icon_outer.png',
      color: '#FFE99B',
    },
    {
      id: 4,
      value: 'OOTD',
      isHovered: false,
      imgUrl: 'Navbar_icon_OOTD.png',
      color: '#9DFF9B',
    },
    {
      id: 5,
      value: '개발자 소개',
      isHovered: false,
      imgUrl: 'Navbar_icon_about.png',
      color: '#FF9BFF',
    },
  ];
  

  return (
    <div>Navbar</div>
  )
}

export default Navbar