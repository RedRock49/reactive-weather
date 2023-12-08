"use client"

import Image from 'next/image'
import Forecast from './components/forecast'

export default function Home() { 
  async function FetchData() {
    let apiKey = "f25eb0c9e99da668d815941d1d4e7539";
    let units = "Metric";
    let cityName = document.getElementById("selectedCityName").innerHTML;
    let positionUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${apiKey}`;
    
    
    let positionResponse = await fetch(positionUrl);
    let data = await positionResponse.json();
    let lattitude = data[0].lat;
    let longitude = data[0].lon;

    let conditionsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&units=${units}&lon=${longitude}&appid=${apiKey}`;
    let conditionsResponse = await fetch(conditionsUrl);
    data = await conditionsResponse.json();
    let windDegrees = data.wind.deg;
    let windDirection = 'N';
    if(windDegrees >= 315 || windDegrees <= 45){
      windDirection = "N";
    }else if(windDegrees > 45 && windDegrees <= 135){
      windDirection = "E"
    }else if(windDegrees > 135 && windDegrees <= 225){
      windDirection = "S"
    }else if(windDegrees > 225 && windDegrees <= 315){
      windDirection = "W"
    }
    
    let sign = "";
    if(data.main.temp >= 0){
      sign = "+"
    }

    document.getElementById("Wind").innerHTML = `Wind: ${windDirection} ${Math.floor(data.wind.speed)} m/s`;
    document.getElementById("Humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
    document.getElementById("currentConditionsWeatherType").innerHTML = data.weather[0].main;
    document.getElementById("currentConditionsTemp").innerHTML = `${sign}${Math.floor(data.main.temp)}°`;
    //document.getElementById("selectedCityName").innerHTML = data.name; -- Made for location
  }

  
  async function fetchDataAccu(){
    let geoCode;
    let lon;
    let lat;


    //Determening location
    let isLocation = false;
    
    //Check if need to know location
    if(isLocation) {
      /*
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(fetchData);
      }else{
        console.log("GeoLocation is not supported or permitted");
      }*/
    }else{
      //Standard GeoPostion request settings
      let apiKey = "aCgdk9GDCR8SdKonAnP1BPxAcIMOgVz5";
      let geoLang = "en-us";
      let geoDetails = true;
      let topLevel = false;
      let location = document.getElementById('selectedCityName').innerHTML;
      //Requesting GeoPositional info
      let geoPositionUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${location}&language=${geoLang}&details=${geoDetails}&toplevel=${topLevel}`;
      let response = await fetch(geoPositionUrl);
      let data = await response.json();
      geoCode = data[0].Key;

      //Current conditions request settings
      let CondDetails = true;

      let CurrentConditionsUrl = `http://dataservice.accuweather.com/currentconditions/v1/${geoCode}?apikey=${apiKey}&details=${CondDetails}`;
      response = await fetch(CurrentConditionsUrl);
      data = await response.json();

      let sign = "";
      if(data[0].Temperature.Metric.Value >= 0){
        sign = "+"
      }

      document.getElementById("Wind").innerHTML = `Wind: ${data[0].Wind.Direction.English} ${Math.floor(data[0].Wind.Speed.Metric.Value)} km/h`;
      document.getElementById("Humidity").innerHTML = `Humidity: ${data[0].RelativeHumidity}%`;
      document.getElementById("currentConditionsWeatherType").innerHTML = data[0].WeatherText;
      document.getElementById("currentConditionsTemp").innerHTML = `${sign}${Math.floor(data[0].Temperature.Metric.Value)}°`;
    }
  }
  return (
    <main>
      <div id='mainPage'>
        <div id='centralColumn'>
          <div id='forecastCurrent'>
            <div id='selectedCityGroup'>
              <p id='selectedCityName'>Odintsovo</p>
              <button className='smallButtonButton' type='button' onClick={fetchDataAccu}>
                <div className='smallButton'>
                    <Image className='smallButtonImg' src='Button_Icons/Favourite.svg' alt='add to favourites' width={16} height={16}/> 
                </div>
              </button>
              <button className='smallButtonButton' type='button' onClick={FetchData}>
                <div className='smallButton'>
                    <Image className='smallButtonImg' src='Button_Icons/Reload.svg' alt='reload' width={18} height={18}/> 
                </div>
              </button>
            </div>
            <Image id='currentConditionsSVG' src='Forecast_Icons/Overcast.svg' width={200} height={80} alt=''/>
            <div id='currentConditions'>
              <span id='currentConditionsTemp'>+16°</span>
              <span id='currentConditionsWeatherType'>Overcast</span>
            </div>
            <div id='currentConditionsPresc'>
              <span id='Precipation'>Precipation: 100%</span>
              <span id='Wind'>Wind: SW 22ms/s</span>
              <span id='Humidity'>Humidity: 100%</span>
            </div>
            <p id='rainPrescription'>Rain Awaited at 19:20</p>
          </div>
          <div id='hourlyForecast'>
            <div className='textContainer'><p className='blockText'>HOURLY FORECAST</p></div>
            <div>

            </div>
          </div>
          <div id='tenDayForecast'>
            <div className='textContainer'><p className='blockText'>10-DAY FORECAST</p></div>
            <div>
              <Forecast day='Tomorrow, 19 sept ' min='+10' max='+20' image="./Forecast_Icons/Overcast.svg" condition='Overcast' imageWidth={70} imageHeight={70} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
