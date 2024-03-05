"use client";

import "./style.css";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    if(localStorage.getItem("current") == null){
      localStorage.setItem("current",'"LocalObservationDateTime":"2024-03-04T21:03:00+03:00","EpochTime":1709575380,"WeatherText":"Clear","WeatherIcon":33,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":false,"Temperature":{"Metric":{"Value":-1.1,"Unit":"C","UnitType":17},"Imperial":{"Value":30,"Unit":"F","UnitType":18}},"RealFeelTemperature":{"Metric":{"Value":1,"Unit":"C","UnitType":17,"Phrase":"Cold"},"Imperial":{"Value":34,"Unit":"F","UnitType":18,"Phrase":"Cold"}},"RealFeelTemperatureShade":{"Metric":{"Value":1,"Unit":"C","UnitType":17,"Phrase":"Cold"},"Imperial":{"Value":34,"Unit":"F","UnitType":18,"Phrase":"Cold"}},"RelativeHumidity":64,"IndoorRelativeHumidity":30,"DewPoint":{"Metric":{"Value":-7.2,"Unit":"C","UnitType":17},"Imperial":{"Value":19,"Unit":"F","UnitType":18}},"Wind":{"Direction":{"Degrees":90,"Localized":"E","English":"E"},"Speed":{"Metric":{"Value":1.9,"Unit":"km/h","UnitType":7},"Imperial":{"Value":1.2,"Unit":"mi/h","UnitType":9}}},"WindGust":{"Speed":{"Metric":{"Value":1.9,"Unit":"km/h","UnitType":7},"Imperial":{"Value":1.2,"Unit":"mi/h","UnitType":9}}},"UVIndex":0,"UVIndexText":"Low","Visibility":{"Metric":{"Value":16.1,"Unit":"km","UnitType":6},"Imperial":{"Value":10,"Unit":"mi","UnitType":2}},"ObstructionsToVisibility":"","CloudCover":0,"Ceiling":{"Metric":{"Value":10363,"Unit":"m","UnitType":5},"Imperial":{"Value":34000,"Unit":"ft","UnitType":0}},"Pressure":{"Metric":{"Value":1023,"Unit":"mb","UnitType":14},"Imperial":{"Value":30.21,"Unit":"inHg","UnitType":12}},"PressureTendency":{"LocalizedText":"Steady","Code":"S"},"Past24HourTemperatureDeparture":{"Metric":{"Value":0,"Unit":"C","UnitType":17},"Imperial":{"Value":0,"Unit":"F","UnitType":18}},"ApparentTemperature":{"Metric":{"Value":-1.1,"Unit":"C","UnitType":17},"Imperial":{"Value":30,"Unit":"F","UnitType":18}},"WindChillTemperature":{"Metric":{"Value":-1.1,"Unit":"C","UnitType":17},"Imperial":{"Value":30,"Unit":"F","UnitType":18}},"WetBulbTemperature":{"Metric":{"Value":-3.1,"Unit":"C","UnitType":17},"Imperial":{"Value":26,"Unit":"F","UnitType":18}},"WetBulbGlobeTemperature":{"Metric":{"Value":-1.1,"Unit":"C","UnitType":17},"Imperial":{"Value":30,"Unit":"F","UnitType":18}},"Precip1hr":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"PrecipitationSummary":{"Precipitation":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"PastHour":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past3Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past6Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past9Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past12Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past18Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past24Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}}},"TemperatureSummary":{"Past6HourRange":{"Minimum":{"Metric":{"Value":-1.1,"Unit":"C","UnitType":17},"Imperial":{"Value":30,"Unit":"F","UnitType":18}},"Maximum":{"Metric":{"Value":2.8,"Unit":"C","UnitType":17},"Imperial":{"Value":37,"Unit":"F","UnitType":18}}},"Past12HourRange":{"Minimum":{"Metric":{"Value":-3.9,"Unit":"C","UnitType":17},"Imperial":{"Value":25,"Unit":"F","UnitType":18}},"Maximum":{"Metric":{"Value":2.8,"Unit":"C","UnitType":17},"Imperial":{"Value":37,"Unit":"F","UnitType":18}}},"Past24HourRange":{"Minimum":{"Metric":{"Value":-3.9,"Unit":"C","UnitType":17},"Imperial":{"Value":25,"Unit":"F","UnitType":18}},"Maximum":{"Metric":{"Value":2.8,"Unit":"C","UnitType":17},"Imperial":{"Value":37,"Unit":"F","UnitType":18}}}},"MobileLink":"http://www.accuweather.com/en/ru/odintsovo/294010/current-weather/294010?lang=en-us","Link":"http://www.accuweather.com/en/ru/odintsovo/294010/current-weather/294010?lang=en-us"}');
      localStorage.setItem("cityName", "Одинцово");
    } //Set some default values if none are present
    const currentCond = JSON.parse(localStorage.getItem("current"));
    const sign = localStorage.getItem("Sign");
    document.getElementById("TemperatureText").innerHTML = sign + 
      Math.round(currentCond.Temperature.Metric.Value) + "°";
    document.getElementById("ConditionText").innerHTML = currentCond.WeatherText;
    document.getElementById("CityNameText").innerHTML =
      localStorage.getItem("cityName");
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
    setInterval(() => {location.reload()}, 30000);
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
