"use client"

import Image from 'next/image'
import Forecast from './components/forecast'
import HourlyForecast from './components/hourforecast';
import React from 'react';

export default function Home() { 
  async function fetchData(){
    let geoCode;
      let apiKey = "aCgdk9GDCR8SdKonAnP1BPxAcIMOgVz5";
      let lang = "en-us";
      let geoDetails = true;
      let topLevel = false;
      let location = document.getElementById('selectedCityName').innerHTML;
      //Requesting GeoPositional info
      let geoPositionUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${location}&language=${lang}&details=${geoDetails}&toplevel=${topLevel}`;
      let response = await fetch(geoPositionUrl);
      let data = await response.json();
      geoCode = data[0].Key;

      //Current conditions request settings
      let CondDetails = true;

      let CurrentConditionsUrl = `http://dataservice.accuweather.com/currentconditions/v1/${geoCode}?apikey=${apiKey}&details=${CondDetails}`;
      response = await fetch(CurrentConditionsUrl);
      data = await response.json();

      let sign = "";
      if(data[0].Temperature.Metric.Value > 0){
        sign = "+"
      }

      document.getElementById("Wind").innerHTML = `Wind: ${data[0].Wind.Direction.English} ${Math.round(data[0].Wind.Speed.Metric.Value)}km/h`;
      document.getElementById("Humidity").innerHTML = `Humidity: ${data[0].RelativeHumidity}%`;
      document.getElementById("currentConditionsWeatherType").innerHTML = data[0].WeatherText;
      document.getElementById("currentConditionsTemp").innerHTML = `${sign}${Math.round(data[0].Temperature.Metric.Value)}°`;
      document.getElementById("HForecastNow").childNodes.item(2).innerHTML = `${sign}${Math.round(data[0].Temperature.Metric.Value)}°`;

      let conditionsImage = document.getElementById('currentConditionsSVG');
      let HForecastImage = document.getElementById('HForecastNow').childNodes.item(1);

      switch(data[0].WeatherIcon){
            case 1:
            case 2:
            case 3:
            case 4:
              conditionsImage.setAttribute('src','./Forecast_Icons/Sunny.svg');
              HForecastImage.setAttribute('src','./Forecast_Icons/Sunny.svg'); //clear(sunny)
              HForecastImage.setAttribute('width',38);
              HForecastImage.setAttribute('height',38);
              conditionsImage.setAttribute('width',80);
              conditionsImage.setAttribute('height',80);
              break;
            case 7:
            case 8:
              conditionsImage.setAttribute('src','./Forecast_Icons/Cloudy_anytime.svg'); //cloudy(anyTime) 
              HForecastImage.setAttribute('src','./Forecast_Icons/Cloudy_anytime.svg');
              break;
            case 6:
              conditionsImage.setAttribute('src','./Forecast_Icons/Cloudy_sunny.svg'); //cloudy(sunny)
              HForecastImage.setAttribute('src','./Forecast_Icons/Cloudy_sunny.svg');
              break;
            case 11:
            case 5:
            case 37:
              conditionsImage.setAttribute('src','./Forecast_Icons/Fog_anytime.svg'); //fog
              HForecastImage.setAttribute('src','./Forecast_Icons/Fog_anytime.svg');
              break;
            case 12:
            case 18:
              conditionsImage.setAttribute('src','./Forecast_Icons/Rain_anytime.svg'); //rain(anytime)
              HForecastImage.setAttribute('src','./Forecast_Icons/Rain_anytime.svg');
              break;
            case 13:
            case 14:
              conditionsImage.setAttribute('src','./Forecast_Icons/Rain_sunny.svg'); //rain(sunny)
              HForecastImage.setAttribute('src','./Forecast_Icons/Rain_sunny.svg');
              break;
            case 16:
            case 17:
              conditionsImage.setAttribute('src','./Forecast_Icons/Thunder_sunny.svg'); //thunder(sunny)
              HForecastImage.setAttribute('src','./Forecast_Icons/Thunder_sunny.svg');
              break;
            case 15:
              conditionsImage.setAttribute('src','./Forecast_Icons/Thunder_anytime.svg'); //thunder(anytime)
              HForecastImage.setAttribute('src','./Forecast_Icons/Thunder_anytime.svg');
              break;
            case 20:
            case 21:
            case 23: 
              conditionsImage.setAttribute('src','./Forecast_Icons/Snow_sunny.svg'); //snow(sunny)
              HForecastImage.setAttribute('src','./Forecast_Icons/Snow_sunny.svg');
              break;
            case 19:
            case 22:
              conditionsImage.setAttribute('src','./Forecast_Icons/Snow_anytime.svg'); //snow(anytime)
              HForecastImage.setAttribute('src','./Forecast_Icons/Snow_anytime.svg');
              break;
            case 24:
            case 25:
            case 26:
            case 29:
              conditionsImage.setAttribute('src','./Forecast_Icons/Sleet.svg'); //sleet
              HForecastImage.setAttribute('src','./Forecast_Icons/Sleet.svg');
              break;
            case 30:
              conditionsImage.setAttribute('src','./Forecast_Icons/Hot.svg'); //Hot
              HForecastImage.setAttribute('src','./Forecast_Icons/Hot.svg');
              break;
            case 31:
              conditionsImage.setAttribute('src','./Forecast_Icons/Cold.svg'); //Cold
              HForecastImage.setAttribute('src','./Forecast_Icons/Cold.svg');
              break;
            case 32:
              conditionsImage.setAttribute('src','./Forecast_Icons/Windy.svg'); //Windy
              HForecastImage.setAttribute('src','./Forecast_Icons/Windy.svg');
              break;
            case 33:
            case 34:
            case 35:
            case 36:
              conditionsImage.setAttribute('src','./Forecast_Icons/Moon.svg'); //Moon
              HForecastImage.setAttribute('src','./Forecast_Icons/Moon.svg');
              HForecastImage.setAttribute('width',38);
              HForecastImage.setAttribute('height',38);
              conditionsImage.setAttribute('width',80);
              conditionsImage.setAttribute('height',80);
              break;
            case 38:
              conditionsImage.setAttribute('src','./Forecast_Icons/Cloudy_moon.svg'); //cloudy(moon)
              HForecastImage.setAttribute('src','./Forecast_Icons/Cloudy_moon.svg');
              break;
            case 39: 
            case 40:
              conditionsImage.setAttribute('src','./Forecast_Icons/Rain_moon.svg'); //rain(moon)
              HForecastImage.setAttribute('src','./Forecast_Icons/Rain_moon.svg');
              break;
            case 41:
            case 42: 
              conditionsImage.setAttribute('src','./Forecast_Icons/Thunder_moon.svg'); //thunder(moon)
              HForecastImage.setAttribute('src','./Forecast_Icons/Thunder_moon.svg');
              break;
            case 43:
            case 44:
              conditionsImage.setAttribute('src','./Forecast_Icons/Cloudy_anytime.svg'); //snow(moon)
              HForecastImage.setAttribute('src','./Forecast_Icons/Cloudy_anytime.svg');
              HForecastImage.setAttribute('width',50);
              HForecastImage.setAttribute('height',50);
              break;
          }

      //Hourly Forecast request
      let hourlyDetails = 'false';
      let hourlyIsMetric = 'true';

      let hourlyForecastUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${geoCode}?apikey=${apiKey}&language=${lang}&details=${hourlyDetails}&metric=${hourlyIsMetric}`;
      response = await fetch(hourlyForecastUrl);
      data = await response.json();

      let list = document.getElementById("listOfHForecasts")
      if(list.childNodes.length != 1){
        for(let i = 0; i < 12; i++){
          list.removeChild(document.getElementById(`HForecast${i+1}`));
        }
      }
      for(let i = 0;i < data.length ;i++){
        let forecast = document.getElementById("HForecastNow").cloneNode(true);
        forecast.setAttribute("id",`HForecast${i+1}`);
        forecast.childNodes.item(0).innerHTML = data[i].DateTime.slice(11,16);
        if(data[i].Temperature.Value > 0){
          sign = "+";
        }else{
          sign = "";
        }
        forecast.childNodes.item(2).innerHTML = Math.round(data[i].Temperature.Value) + "°";
        let forecastImage = forecast.childNodes.item(1);
        switch(data[i].WeatherIcon){
            case 1:
            case 2:
            case 3:
            case 4:
              forecastImage.setAttribute('src','./Forecast_Icons/Sunny.svg'); //clear(sunny)
              forecastImage.setAttribute('width','38');
              forecastImage.setAttribute('height','38');
              break;
            case 7:
            case 8:
              forecastImage.setAttribute('src','./Forecast_Icons/Cloudy_anytime.svg'); //cloudy(anyTime) 
              break;
            case 6:
              forecastImage.setAttribute('src','./Forecast_Icons/Cloudy_sunny.svg'); //cloudy(sunny)
              break;
            case 11:
            case 5:
            case 37:
              forecastImage.setAttribute('src','./Forecast_Icons/Fog_anytime.svg'); //fog
              break;
            case 12:
            case 18:
              forecastImage.setAttribute('src','./Forecast_Icons/Rain_anytime.svg'); //rain(anytime)
              break;
            case 13:
            case 14:
              forecastImage.setAttribute('src','./Forecast_Icons/Rain_sunny.svg'); //rain(sunny)
              break;
            case 16:
            case 17:
              forecastImage.setAttribute('src','./Forecast_Icons/Thunder_sunny.svg'); //thunder(sunny)
              break;
            case 15:
              forecastImage.setAttribute('src','./Forecast_Icons/Thunder_anytime.svg'); //thunder(anytime)
              break;
            case 20:
            case 21:
            case 23: 
              forecastImage.setAttribute('src','./Forecast_Icons/Snow_sunny.svg'); //snow(sunny)
              break;
            case 19:
            case 22:
              forecastImage.setAttribute('src','./Forecast_Icons/Snow_anytime.svg'); //snow(anytime)
              break;
            case 24:
            case 25:
            case 26:
            case 29:
              forecastImage.setAttribute('src','./Forecast_Icons/Sleet.svg'); //sleet
              break;
            case 30:
              forecastImage.setAttribute('src','./Forecast_Icons/Hot.svg'); //Hot
              break;
            case 31:
              forecastImage.setAttribute('src','./Forecast_Icons/Cold.svg'); //Cold
              break;
            case 32:
              forecastImage.setAttribute('src','./Forecast_Icons/Windy.svg'); //Windy
              break;
            case 33:
            case 34:
            case 35:
            case 36:
              forecastImage.setAttribute('src','./Forecast_Icons/Moon.svg'); //Moon
              forecastImage.setAttribute('width',38);
              forecastImage.setAttribute('height',38);
              break;
            case 38:
              forecastImage.setAttribute('src','./Forecast_Icons/Cloudy_moon.svg'); //cloudy(moon)
              break;
            case 39:
            case 40:
              forecastImage.setAttribute('src','./Forecast_Icons/Rain_moon.svg'); //rain(moon)
              break;
            case 41:
            case 42:
              forecastImage.setAttribute('src','./Forecast_Icons/Thunder_moon.svg'); //thunder(moon)
              break;
            case 43:
            case 44:
              forecastImage.setAttribute('src','./Forecast_Icons/Cloudy_anytime.svg'); //snow(moon)
              break;
        }
        list.appendChild(forecast);
      } 
      let fiveDayForecastURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${geoCode}?apikey=${apiKey}&language=${lang}&details=true&metric=true`;
      response = await fetch(fiveDayForecastURL);
      data = await response.json();

      let dailyList = document.getElementById('dailyContainer');
      
      if(dailyList.childNodes.length != 1){
        for(let i = 0; i < 5; i++){
          dailyList.removeChild(document.getElementById(`forecastContainer${i+1}`));
        }
      }
      for(let i = 0;i < data.DailyForecasts.length; i++){
        let mainElementCopy = document.getElementById("forecastContainer").cloneNode(true);
        mainElementCopy.setAttribute('id',`forecastContainer${i+1}`);
        mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).innerHTML = 'Max: ' + Math.round(data.DailyForecasts[i].Temperature.Maximum.Value);
        mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).innerHTML = 'Min: ' + Math.round(data.DailyForecasts[i].Temperature.Minimum.Value);
        mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).innerHTML = data.DailyForecasts[i].Day.IconPhrase;
        const date = (new Date(data.DailyForecasts[i].EpochDate*1000)).toDateString().slice(0,10)
        mainElementCopy.childNodes.item(0).childNodes.item(0).innerHTML = date;
        let image = mainElementCopy.childNodes.item(0).childNodes.item(1);
        switch(data.DailyForecasts[i].Day.Icon){
            case 1:
            case 2:
            case 3:
            case 4:
              image.setAttribute('src','./Forecast_Icons/Sunny.svg'); //clear(sunny)
              image.setAttribute('width','38');
              image.setAttribute('height','38');
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Sunny.jpg')";
              mainElementCopy.style.backgroundPositionY= '32%';
              break;
            case 7:
            case 8:
              image.setAttribute('src','./Forecast_Icons/Cloudy_anytime.svg'); //cloudy(anyTime) 
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Cloudy_anytime.jpg')";
              mainElementCopy.style.backgroundPositionY= 'center';
              break;
            case 6:
              image.setAttribute('src','./Forecast_Icons/Cloudy_sunny.svg'); //cloudy(sunny)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Cloudy_sunny.jpg')";
              mainElementCopy.style.backgroundPositionY= '10%';
              break;
            case 11:
            case 5:
            case 37:
              image.setAttribute('src','./Forecast_Icons/Fog_anytime.svg'); //fog
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Fog.jpg')";
              mainElementCopy.style.backgroundPositionY= 'center';
              break;
            case 12:
            case 18:
              image.setAttribute('src','./Forecast_Icons/Rain_anytime.svg'); //rain(anytime)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Rain_anytime.jpg')";
              mainElementCopy.style.backgroundPositionY= '15%';
              //mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 13:
            case 14:
              image.setAttribute('src','./Forecast_Icons/Rain_sunny.svg'); //rain(sunny)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Rain_sunny.jpg')";
              mainElementCopy.style.backgroundPositionY= '70%';
              break;
            case 16:
            case 17:
              image.setAttribute('src','./Forecast_Icons/Thunder_sunny.svg'); //thunder(sunny)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Thunder_anytime.jpg')";
              mainElementCopy.style.backgroundPositionY= '59%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 15:
              image.setAttribute('src','./Forecast_Icons/Thunder_anytime.svg'); //thunder(anytime)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Thunder_anytime.jpg')";
              mainElementCopy.style.backgroundPositionY= '59%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 20:
            case 21:
            case 23:
              image.setAttribute('src','./Forecast_Icons/Snow_anytime.svg'); //snow(sunny)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Snow_anytime.jpg')";
              mainElementCopy.style.backgroundPositionY= '15%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 19:
            case 22:
              image.setAttribute('src','./Forecast_Icons/Snow_anytime.svg'); //snow(anytime)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Snow_anytime.jpg')";
              mainElementCopy.style.backgroundPositionY= '15%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 24:
            case 25:
            case 26:
            case 29:
              image.setAttribute('src','./Forecast_Icons/Sleet.svg'); //sleet
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Sleet.jpg')";
              mainElementCopy.style.backgroundPositionY= '10%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 30:
              image.setAttribute('src','./Forecast_Icons/Hot.svg'); //Hot
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Hot.jpg')";
              mainElementCopy.style.backgroundPositionY= 'center';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 31:
              image.setAttribute('src','./Forecast_Icons/Cold.svg'); //Cold
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Cold.jpg')";
              mainElementCopy.style.backgroundPositionY= '30%';
              //mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 32:
              image.setAttribute('src','./Forecast_Icons/Windy.svg'); //Windy
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Windy.jpg')";
              mainElementCopy.style.backgroundPositionY= '30%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 33:
            case 34:
            case 35:
            case 36:
              image.setAttribute('src','./Forecast_Icons/Moon.svg'); //Moon
              image.setAttribute('width',38);
              image.setAttribute('height',38);
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Moon.jpg')";
              mainElementCopy.style.backgroundPositionY= '10%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 38:
              image.setAttribute('src','./Forecast_Icons/Cloudy_moon.svg'); //cloudy(moon)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Cloudy_moon.jpg')";
              mainElementCopy.style.backgroundPositionY= '40%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 39:
            case 40:
              image.setAttribute('src','./Forecast_Icons/Rain_moon.svg'); //rain(moon)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Rain_anytime.jpg')";
              mainElementCopy.style.backgroundPositionY= '15%';
              //mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 41:
            case 42:
              image.setAttribute('src','./Forecast_Icons/Thunder_moon.svg'); //thunder(moon)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Thunder_moon.jpg')";
              mainElementCopy.style.backgroundPositionY= '40%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
            case 43:
            case 44:
              image.setAttribute('src','./Forecast_Icons/Cloudy_anytime.svg'); //snow(moon)
              mainElementCopy.style.backgroundImage = "url('./Forecast_Backgrounds/Snow_anytime.jpg')";
              mainElementCopy.style.backgroundPositionY= '15%';
              mainElementCopy.childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; // Date
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(0).style.color = '#F2F2F2'; //Max
              mainElementCopy.childNodes.item(1).childNodes.item(0).childNodes.item(1).style.color = '#F2F2F2'; //Min
              mainElementCopy.childNodes.item(1).childNodes.item(1).childNodes.item(0).style.color = '#F2F2F2'; //Condition
              break;
        }
        dailyList.appendChild(mainElementCopy);
      }
    }
  return (
    <main>
      <div id='mainPage'>
        <div id='centralColumn'>
          <div id='forecastCurrent'>
            <div id='selectedCityGroup'>
              <p id='selectedCityName'>Odintsovo</p>
              <button className='smallButtonButton' type='button' onClick={fetchData}>
                <div className='smallButton'>
                    <Image className='smallButtonImg' src='Button_Icons/Favourite.svg' alt='add to favourites' width={16} height={16}/> 
                </div>
              </button>
              <button className='smallButtonButton' type='button' onClick={fetchData}>
                <div className='smallButton'>
                    <Image className='smallButtonImg' src='Button_Icons/Reload.svg' alt='reload' width={18} height={18}/> 
                </div>
              </button>
            </div>
            <Image id='currentConditionsSVG' src='Forecast_Icons/Cloudy_anytime.svg' width={200} height={80} alt=''/>
            <div id='currentConditions'>
              <span id='currentConditionsTemp'>+16°</span>
              <span id='currentConditionsWeatherType'>Overcast</span>
            </div>
            <div id='currentConditionsPresc'>
              <span id='Wind'>Wind: SW 22ms/s</span>
              <span id='Humidity'>Humidity: 100%</span>
            </div>
          </div>
          <div id='hourlyForecast'>
            <div>            
              <div className='textContainer'><p className='blockText'>HOURLY FORECAST</p></div>
            </div>
            <ul id='listOfHForecasts'>
              <HourlyForecast id='HForecastNow' time='Now' weatherCondition='./Forecast_Icons/Cloudy_anytime.svg' temp='+16' />
            </ul>
          </div>
          <div id='fiveDayForecast'>
            <div className='textContainer'><p className='blockText'>5-DAY FORECAST</p></div>
            <ul id='dailyContainer'>
              <Forecast day='Today, 14 Jan' min='+10' max='+20' image="./Forecast_Icons/Cloudy_anytime.svg" condition='Overcast' imageWidth={70} imageHeight={70} />
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
