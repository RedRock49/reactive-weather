import React from "react";
import Image from 'next/image';

const hourlyforecast = ( {time, weatherCondition, temp}) => {
    let image = "./Forecast_Icons/Overcast.svg";
    return(
        <div id="HForecast0" className="hourlyForecastDiv">
            <p className="hourlyForecastTime">{time}</p>
            <Image className="hourlyForecastConditionsSvg" src={image} alt="Weather conditions image" width={60} height={60} />
            <p className="hourlyForecastTemp">{temp}°</p>
        </div>
    )
}

export default hourlyforecast;