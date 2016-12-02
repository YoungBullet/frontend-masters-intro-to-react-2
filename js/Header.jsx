import React from 'react'
import { Link } from 'react-router'

// ES6 class syntax - the way react is going for standardisation
class Header extends React.Component {
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = (
        <form onSubmit={this.props.handleSearchTermSubmit}>
          <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search…' />
        </form>
      )
    } else {
      utilSpace = (
        <h2>
          <Link to='/search/'>◄ Back to Search</Link>
        </h2>
      )
    }
    return (
      <header>
        <h1><Link to='/'>Nutflix</Link></h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  handleSearchTermSubmit: func,
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
