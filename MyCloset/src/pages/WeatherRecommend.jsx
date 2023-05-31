// 김광민
// 날씨 정보 및 추천 옷차림
import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Weather from '../components/Weather/Weather'

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
      <h1>Recommended Clothes</h1>
      {recommendedClothes.map((clothe, index) => (
        <div key={index}>
          <img src={clothe.image} alt={clothe.name} />
          <h2>{clothe.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default WeatherRecommend;