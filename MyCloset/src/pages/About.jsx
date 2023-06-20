import React from 'react'
import { DeveloperContainer, DeveloperCard, DeveloperImage, DeveloperInfo, DeveloperName, DeveloperRole, DeveloperMajor, DeveloperID } from './About.style';
import image1 from '../assets/안재형.png';
import image2 from '../assets/김준하.png';
import image3 from '../assets/김광민.png';
import  Mainbar from '../components/Mainbar/Mainbar'

function About() {
  const developers = [
    {
      name: '안재형',
      major: '전자전기공학부',
      id: '2017112020',
      image: image1,
      role: '메인페이지, Proposal, 전체 디자인',
    },
    {
      name: '김준하',
      major: '컴퓨터공학과',
      id: '2017112292',
      image: image2,
      role: '내 옷장 페이지(전체, 상의, 하의, 아우터), OOTD(전체, 상세, 추가, 수정)',
    },
    {
      name: '김광민',
      major: '멀티미디어공학과',
      id: '2018112540',
      image: image3,
      role: '내 옷 상세 페이지, 날씨별 옷차림 추천 페이지',
    },
  ];

  return ( 
    <div>
      <h1>Developer Introduction</h1>
      <Mainbar />
    <DeveloperContainer>
      {developers.map((developer, index) => (
        <DeveloperCard key={index}>
          <DeveloperImage src={developer.image} alt={developer.name} />
          <DeveloperInfo>
            <DeveloperName>{developer.name}</DeveloperName>
            <DeveloperMajor>{developer.major}</DeveloperMajor>
            <DeveloperID>{developer.id}</DeveloperID>
            <DeveloperRole>{developer.role}</DeveloperRole>
          </DeveloperInfo>
        </DeveloperCard>
      ))}
    </DeveloperContainer>
    </div>
  )
}

export default About;