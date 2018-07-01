import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = ({ cities }) => {

  return (
    <div>
      {cities.length < 1
        ? null
        : cities.map(city => <div key={city}><Link to={`/cityWeather/${city}`}>{city}</Link></div>)
      }
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  cities: PropTypes.array
}
