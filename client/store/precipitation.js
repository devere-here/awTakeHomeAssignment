/**
 * ACTION TYPES
 */
const GET_PRECIPITATION = 'GET_PRECIPITATION'

/**
 * INITIAL STATE
 */
const defaultPrecipitation = 'Clear'

/**
 * ACTION CREATORS
 */
export const getPrecipitation = precipitation => ({type: GET_PRECIPITATION, precipitation})


/**
 * REDUCER
 */
export default function(state = defaultPrecipitation, action) {
  switch (action.type) {
    case GET_PRECIPITATION:
      return action.precipitation
    default:
      return state
  }
}
