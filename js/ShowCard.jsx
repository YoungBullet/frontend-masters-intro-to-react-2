import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    imdbID: string.isRequired
  },

  render () {
    const { poster, title, year, description, imdbID } = this.props
    return (
      <div className='show-card'>
        <img src={`img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
          <p><Link to={`/details/${imdbID}`}>imdbID: {imdbID}</Link></p>
        </div>
      </div>
    )
  }
})

export default ShowCard
