import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About React</NavLink></li>
          <li><NavLink to="/repos">Repos React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
