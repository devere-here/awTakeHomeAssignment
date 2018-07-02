import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {connect} from 'react-redux'
import appId from '../../secrets'
import { getWind, getPrecipitation, getMainWeather } from '../store'

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
      <div>
        <h1>{city}</h1>
        <ul>
          <li>Min Temperature: {`${this.state.minTemp} ${this.state.scale}`}</li>
          <li>Max Temperature: {`${this.state.maxTemp} ${this.state.scale}`}</li>
          <li>Current Temperature: {`${this.state.currentTemp} ${this.state.scale}`}</li>
          <li>Pressure: {`${this.props.mainWeather.pressure} mb`}</li>
          <li>Humidity: {`${this.props.mainWeather.humidity}%`}</li>
          <li>Wind: {this.props.wind.speed} {this.state.windDirection}</li>
        </ul>
        <button type="button" onClick={this.convertTemperature}>Toggle Temperature Scale</button>
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
