import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: ''
}
const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { searchTerm: action.searchTerm })
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => { // using a default param instead of: state = state || DEFAULT_STATE
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state // nothing changed, return current state
  }
}

export default rootReducer
