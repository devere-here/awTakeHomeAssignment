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
  constructor(props){
    super(props)
    this.getData()
  }

  getData = () => {

    let city = this.props.match.params.city

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appId}`)
    .then(data => {
      console.log('the data is', data.data)
      this.props.setWindData(data.data.wind)
      this.props.setPrecipitationData(data.data.weather[0].main)
      this.props.setMainWeatherData(data.data.main)
    })

  }

  render = () => (
    <div>
      <h1>In City Weather</h1>
      {!this.props.wind
        ? <h1>Nope</h1>
        : <h1>{this.props.wind.speed}</h1>}
        {!this.props.precipitation
          ? <h1>Nope</h1>
          : <h1>{this.props.precipitation}</h1>}
    </div>
  )

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
    console.log('in setWindData')
    dispatch(getWind(windData))
  },
  setPrecipitationData: (precipitation) => {
    console.log('in setPrecipitationData')
    dispatch(getPrecipitation(precipitation))
  },
  setMainWeatherData: (mainWeather) => {
    console.log('in mainWeather', mainWeather)
    dispatch(getMainWeather(mainWeather))
  }

})

export default connect(mapState, mapDispatch)(CityWeather)

/**
 * PROP TYPES
 */
CityWeather.propTypes = {
}
