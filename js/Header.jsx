import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'

// ES6 class syntax - the way react is going for standardisation
class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = (
        <form onSubmit={this.props.handleSearchTermSubmit}>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search…' />
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
  dispatch: func,
  handleSearchTermSubmit: func,
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
