import React from 'react'

var MyTitle = React.createClass({
  render () {
    return (
      <div> {/*Compiles to – React.createElement('div', null, …)*/}
        <h1 style={{color: this.props.colour}}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle
