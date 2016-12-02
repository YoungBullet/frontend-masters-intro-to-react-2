import { SET_SEARCH_TERM, SET_OMDB_DATA } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {} // where we'll store returned data
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { searchTerm: action.searchTerm })
  return newState
}

// all state is passed in - edit your bit of data and then return everything back
const setOMDBData = (state, action) => {
  // merge in new imdb data
  const newOmdbData = {}
  Object.assign(newOmdbData, state.omdbData, {[action.imdbID]: action.omdbData})
  // merge it into all state
  const newState = {}
  Object.assign(newState, state, {omdbData: newOmdbData})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => { // using a default param instead of: state = state || DEFAULT_STATE
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case SET_OMDB_DATA:
      return setOMDBData(state, action)
    default:
      return state // nothing changed, return current state
  }
}

export default rootReducer
