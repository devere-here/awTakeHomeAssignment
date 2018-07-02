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

  componentDidMount(){
    this.makeApiCall()
  }

  makeApiCall = async () => {

    let city = this.props.match.params.city,
      res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appId}`)

    this.syncStore(res.data)
  }

  syncStore = (data) => {
    let {setWindData, setPrecipitationData, setMainWeatherData} = this.props

    setWindData(data.wind)
    setPrecipitationData(data.weather[0].main)
    setMainWeatherData(data.main)
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
