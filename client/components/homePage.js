import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/mainPage.css'

/**
 * COMPONENT
 */
export const HomePage = ({ cities }) => {

  return (
    <div id="container">
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
