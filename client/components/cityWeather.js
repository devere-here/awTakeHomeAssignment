import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {connect} from 'react-redux'
import appId from '../../secrets'
import { Link } from 'react-router-dom'
import { getWind, getPrecipitation, getMainWeather } from '../store'

import '../style/cityWeather.css'

/**
 * COMPONENT
 */
class CityWeather extends Component{
  state = {
    scale: '°F',
    currentTemp: 98.6,
    minTemp: 32,
    maxTemp: 212,
    windDirection: 'N'
  }

  componentDidMount(){
    this.makeApiCall()
  }

  makeApiCall = async () => {

    let city = this.props.match.params.city,
      res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${appId}`)

    this.syncStore(res.data)
    this.setState({
      scale: '°F',
      minTemp: res.data.main.temp_min,
      maxTemp: res.data.main.temp_max,
      currentTemp: res.data.main.temp
    })
  }

  syncStore = (data) => {
    let {setWindData, setPrecipitationData, setMainWeatherData} = this.props

    setWindData(data.wind)
    setPrecipitationData(data.weather[0].main)
    setMainWeatherData(data.main)
  }


  convertTemperature = () => {
    if (this.state.scale === '°C'){
      this.setState({
        scale: '°F',
        minTemp: (this.state.minTemp * 1.8 + 32).toFixed(1),
        maxTemp: (this.state.maxTemp * 1.8 + 32).toFixed(1),
        currentTemp: (this.state.currentTemp * 1.8 + 32).toFixed(1)
      })
    } else {
      this.setState({
        scale: '°C',
        minTemp: ((this.state.minTemp - 32) / 1.8).toFixed(1),
        maxTemp: ((this.state.maxTemp - 32) / 1.8).toFixed(1),
        currentTemp: ((this.state.currentTemp - 32) / 1.8).toFixed(1)
      })
    }
  }


  render = () => {
    let city = this.props.match.params.city

    return (
      <div id="cityWeatherContainer">
        <div id="weatherBoard">
          <h1 id="cityHeader">{city}</h1>
          <div className="weatherFlexBox">
            <div className="weatherAttrDisplay">
              <h2>Min Temperature</h2>
              <h1>{`${this.state.minTemp} ${this.state.scale}`}</h1>
            </div>
            <div className="weatherAttrDisplay">
              <h2>Current Temperature</h2>
              <h1>{`${this.state.currentTemp} ${this.state.scale}`}</h1>
            </div>
            <div className="weatherAttrDisplay">
              <h2>Max Temperature</h2>
              <h1>{`${this.state.maxTemp} ${this.state.scale}`}</h1>
            </div>
          </div>
          <div className="weatherFlexBox">
            <div className="weatherAttrDisplay">
              <h2>Pressure</h2>
              <h1>{`${this.props.mainWeather.pressure} mb`}</h1>
            </div>
            <div className="weatherAttrDisplay">
              <h2>Humidity</h2>
              <h1>{`${this.props.mainWeather.humidity}%`}</h1>
            </div>
            <div className="weatherAttrDisplay">
              <h2>Wind</h2>
              <h1>{this.props.wind.speed} {this.state.windDirection}</h1>
            </div>
          </div>
          <div className="buttonFlexBox">
            <button type="button" onClick={this.convertTemperature}>Toggle Temperature Scale</button>
            <button type="button"><Link to="/">Return to Home Screen</Link></button>
          </div>
        </div>
      </div>
    )
  }

}

/**
 * CONTAINER
 */
const mapState = ({ wind, precipitation, mainWeather }) => {
  return {
    wind,
    precipitation,
    mainWeather
  }
}

const mapDispatch = dispatch => ({
  setWindData: (windData) => {
    dispatch(getWind(windData))
  },
  setPrecipitationData: (precipitation) => {
    dispatch(getPrecipitation(precipitation))
  },
  setMainWeatherData: (mainWeather) => {
    dispatch(getMainWeather(mainWeather))
  }

})

export default connect(mapState, mapDispatch)(CityWeather)

/**
 * PROP TYPES
 */
CityWeather.propTypes = {
}
