import { SET_SEARCH_TERM, SET_OMDB_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function setOMDBData (imdbID, omdbData) {
  return { type: SET_OMDB_DATA, imdbID, omdbData }
}

export function getOMDBDetails (imdbID) {
  // not using getState - but it passes state from redux if it needs altering here.
  return function (dispatch, getState) {
    axios.get(`https://www.omdbapi.com/?i=${imdbID}`)
      .then(response => {
        dispatch(setOMDBData(imdbID, response.data))
      })
      .catch(error => console.error('Axios Error:', error))
  }
}
