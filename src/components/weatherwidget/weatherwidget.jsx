import './weatherwidget.css'
import { PersonFill } from 'react-bootstrap-icons';


const WeatherCard = ({ weatherData }) => {

    return (

        <div className='weatherCard'>

            <h1>{Math.round(weatherData?.main?.temp)}<span>°C | °F</span></h1>
            <br />
            <h3 className='country-name'>{weatherData?.name}</h3>
            {' '}
            <h3 className='country'>{weatherData?.sys?.country}</h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h3 className='weather-name'>: {weatherData?.weather[0]?.description} :</h3>
            <div className='things'>
                <hr />
                <h2 className='wind'>Wind:</h2> <h3>{weatherData?.wind?.speed}</h3>  
                <h2 className='humidity'> Humidity:</h2> <h3>{weatherData?.main?.humidity}</h3>
            </div>

        </div>
    )

}


export default WeatherCard;
