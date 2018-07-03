import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import appId from '../../secrets'
import { getWind, getPrecipitation, getMainWeather } from '../store'
import WeatherBoard from './weatherBoard'

import '../style/weatherBoard.css'

/**
 * COMPONENT
 */
class CityWeather extends Component{
  state = {
    scale: '°F',
    currentTemp: 98.6,
    minTemp: 32,
    maxTemp: 212,
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
        <WeatherBoard state={this.state} city={city} convertTemperature={() => this.convertTemperature()}/>
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
