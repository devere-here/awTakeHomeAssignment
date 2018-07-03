import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/weatherBoard.css'

/**
 * COMPONENT
 */
export const WeatherBoard = props => (

    <div id="weatherBoard">
      <h1 id="cityHeader">{props.city}</h1>
      <h1>{`Current Forcast: ${props.precipitation}`}</h1>
      <div className="weatherFlexBox">
        <div className="weatherAttrDisplay">
          <h2>Min Temperature</h2>
          <h1>{`${props.state.minTemp} ${props.state.scale}`}</h1>
        </div>
        <div className="weatherAttrDisplay">
          <h2>Current Temperature</h2>
          <h1>{`${props.state.currentTemp} ${props.state.scale}`}</h1>
        </div>
        <div className="weatherAttrDisplay">
          <h2>Max Temperature</h2>
          <h1>{`${props.state.maxTemp} ${props.state.scale}`}</h1>
        </div>
      </div>
      <div className="weatherFlexBox">
        <div className="weatherAttrDisplay">
          <h2>Pressure</h2>
          <h1>{`${props.mainWeather.pressure} mb`}</h1>
        </div>
        <div className="weatherAttrDisplay">
          <h2>Humidity</h2>
          <h1>{`${props.mainWeather.humidity}%`}</h1>
        </div>
        <div className="weatherAttrDisplay">
          <h2>Wind</h2>
          <h1>{`${props.wind.speed} mph`}</h1>
        </div>
      </div>
      <div className="buttonFlexBox">
        <button type="button" onClick={props.convertTemperature}>Toggle Temperature Scale</button>
        <button type="button"><Link to="/">Return to Home Screen</Link></button>
      </div>
  </div>

)

/**
 * CONTAINER
 */
const mapState = ({ wind, mainWeather, precipitation }) => {
  return {
    wind,
    mainWeather,
    precipitation
  }
}

export default connect(mapState)(WeatherBoard)
