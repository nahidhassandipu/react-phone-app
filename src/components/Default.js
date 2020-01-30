import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Title from "./Title";

export default class Default extends Component {
  render() {
    return (
      <React.Fragment>
        <Title name="404" title="Page not found" />
        <div id='error-page-container'>
          <Link to='/' className="text-3d">404</Link>
          <span className="caption">Click to Return Home</span>
        </div>
      </React.Fragment>
    )
  }
}
