import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
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
          <h1>Nutflix: {this.state.searchTerm}</h1>
          <form onSubmit={this.handleSearchTermSubmit}>
            <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search…' />
          </form>
        </header>
        <div>
          {preload.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => {
            return (
              <ShowCard key={show.imdbID} {...show} />
            )
          })}
        </div>
      </div>
    )
  }
})

export default Search
