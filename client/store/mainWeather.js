/**
 * ACTION TYPES
 */
const GET_MAIN_WEATHER = 'GET_MAIN_WEATHER'

/**
 * INITIAL STATE
 */
const defaultMainWeather = {
  "temp": 300,
  "pressure": 1000,
  "humidity": 30,
  "temp_min": 295,
  "temp_max": 305
}

/**
 * ACTION CREATORS
 */
export const getMainWeather = mainWeather => ({type: GET_MAIN_WEATHER, mainWeather})


/**
 * REDUCER
 */
export default function(state = defaultMainWeather, action) {
  switch (action.type) {
    case GET_MAIN_WEATHER:
      return action.mainWeather
    default:
      return state
  }
}
