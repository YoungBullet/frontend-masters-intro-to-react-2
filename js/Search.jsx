import React from 'react'
import { Link } from 'react-router'
import ShowCard from './ShowCard'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermSubmit (event) {
    event.preventDefault()
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1><Link to='/'>Nutflix:</Link> {this.state.searchTerm}</h1>
          <form onSubmit={this.handleSearchTermSubmit}>
            <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search…' />
          </form>
        </header>
        <div>
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })
          }
        </div>
      </div>
    )
  }
})

export default Search
