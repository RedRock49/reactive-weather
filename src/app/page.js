import Image from 'next/image'
import Forecast from './components/forecast'

export default function Home() {
  return (
    <main >
      <header className='sideBar'>
        <div id="searchField">
          <button id='searchButton'><Image src="/search.svg" height={35} width={35} alt="Search Icon" /></button>
          <input type='search' id='searchBar' placeholder='Search...'/>
        </div>
        <button id='locationButton'  className='Button' type='button'>
            <Image src='/location.svg' alt='Location Icon' className='buttonIcon' width={35} height={35} />
            <p className='buttonText'>Location</p>
        </button>
        <ul id='favouriteCityList'>
          <li>
            <button className='favouriteCityButton Button' type='button'>
              <Image src='./star.svg' alt='Favourite City' className='buttonIcon' width={35} height={35} />
              <p className='buttonText'>Moscow</p>
            </button>
          </li>
        </ul>
        <button id='settingsButton' className='Button'  type='button'>
            <Image src='/settings.svg' alt='Location Icon' className='buttonIcon' width={35} height={35} />
            <p className='buttonText'>Settings</p>
        </button>
      </header>
      <div id='mainPage'>
        <div id='centralColumn'>
          <p id='selectedCityName'>Odintsovo</p>
          <div id='forecastCurrent'></div>
          <div id='hourlyForecast'>
            <div className='textContainer'><p className='blockText'>HOURLY FORECAST</p></div>
            <div></div>
          </div>
          <div id='tenDayForecast'>
            <div className='textContainer'><p className='blockText'>10-DAY FORECAST</p></div>
            <div>
              <Forecast day='Tomorrow, 19 sept ' min='+10' max='20' image="./Forecast_Icons/Overcast.svg" condition='Overcast' imageWidth={45} imageHeight={45} />
            </div>
          </div>
          <button id='favoriteButton'></button>
        </div>
      </div>
    </main>
  )
}
