import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reactive Weather',
  description: 'Time for the right weather',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className='sideBar'>
          <div id="searchField">
            <button id='searchButton'><Image src="./Button_Icons/Search.svg" height={35} width={35} alt="Search Icon" /></button>
            <input type='search' id='searchBar' placeholder='Search...'/>
          </div>
          <button id='locationButton'  className='Button' type='button'>
            <Image src='./Button_Icons/Location.svg' alt='Location Icon' className='buttonIcon' width={35} height={35} />
            <p className='buttonText'>Location</p>
          </button>
          <ul id='favouriteCityList'>
            <li>
              <button className='favouriteCityButton Button' type='button'>
                <Image src='./Button_Icons/Star.svg' alt='Favourite City' className='buttonIcon' width={35} height={35} />
                <p className='buttonText'>Moscow</p>
              </button>
            </li>
          </ul>
          <button id='settingsButton' className='Button'  type='button'>
            <Image src='./Button_Icons/Settings.svg' alt='Location Icon' className='buttonIcon' width={35} height={35} />
            <p className='buttonText'>Settings</p>
          </button>
        </header>
        <div className={font.className}>{children}</div>
      </body>
    </html>
  )
}
