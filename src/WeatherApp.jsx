import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    humidity: 88,
    temp: 14.05,
    tempMax: 14.05,
    tempMin: 14.05,
    weather: "mist",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2> Weather app </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox Info={weatherInfo} />
    </div>
  );
}
