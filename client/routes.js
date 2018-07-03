import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {CityWeather, HomePage} from './components'

const Routes = () => (
  <Switch>
    <Route path='/cityWeather/:city' component={CityWeather} />
    <Route component={HomePage} />
  </Switch>
)

export default withRouter(Routes)
