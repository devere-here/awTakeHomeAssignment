import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {CityWeather, UserHome} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {

  render() {

    return (
      <Switch>
        <Route path='/cityWeather' component={CityWeather} />
        <Route component={UserHome} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))


