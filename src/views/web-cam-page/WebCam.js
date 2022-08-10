import React from 'react'

const WebCam = () => {
    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?%7Bq%7D=&%7Bappid%7D=&q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
                .then(response => response.json())
                .then((payload) => setWeatherData(payload))
                .catch(err => console.error(err))
        }
        fetchData()
    }, [city])
  return (
    <div>
        
    </div>
  )
}

export default WebCam



/api/webcams/v2/list/nearby=46.54,7.98,5?show=webcams:location,image
/api/webcams/v2/list/webcam={webcamid}[,{webcamid}...]
