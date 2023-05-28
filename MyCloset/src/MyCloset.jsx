import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function MyCloset() {
  const API_KEY = "63cc941e76617cbd7ef6415dffc51d5d";
  const [location, setLocation] = useState("");
  const [result, setResult] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2834387742b25d5393a21e88fee8246a`;

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

export default MyCloset;

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px solid blue;
    padding: 20px;
  }
  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
  }
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 1px black solid;
  border-radius: 8px;
`;
