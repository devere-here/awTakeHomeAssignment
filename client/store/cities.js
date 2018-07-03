/**
 * ACTION TYPES
 */
const GET_CITIES = 'GET_CITIES'

/**
 * INITIAL STATE
 */
const defaultCities = ['New York', 'Miami', 'New Orleans', 'Los Angeles', 'San Francisco']

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
