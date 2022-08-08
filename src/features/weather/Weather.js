import React, { useState } from 'react'
import { useEffect } from "react";
import Button from '@mui/material/Button';
import { Card } from '@mui/material';



const Weather = () => {
    const [weatherData, setWeatherData] = useState()

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?%7Bq%7D=&%7Bappid%7D=&q=San%20Diego&appid=${process.env.REACT_APP_API_KEY}`)
                .then(response => response.json())
                .then((payload) => setWeatherData(payload))
                .catch(err => console.error(err));
        }
        fetchData()
    }, [])

    const kelvinToFarenheight = tempInKelvin => {
        return Math.round((tempInKelvin - 273.15) * 9 / 5 + 32)
    }

    return (
        <div id="weather">
            {
                weatherData === undefined ?
                    (<div>Loading</div>) :
                    (
                        <Card className='p-8 border-2 shadow-lg'>
                            <h1>Weather</h1>
                            <div>
                                <h2>{weatherData.name} Weather</h2>
                                <ul>
                                    <li>Current Temp: {kelvinToFarenheight(weatherData.main.temp)} &#8457;</li>
                                    <li>Current Humidity: {weatherData.main.humidity}%</li>
                                </ul>
                            </div>
                            <Button variant="contained">Hello World</Button>

                        </Card>

                    )
            }
            

        </div>
    )
}

export default Weather

