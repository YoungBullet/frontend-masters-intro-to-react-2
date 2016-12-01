import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Nutflix</h1>
        <input type='text' placeholder='Search…' />
        <a>Or browse all</a>
      </div>
    )
  }
})

export default Landing
