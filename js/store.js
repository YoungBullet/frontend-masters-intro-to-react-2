import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk), // redux can listen to functions as well as actions with this.
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : (f) => f
))

export default store
