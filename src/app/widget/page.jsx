"use client";

import "./style.css";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    const currentCond = JSON.parse(localStorage.getItem("current"));
    document.getElementById("TemperatureText").innerHTML =
      Math.round(currentCond.Temperature.Value) + "°";
    document.getElementById("ConditionText").innerHTML = currentCond.IconPhrase;
    document.getElementById("CityNameText").innerHTML =
      localStorage.getItem("CityName");
    var imageEl = document.getElementById("PrescImage");
    var containerImage = document.querySelector(".mainContainer");
    switch (currentCond.WeatherIcon) {
      case 1:
      case 2:
      case 3:
      case 4:
        imageEl.setAttribute("src", "./Forecast_Icons/Sunny.svg");
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Sunny.jpg')";
        containerImage.style.color = "#4d4d4d";
        imageEl.setAttribute("width", 80);
        imageEl.setAttribute("height", 80);
        break;
      case 7:
      case 8:
        imageEl.setAttribute("src", "./Forecast_Icons/Cloudy_anytime.svg");
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Cloudy_anytime.jpg')";
        containerImage.style.color = "#4d4d4d";
        break;
      case 6:
        imageEl.setAttribute("src", "./Forecast_Icons/Cloudy_sunny.svg"); //cloudy(sunny)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Cloudy_sunny.jpg')";
        break;
      case 11:
      case 5:
      case 37:
        imageEl.setAttribute("src", "./Forecast_Icons/Fog_anytime.svg"); //fog
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Fog_anytime.jpg')";
        break;
      case 12:
      case 18:
        imageEl.setAttribute("src", "./Forecast_Icons/Rain_anytime.svg"); //rain(anytime)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Rain_anytime.jpg')";
        break;
      case 13:
      case 14:
        imageEl.setAttribute("src", "./Forecast_Icons/Rain_sunny.svg"); //rain(sunny)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Rain_sunny.jpg')";
        break;
      case 16:
      case 17:
        imageEl.setAttribute("src", "./Forecast_Icons/Thunder_sunny.svg"); //thunder(sunny)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Thunder_sunny.jpg')";
        break;
      case 15:
        imageEl.setAttribute("src", "./Forecast_Icons/Thunder_anytime.svg"); //thunder(anytime)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Thunder_anytime.jpg')";
        break;
      case 20:
      case 21:
      case 23:
        imageEl.setAttribute("src", "./Forecast_Icons/Snow_sunny.svg"); //snow(sunny)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Snow_sunny.jpg')";
        break;
      case 19:
      case 22:
        imageEl.setAttribute("src", "./Forecast_Icons/Snow_anytime.svg"); //snow(anytime)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Snow_anytime.jpg')";
        break;
      case 24:
      case 25:
      case 26:
      case 29:
        imageEl.setAttribute("src", "./Forecast_Icons/Sleet.svg"); //sleet
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Sleet.jpg')";
        containerImage.style.color = "#4d4d4d";
        break;
      case 30:
        imageEl.setAttribute("src", "./Forecast_Icons/Hot.svg"); //Hot
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Hot.jpg')";
        break;
      case 31:
        imageEl.setAttribute("src", "./Forecast_Icons/Cold.svg"); //Cold
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Cold.jpg')";
        break;
      case 32:
        imageEl.setAttribute("src", "./Forecast_Icons/Windy.svg"); //Windy
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Windy.jpg')";
        break;
      case 33:
      case 34:
      case 35:
      case 36:
        imageEl.setAttribute("src", "./Forecast_Icons/Moon.svg"); //Moon
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Moon.jpg')";
        containerImage.style.color = "#4d4d4d";
        imageEl.setAttribute("width", 80);
        imageEl.setAttribute("height", 80);
        break;
      case 38:
        imageEl.setAttribute("src", "./Forecast_Icons/Cloudy_moon.svg"); //cloudy(moon)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Cloudy_moon.jpg')";
        containerImage.style.backgroundPosition = "25%";
        break;
      case 39:
      case 40:
        imageEl.setAttribute("src", "./Forecast_Icons/Rain_moon.svg"); //rain(moon)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Rain_moon.jpg')";
        break;
      case 41:
      case 42:
        imageEl.setAttribute("src", "./Forecast_Icons/Thunder_moon.svg"); //thunder(moon)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Thunder_moon.jpg')";
        containerImage.style.backgroundPosition = "25%";
        break;
      case 43:
      case 44:
        imageEl.setAttribute("src", "./Forecast_Icons/Snow_moon.svg"); //snow(moon)
        containerImage.style.backgroundImage =
          "url('./Forecast_Backgrounds/Snow_anytime.jpg')";
        imageEl.setAttribute("width", 100);
        imageEl.setAttribute("height", 100);
        break;
    }
  });

  return (
    <div className="mainContainer">
      <Image
        id="PrescImage"
        alt="prescription icon"
        src="./Forecast_Icons/Sunny.svg"
        width={100}
        height={100}
      />
      <p id="TemperatureText">+20°</p>
      <div className="CondCityContainer">
        <p id="ConditionText">Солнечно</p>
        <p id="CityNameText">Одинцово</p>
      </div>
    </div>
  );
}
