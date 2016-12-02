import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
const { string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string
  },
  render () {
    return (
      <div className='landing'>
        <h1>Nutflix</h1>
        <input type='text' value={this.props.searchTerm} placeholder='Search…' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing) // passed in from redux via connect
