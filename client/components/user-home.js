import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = ({ cities }) => {

  return (

    <div>
      {cities.length < 1
        ? null
        : cities.map(city => <div key={city}><h3>{city}</h3></div>)
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
