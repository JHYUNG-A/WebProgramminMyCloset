// import { React, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();
//   const initialState = [
//     {
//       id: 1,
//       value: 'top',
//       isHovered: false,
//       imgUrl: 'Navbar_icon_shirt.png',
//       color: '#ff9b9b',
//     },
//     {
//       id: 2,
//       value: 'bottom',
//       isHovered: false,
//       imgUrl: 'Navbar_icon_pants.png',
//       color: '#9BC3FF',
//     },
//     {
//       id: 3,
//       value: 'outer',
//       isHovered: false,
//       imgUrl: 'Navbar_icon_outer.png',
//       color: '#FFE99B',
//     },
//     {
//       id: 4,
//       value: 'ootd',
//       isHovered: false,
//       imgUrl: 'Navbar_icon_OOTD.png',
//       color: '#9DFF9B',
//     },
//     {
//       id: 5,
//       value: 'about',
//       isHovered: false,
//       imgUrl: 'Navbar_icon_about.png',
//       color: '#FF9BFF',
//     },
//   ];

//   const handleClick = (path) => {
//     navigate(path);
//   }

//   return (
//     <div>
//       {initialState.map((item) => (
//         <div
//           key={item.id}
//           style={{ cursor: 'pointer' }}
//           onClick={() => handleClick(`/${item.value}`)}
//         >
//           {item.value}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Navbar

import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarContainer, NavbarItem } from "./Navbar.style";

function Navbar() {
  const navigate = useNavigate();

  const initialState = [
    {
      id: 1,
      value: "top",
      isHovered: false,
      imgUrl: "Navbar_icon_shirt.png",
      color: "#ff9b9b",
    },
    {
      id: 2,
      value: "bottom",
      isHovered: false,
      imgUrl: "Navbar_icon_pants.png",
      color: "#9BC3FF",
    },
    {
      id: 3,
      value: "outer",
      isHovered: false,
      imgUrl: "Navbar_icon_outer.png",
      color: "#FFE99B",
    },
    {
      id: 4,
      value: "ootd",
      isHovered: false,
      imgUrl: "Navbar_icon_OOTD.png",
      color: "#9DFF9B",
    },
    {
      id: 5,
      value: "about",
      isHovered: false,
      imgUrl: "Navbar_icon_about.png",
      color: "#FF9BFF",
    },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <NavbarContainer>
      {initialState.map((item) => (
        <NavbarItem key={item.id} onClick={() => handleClick(`/${item.value}`)}>
          {item.value}
        </NavbarItem>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
