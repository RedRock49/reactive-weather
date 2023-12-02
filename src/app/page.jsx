"use client"

import Image from 'next/image'
import Forecast from './components/forecast'

export default function Home() { 
  async function FetchData() {
    let apiKey = "";
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
  async function Grt(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = response.json();
    
    console.log(data[1]);
  }
  return (
    <main>
      <div id='mainPage'>
        <div id='centralColumn'>
          <div id='forecastCurrent'>
            <div id='selectedCityGroup'>
              <p id='selectedCityName'>Odintsovo</p>
              <button className='smallButtonButton' type='button' onClick={Grt}>
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
