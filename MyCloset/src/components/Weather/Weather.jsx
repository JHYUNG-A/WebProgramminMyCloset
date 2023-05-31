import { useState } from "react";
import axios from "axios";
import { AppWrap, ResultWrap } from './Weather.style';

function Weather() {
  const API_KEY = "63cc941e76617cbd7ef6415dffc51d5d";
  const [location, setLocation] = useState("");
  const [result, setResult] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "GET",
          url: url,
        });
        console.log(data);
        setResult(data.data);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <AppWrap>
      <div className="appContentWrap">
        <input
          placeholder="도시를 입력하세요"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.name}</div>
            <div className="temperature">{Math.round((result.main.temp-273.15) * 10) / 10}도</div>
            <div className="sky">{result.weather[0].main}</div>
          </ResultWrap>
        )}
      </div>
    </AppWrap>
  );
}

export default Weather;
