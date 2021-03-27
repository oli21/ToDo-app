import React, { useState } from "react";
import "./Sidebar.css";

//this is the header of the App
function Sidebar() {
  const [icon, setIcon] = useState(""); //setting the icon according the weather
  const [input, setInput] = useState(""); //setting the input in the input field
  const [locationName, setLocationName] = useState("Dhaka"); //setting the location from the user
  const [temperature, setTemperature] = useState(""); //setting the temperature
  const [weatherDesc, setWeatherDesc] = useState("hello"); //setting weather description

  //getting the location of the user
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  //set the location in place of location in the UI
  const handleSubmit = (event) => {
    event.preventDefault();
    setLocationName(input);
    setInput("");
  };

  //getting the weather from openweather api
  const getWeather = async () => {
    try {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=f896d39b7ccf7265b68fbdc2e9bec70c`
      );
      const response = await api_call.json();

      setIcon(
        `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
      ); //setting the icon from icon embedded in the response of the api

      setWeatherDesc(response.weather[0].description); //setting the weather description
      setTemperature(response.main.feels_like); //setting the temperature
    } catch (err) {
      //catching error if user enter invalid city name
      setLocationName("Please enter a valid city name");
      setTemperature("-");
      setWeatherDesc("-");
    }
  };

  getWeather();

  return (
    <div className="sidebar">
      {/* form input */}
      <div className="input">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Change your location"
            value={input}
            onChange={handleChange}
          />
          <button className="btn" type="submit"></button>
        </form>
      </div>

      {/* location */}
      <div className="location">
        <h1>{locationName}</h1>
      </div>

      {/* temperature */}
      <div className="temperature">
        <h1>{Math.floor(temperature - 273.15)}&#176; Celcius</h1>
      </div>
      
      {/* weather description */}
      <div className="weather_desc">
        <img src={icon} alt="" />
        <p>{weatherDesc}</p>
      </div>
    </div>
  );
}

export default Sidebar;
