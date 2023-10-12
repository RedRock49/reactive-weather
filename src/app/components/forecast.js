import {React} from 'react';
import Image from 'next/image';

const forecast = ({day, min, max, condition, image, imageWidth, imageHeight}) => {

    return(
        <div id='forecastContainer'>
            <div id='forecastLeftSideContainer'>
                <p id='forecastDayText' >{day}</p>
                <Image src={image} alt='Forecast Icon' width={imageWidth} height={imageHeight}/>
            </div>
            <div>
                <div>
                    <p id='forecastDayPrescText'>Min: {min}</p>
                    <p id='forecastDayPrescText'>Max: {max}</p>
                </div>
                <div>
                    <p id='forecastDayConditionsText'>{condition}</p>
                </div>
            </div>
        </div>
    )
}
export default forecast;