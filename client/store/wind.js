/**
 * ACTION TYPES
 */
const GET_WIND = 'GET_WIND'

/**
 * INITIAL STATE
 */
const defaultWind = {
  "speed": 5,
  "deg": 150,
  "gust": 10
}


/**
 * ACTION CREATORS
 */
export const getWind = wind => ({type: GET_WIND, wind})


/**
 * REDUCER
 */
export default function(state = defaultWind, action) {
  switch (action.type) {
    case GET_WIND:
      return action.wind
    default:
      return state
  }
}
