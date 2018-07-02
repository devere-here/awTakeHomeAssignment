/**
 * ACTION TYPES
 */
const GET_CITIES = 'GET_CITIES'

/**
 * INITIAL STATE
 */
const defaultCities = ['Boston', 'New York', 'Philadelphia', 'Baltimore', 'Washington']

/**
 * ACTION CREATORS
 */
export const getCities = cities => ({type: GET_CITIES, cities})


/**
 * REDUCER
 */
export default function(state = defaultCities, action) {
  switch (action.type) {
    case GET_CITIES:
      return action.cities
    default:
      return state
  }
}
