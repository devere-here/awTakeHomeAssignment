import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const CityWeather = () => {

  return (
    <div>
      <h1>In City Weather</h1>
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

export default connect(mapState)(CityWeather)

/**
 * PROP TYPES
 */
CityWeather.propTypes = {
}
