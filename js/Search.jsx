import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import ShowCard from './ShowCard'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),
    searchTerm: string
  },
  handleSearchTermSubmit (event) {
    event.preventDefault()
  },
  render () {
    return (
      <div className='search'>
        <Header
          showSearch
          handleSearchTermSubmit={this.handleSearchTermSubmit}
          />
        <div>
          {this.props.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
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

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
