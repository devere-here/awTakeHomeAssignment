import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/mainPage.css'

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
          : cities.map(city => <Link key={city} className={city.replace(' ', '')} to={`/cityWeather/${city}`}><div className="cityCircle">{city}</div></Link>)
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
