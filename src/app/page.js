import Image from 'next/image'
import Forecast from './components/forecast'

export default function Home() {
  return (
    <main >
      <header className='sideBar'>
        <div id="searchField">
          <button id='searchButton'><Image src="/Search.svg" height={35} width={35} alt="Search Icon" /></button>
          <input type='search' id='searchBar' placeholder='Search...'/>
        </div>
        <button id='locationButton'  className='Button' type='button'>
            <Image src='/Location.svg' alt='Location Icon' className='buttonIcon' width={35} height={35} />
            <p className='buttonText'>Location</p>
        </button>
        <ul id='favouriteCityList'>
          <li>
            <button className='favouriteCityButton Button' type='button'>
              <Image src='./Star.svg' alt='Favourite City' className='buttonIcon' width={35} height={35} />
              <p className='buttonText'>Moscow</p>
            </button>
          </li>
        </ul>
        <button id='settingsButton' className='Button'  type='button'>
            <Image src='/Settings.svg' alt='Location Icon' className='buttonIcon' width={35} height={35} />
            <p className='buttonText'>Settings</p>
        </button>
      </header>
      <div id='mainPage'>
        <div id='centralColumn'>
          <div id='forecastCurrent'>
            <p id='selectedCityName'>Odintsovo</p>
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
            <div></div>
          </div>
          <div id='tenDayForecast'>
            <div className='textContainer'><p className='blockText'>10-DAY FORECAST</p></div>
            <div>
              <Forecast day='Tomorrow, 19 sept ' min='+10' max='+20' image="./Forecast_Icons/Overcast.svg" condition='Overcast' imageWidth={70} imageHeight={70} />
            </div>
          </div>
          <button id='favoriteButton'></button>
        </div>
      </div>
    </main>
  )
}
