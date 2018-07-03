import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/mainPage.css'
import jQuery from 'jquery'

/**
 * COMPONENT
 */
export const HomePage = ({ cities }) => {

  return (
    <div id="container">
      <div id="titleDivContainer">
        <div id="titleDiv">
          <h1>Five City Weather Map</h1>
          <h2>Check the weather for any of the cities listed</h2>
        </div>
      </div>
      <div id="cityCircleContainer">
        {cities.length < 1
          ? null
          : cities.map(city => <div key={city} className={`cityCircle ${city.replace(' ', '')}`}><Link to={`/cityWeather/${city}`}>{city}</Link></div>)
        }

        <div id="backgroundImage" />
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = ({ cities }) => {
  return {
    cities
  }
}

export default connect(mapState)(HomePage)

/**
 * PROP TYPES
 */
HomePage.propTypes = {
  cities: PropTypes.array
}
