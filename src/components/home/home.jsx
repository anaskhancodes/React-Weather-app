import axios from 'axios';
import { useRef, useState } from 'react';
import WeatherCard from '../weatherwidget/weatherwidget';
import './home.css'

const Home = () => {

    const cityNameRef = useRef(null);

    const [weatherData, setWeatherData] = useState([])

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log("CityName=>", cityNameRef.current.value);

        let API_KEY = "8d8204de6eb81ffd6a1ae233700f6fd9";


        // if(weatherData === 'Clear'){
        //     console.log("eoeoeoeo")
        // }

        try {

            const response = await axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${API_KEY}&units=metric`)

            // handle success 
            console.log(response.data); {
                setWeatherData([response.data,...weatherData])
            }

        } catch (error) {
            // handle error
            console.log(error.data);
        }

    }


    /////// JSX front-end

    return (

        <div>
            <form className='inputBox' onSubmit={submitHandler}>
                <label htmlFor="CityNameInput">City Name</label>
                <input className='input' type="search" name="" id="CityNameInput" required maxLength={20} minLength={5} ref={cityNameRef} />
                <br />
                <button type="submit">Get Weather</button>
            </form>


            {(weatherData.length) ? (

                weatherData.map(eachWatherData => {
                   return <WeatherCard weatherData={eachWatherData} />
                })

            ) : (
                <div className='no-data'></div>
            )}



        </div>
    );
}

export default Home