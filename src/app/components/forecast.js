import {React} from 'react';
import Image from 'next/image';

const forecast = ({day, min, max, condition, image, imageWidth, imageHeight}) => {
    return(
        <div className='forecastContainer' id='forecastContainer'>
            <div id='forecastLeftSideContainer'>
                <p id='forecastDayText' className='forecastText' >{day}</p>
                <Image className='fiveDayForecastSVG' src={image} alt='Forecast Icon' width={imageWidth} height={imageHeight}/>
            </div>
            <div id='forecastRightSideContainer'>
                <div>
                   <p id='forecastDayPrescText' className='forecastText'>Мин: {max}</p>
                   <p id='forecastDayPrescText' className='forecastText'>Макс: {min}</p>
                </div>
                <div>
                    <p id='forecastDayConditionsText' className='forecastText'>{condition}</p>
                </div>
            </div>
        </div>
    )
}
export default forecast;