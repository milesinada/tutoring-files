import { useEffect, useState } from "react";
import DataService from "../services/dataService";

const Weather = () => {
  const [data, setData] = useState({});

  const locationSuccess = async (pos) => {
    console.log("Location", pos);
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;

    let service = new DataService();
    let data = await service.getWeather(lat, lon);
    console.log("data");
    setData(data);
  };

  const locationError = (err) => {
    console.log("Error loc", err);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-info">
        <h5>{data?.current?.temp}&deg;</h5>
        <h6>{data?.current?.weather[0].description}</h6>
        <img
          src={`https://openweathermap.org/img/w/${data?.current?.weather[0].icon}.png`}
        ></img>
      </div>
    </div>
  );
};
export default Weather;
