import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ Info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.webp?a=1&b=1&s=612x612&w=0&k=20&c=M-M-0G2h5claKSoJDulPHau74xPvqheMVp7Xg0WjaZ8=";

  const HOT_URL =
    "https://images.unsplash.com/photo-1755899850036-084006cbc1c2?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1677253170860-b5f20dab49c3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              Info.humidity > 88
                ? RAIN_URL
                : Info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <h2 className="cityName">
                {Info.city}&nbsp; &nbsp;
                {Info.humidity > 88 ? (
                  <ThunderstormIcon />
                ) : Info.temp > 15 ? (
                  <SunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </h2>

              <div className="MainDiv">
                <div>Temperature = {Info.temp}&deg;C</div>
                <div>Humidity = {Info.humidity}</div>
                <div>Min Temperature = {Info.tempMin}&deg;C</div>
                <div>Max Temperature = {Info.tempMax}&deg;C</div>
                <hr />
                <div>
                  The Weathe can be described as <i>{Info.weather}</i> and feels
                  like = {Info.feelsLike}&deg;C
                </div>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
