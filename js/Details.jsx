import React from 'react'
import { connect } from 'react-redux'
import { getOMDBDetails } from './actionCreators'
import Header from './Header'
const { shape, string, func } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string.isRequired,
      description: string.isRequired,
      year: string.isRequired,
      poster: string.isRequired,
      trailer: string.isRequired,
      imdbID: string.isRequired
    }),
    omdbData: shape({
      imdbID: string
    }),
    dispatch: func
  },

  componentDidMount () {
    if (!this.props.omdbData.imdbRating) { // if we don't ave it, go get it.
      this.props.dispatch(getOMDBDetails(this.props.show.imdbID))
    }
  },
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    // console.log(this.state.omdbData)
    const rating = this.props.omdbData.imdbRating ? <h3>{this.props.omdbData.imdbRating}</h3> : <img src='/public/img/loading.png' alt='Loading' />
    const actors = this.props.omdbData.Actors ? <p>{this.props.omdbData.Actors}</p> : <img src='/public/img/loading.png' alt='Loading' />
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
          {actors}
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => { // inlcude props of react component (we need imdbID)
  return {
    omdbData: state.omdbData[ownProps.show.imdbID] ? state.omdbData[ownProps.show.imdbID] : {}
  }
}

export default connect(mapStateToProps)(Details)
