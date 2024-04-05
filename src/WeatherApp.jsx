import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
        city:"Wonderland",
        feelsLike:24.84,
        temp:25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather:"haze",
    });

    let updateInfo=(result)=>{
      setWeatherInfo(result);
    };

  return(<div>
    <h2>Weather App:</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
  </div>)
}