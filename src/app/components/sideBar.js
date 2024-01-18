"use client"

import React from 'react';
import Image from 'next/image';
import {search} from '../page.jsx';

const sideBar = () =>{
    return(
        <header className='sideBar'>
          <div id="searchField">
            <input type='search' id='searchBar' placeholder='Search...'/>
            <button id='searchButton' onClick={search}><Image src="./Button_Icons/Search.svg" height={35} width={35} alt="Search Icon" /></button>
          </div>
          <button id='locationButton'  className='Button' type='button'>
            <Image src='./Button_Icons/Location.svg' alt='Location Icon' className='buttonIcon' width={35} height={35} />
            <p className='buttonText'>Location</p>
          </button>
          <ul id='favouriteCityList'>
            <li>
              <button className='favouriteCityButton Button' type='button'>
                <Image src='./Button_Icons/Star_filled.svg' alt='Favourite City' className='buttonIcon' width={35} height={35} />
                <p className='buttonText'>Odintsovo</p>
              </button>
              <button className='favouriteCityButton Button' type='button'>
                <Image src='./Button_Icons/Star_filled.svg' alt='Favourite City' className='buttonIcon' width={35} height={35} />
                <p className='buttonText'>Moscow</p>
              </button>
            </li>
          </ul>
        </header>
    )
}

export default sideBar;