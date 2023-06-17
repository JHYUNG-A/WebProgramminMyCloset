import React from 'react'
import { DeveloperContainer, DeveloperCard, DeveloperImage, DeveloperInfo, DeveloperName, DeveloperRole, DeveloperMajor, DeveloperID } from './About.style';
import image1 from '../assets/안재형.png';
import image2 from '../assets/김준하.png';
import image3 from '../assets/김광민.png';


function About() {
  const developers = [
    {
      name: '안재형',
      major: '전자전기공학부',
      id: '20210001',
      image: image1,
      role: 'Frontend Developer',
    },
    {
      name: '김준하',
      major: '컴퓨터공학과',
      id: '20210002',
      image: image2,
      role: 'Backend Developer',
    },
    {
      name: '김광민',
      major: '멀티미디어공학과',
      id: '20210003',
      image: image3,
      role: 'Full Stack Developer',
    },
  ];

  return (
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
  )
}

export default About;