// 김광민
// 날씨 정보 및 추천 옷차림
import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Weather from '../components/Weather/Weather'
import { ClothesContainer, ClothesItem } from './WeatherRecommend.style';

function WeatherRecommend() {
  const [clothes, setClothes] = useState([]);
  const [currentTemp, setCurrentTemp] = useState(null);

  useEffect(() => {
    const storedClothes = JSON.parse(localStorage.getItem('clothes')) || [];
    setClothes(storedClothes);
  }, []);

  // Assume that the Weather component calls this function with the current temperature
  const handleTemperatureChange = (temp) => {
    setCurrentTemp(temp);
  };

  const recommendedClothes = clothes.filter(clothe => clothe.minTemp <= currentTemp && clothe.maxTemp >= currentTemp);

  return (
    <div>
      <Navbar />
      <Weather onTemperatureChange={handleTemperatureChange} />
      <ClothesContainer>
        {recommendedClothes.map((clothe, index) => (
          <ClothesItem key={index}>
            <img src={clothe.image} alt={clothe.name} />
            <h2>{clothe.name}</h2>
          </ClothesItem>
        ))}
      </ClothesContainer>
    </div>
  );
}

export default WeatherRecommend;