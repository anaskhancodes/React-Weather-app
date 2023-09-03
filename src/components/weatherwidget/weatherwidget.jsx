import './weatherwidget.css'
import { ArrowRight, ThermometerSun, wind } from 'react-bootstrap-icons';


const WeatherCard = ({ weatherData }) => {

    return (

        <div className='weatherCard'>

            <h1>{Math.round(weatherData?.main?.temp)}<span>°C | °F</span></h1> <h3 className='country-name'>{weatherData?.name}</h3> <h3 className='country'>{weatherData?.sys?.country}</h3>
            <div className='things'>
                <hr />
                <h2 className='wind'>Wind:</h2> <h3>{weatherData?.wind?.speed}</h3>  <h2 className='humidity'>Humidity:</h2> <h3>{weatherData?.main?.humidity}</h3>
                <hr />
                <h2 className='weather'>Weather:</h2> <h3>{weatherData?.weather[0]?.description}</h3>
            </div>

        </div>
    )

}


export default WeatherCard;
