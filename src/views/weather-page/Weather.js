import React, { useState } from 'react'
import { useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Weather = () => {
    const [weatherData, setWeatherData] = useState()

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?%7Bq%7D=&%7Bappid%7D=&q=San%20Diego&appid=${process.env.REACT_APP_API_KEY}`)
                .then(response => response.json())
                .then((payload) => setWeatherData(payload))
                .catch(err => console.error(err))
        }
        fetchData()
    }, [])

    const kelvinToFarenheight = tempInKelvin => {
        return Math.round((tempInKelvin - 273.15) * 9 / 5 + 32)
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


    return (
        <div className='h-screen'>
            {
                weatherData === undefined ?
                    (<div>Loading</div>) :
                    (
                        <>
                            <h1 className='mt-20 justify-center flex text-4xl'>Weather</h1>
                            <div className='grid h-screen place-items-center' >
                                <Card variant="outlined" sx={{ width: 600, height: 'fit-content' }}>
                                    <CardContent>
                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </Search>
                                        <div className='flex flex-nowrap text-2xl justify-center'>
                                            <ul>
                                                <li className='mb-2 mt-8'>{weatherData.name} Weather</li>
                                                <li className='mb-2' >Current Temp: {kelvinToFarenheight(weatherData.main.temp)} &#8457;</li>
                                                <li className='mb-2' >Current Humidity: {weatherData.main.humidity}%</li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                    <CardActions className='mt-20 justify-center flex'>
                                        <Button size="medium" variant='outlined'>Search</Button>
                                    </CardActions>

                                </Card>
                            </div>
                        </>


                    )
            }


        </div>
    )
}

export default Weather

