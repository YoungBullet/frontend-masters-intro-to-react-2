import React from 'react'
import { connect } from 'react-redux' // injects dispatch as well
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'
const { func, string, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search') // programatically navigate with react-router
  },
  clearState () {
    this.props.dispatchSetSearchTerm('')
  },
  render () {
    return (
      <div className='landing'>
        <h1>Nutflix</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTermChange} type='text' value={this.props.searchTerm} placeholder='Search…' />
        </form>
        <Link to='/search' onClick={this.clearState}>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

// alt way of abstracting dispatch of redux actions
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing) // passed in from redux via connect
