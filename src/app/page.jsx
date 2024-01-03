"use client"

import Image from 'next/image'
import Forecast from './components/forecast'
import HourlyForecast from './components/hourforecast';

export default function Home() { 
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
      if(data[0].Temperature.Metric.Value > 0){
        sign = "+"
      }

      document.getElementById("Wind").innerHTML = `Wind: ${data[0].Wind.Direction.English} ${Math.floor(data[0].Wind.Speed.Metric.Value)} km/h`;
      document.getElementById("Humidity").innerHTML = `Humidity: ${data[0].RelativeHumidity}%`;
      document.getElementById("currentConditionsWeatherType").innerHTML = data[0].WeatherText;
      document.getElementById("currentConditionsTemp").innerHTML = `${sign}${Math.floor(data[0].Temperature.Metric.Value)}°`;
      document.getElementById("HForecast+0").childNodes.item(2).innerHTML = `${sign}${Math.floor(data[0].Temperature.Metric.Value)}°`;

      //Hourly Forecast request
      let hourlyDetails = 'false';
      let hourlyLang = 'en-us';
      let hourlyIsMetric = 'true';

      let hourlyForecastUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${geoCode}?apikey=${apiKey}&language=${hourlyLang}&details=${hourlyDetails}&metric=${hourlyIsMetric}`;
      response = await fetch(hourlyForecastUrl);
      data = await response.json();

      let list = document.getElementById("listOfHForecasts")

      for(let i = 0;i < data.length ;i++){
        let forecast = document.getElementById("HForecast+0").cloneNode(true);
        forecast.setAttribute("id",`HForecast${i+1}`);
        forecast.childNodes.item(0).innerHTML = data[i].DateTime.slice(11,16);
        if(data[i].Temperature.Value > 0){
          sign = "+";
        }else{
          sign = "";
        }
        forecast.childNodes.item(2).innerHTML = Math.floor(data[i].Temperature.Value) + "°";
        let forecastImage = forecast.childNodes.item(1);
        /*switch(data[i].WeatherIcon){
          case (1 || 2 || 3 || 4):
            forecastImage.setAttribute //clear(sunny) DONE
            break;
          case (7 || 8):
            forecastImage.setAttribute //cloudy(anyTime) DONE
            break;
          case 6:
            forecastImage.setAttribute //cloudy(sunny) DONE
            break;
          case (11 || 5 || 37):
            forecastImage.setAttribute //fog TODO
            break;
          case (12 || 18):
            forecastImage.setAttribute //rain(anyTime) TODO
            break;
          case(13 || 14):
            forecastImage.setAttribute //rain(sunny) TODO
            break;
          case(16 || 17):
            forecastImage.setAttribute //thunder(sunny) TODO
            break;
          case 15:
            forecastImage.setAttribute //thunder(anyTime) TODO
            break;
          case (20 || 21 || 23):
            forecastImage.setAttribute //snow(sunny) TODO 
            break;
          case (19 || 22):
            forecastImage.setAttribute //snow(anyTime) TODO 
            break;
          case (24 || 25 || 26 || 29):
            forecastImage.setAttribute //sleet TODO
            break;
          case 30:
            forecastImage.setAttribute //Hot TODO
            break;
          case 31:
            forecastImage.setAttribute //Cold TODO
            break;
          case 32:
            forecastImage.setAttribute //Windy TODO
            break;
          case (33 || 34 || 35 || 36):
            forecastImage.setAttribute //clear(moon) TODO
            break;
          case 38:
            forecaseImage.setAttribute //cloudy(moon) TODO
            break;
          case (39 || 40):
            forecastImage.setAttribute //rain(moon) TODO
            break;
          case (41 || 42):
            forecastImage.setAttribute //thunder(moon) TODO
            break;
          case (43 || 44):
            forecastImage.setAttribute //snow(moon) TODO 
            break;
        } 
        */
        list.appendChild(forecast);
      } 

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
              <button className='smallButtonButton' type='button' onClick={fetchDataAccu}>
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
            <div>            
              <div className='textContainer'><p className='blockText'>HOURLY FORECAST</p></div>
            </div>
            <ul id='listOfHForecasts'>
              <HourlyForecast id='HForecastNow' time='Now' weatherCondition='./Forecast_Icons/Overcast.svg' temp='+16' />
            </ul>
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
