import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render () {
    return (
      <div>
        <MyTitle title='props are the best' colour='rebeccapurple' />
        <MyTitle title='semicolons are the worst' colour='hotpink' />
        <MyTitle title='I really need a pee' colour='peachpuff' />
        <MyTitle title='Imelda and her keys' colour='dodgerblue' />
        <MyTitle title='What a bottlenose chump' colour='wheat' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
