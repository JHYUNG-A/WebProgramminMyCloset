import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarContainer, NavbarItem } from "./Navbar.style";

function Navbar() {
  const navigate = useNavigate();
  
  const initialState = [
    {
      id: 0,
      value: "home",
      isHovered: false,
      imgUrl: "Navbar_icon_home.png",
      color: "#ff9b9b",
    },
    {
      id: 4,
      value: "myclothes",
      isHovered: false,
      imgUrl: "Navbar_icon_OOTD.png",
      color: "#9DFF9B",
    },
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
  
  ];

  const handleClick = (path) => {
    // 'home' 항목의 경우 '/'로 경로를 설정
    if (path === 'home') {
      navigate('/');
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <NavbarContainer>
      {initialState.map((item) => (
        <NavbarItem key={item.id} onClick={() => handleClick(item.value)}>
          {item.value}
        </NavbarItem>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
