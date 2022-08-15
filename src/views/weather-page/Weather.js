import React, { useState } from "react";
import { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Weather = () => {
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState("Riverside");
    const [cityName, setCityName] = useState("");

    useEffect(() => {
        async function fetchData() {
            await fetch(
                `https://api.openweathermap.org/data/2.5/weather?%7Bq%7D=&%7Bappid%7D=&q=${city}&appid=${process.env.REACT_APP_API_KEY}`
            )
                .then(handleError)
                .then((response) => response.json())
                .then((payload) => setWeatherData(payload))
                .catch((err) => console.error(err));
        }
        fetchData();
    }, [city]);

    const kelvinToFarenheight = (tempInKelvin) => {
        return Math.round(((tempInKelvin - 273.15) * 9) / 5 + 32);
    };

    const handleChange = (e) => {
        setCityName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(cityName);
    };

    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",        },
      },
    },
  }));

  const getWeatherBg = () => {
    if (weatherData !== undefined) {
      const weatherDescription = weatherData.weather[0].main;
      switch (weatherDescription) {
        case "Clear":
          return "sunny";
        case "Thunderstorm":
          return "thunderstorm";
        case "Rain":
          return "rain";
        case "Drizzle":
          return "lightrain";
        case "Snow":
          return "snow";
        case "Clouds":
          return "cloudy";
        default:
          return "bg-white";
      }
    }
    function handleError (response) {
        if(!response.ok) {
           throw alert("enter valid city")     
        } 
        return response
    }

    return (
        <div id="weather" className={`h-screen ${getWeatherBg()}`}>


            {
                weatherData === undefined ?
                    (<div>Loading</div>) :
                    (

                        <form onSubmit={handleSubmit} key="formField">

                            <h1 className='justify-center flex text-4xl'>Weather</h1>
                            <div className='grid' >
                                <Card variant="outlined" className='h-fit w-[38rem] sm:w-96'
                                >
                                    <CardContent>
                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                                value={cityName}
                                                key="cityValue"
                                                name="city"
                                                onChange={handleChange}
                                                autoFocus
                                                required
                                            />
                                        </Search>
                                        <div className='flex flex-nowrap text-2xl justify-center'>
                                            <ul>
                                                <li className='mb-2 mt-8'>{weatherData.name} Weather <img className='inline' alt='weather icon' src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png `} /></li>
                                                <li className='mb-2' >Current Temp: {kelvinToFarenheight(weatherData.main.temp)} &#8457;</li>
                                                <li className='mb-2' >Current Humidity: {weatherData.main.humidity}%</li>
                                                <li className='mb-2'>Description: {weatherData.weather[0].description} </li>

                                            </ul>
                                        </div>
                                    </CardContent>
                                    <CardActions className='mt-20 justify-center flex'>
                                        <Button size="medium" variant='outlined' type="submit">Search</Button>
                                    </CardActions>

                                </Card>
                            </div>
                        </form>



                    )
            }


        </div>
    )
}

export default Weather
