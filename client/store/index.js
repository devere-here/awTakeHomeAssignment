import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import cities from './cities'
import mainWeather from './mainWeather'
import precipitation from './precipitation'
import wind from './wind'


const reducer = combineReducers({cities, mainWeather, precipitation, wind})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './cities'
export * from './mainWeather'
export * from './precipitation'
export * from './wind'

