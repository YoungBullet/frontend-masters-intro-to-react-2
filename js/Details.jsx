import React from 'react'
import axios from 'axios'
import Header from './Header'
const { shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string.isRequired,
      description: string.isRequired,
      year: string.isRequired,
      poster: string.isRequired,
      trailer: string.isRequired,
      imdbID: string.isRequired
    })
  },
  getInitialState () {
    return {
      omdbData: {}
    }
  },
  componentDidMount () {
    axios.get(`https://www.omdbapi.com/?i=${this.props.show.imdbID}`)
      .then(response => {
        this.setState({omdbData: response.data})
      })
      .catch(error => console.error('Axios Error:', error))
  },
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    // console.log(this.state.omdbData)
    const rating = this.state.omdbData.imdbRating ? <h3>{this.state.omdbData.imdbRating}</h3> : <img src='/img/loading.png' alt='Loading' />
    const actors = this.state.omdbData.Actors ? <p>{this.state.omdbData.Actors}</p> : <img src='/img/loading.png' alt='Loading' />
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/img/posters/${poster}`} />
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

//* Stateless functional components - just a render method
// const Details = (props) => {
//   return <h1>{props.params.id}</h1>
// }

export default Details
