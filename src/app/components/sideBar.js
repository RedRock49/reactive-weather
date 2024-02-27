"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import {search } from '../page.jsx';

const SideBar = () =>{
    return(
        <header className='sideBar'>
          <div id="searchField">
            <input type='search' id='searchBar' placeholder='Поиск...'/>
            <button id='searchButton' onClick={search}><Image src="./Button_Icons/Search.svg" height={35} width={35} alt="Search Icon" /></button>
          </div>
          <ul id='favouriteCityList'>
            <button id='favouriteCityExample' className='favouriteCityButton Button' type='button'>
              <Image src='./Button_Icons/Star_filled.svg' alt='Favourite City' className='buttonIcon' width={35} height={35} />
              <p className='buttonText'>FavouriteCityExample</p>
            </button>
          </ul>
        </header>
    )
}

export default SideBar;