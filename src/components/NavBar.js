import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar justify-content-between navbar-expand-sm navbar-light bg-light">
        <NavLink id='logo' className='navbar-brand' exact to='/'>
          <img src="./img/big-eCommerce.png" alt="logo" />
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item mt-1">
            <NavLink className='nav-link' exact to='/'>
              Product List
            </NavLink>
          </li>
          <li className="nav-item mt-1">
            <NavLink className='nav-link' to='/details'>
              Details
            </NavLink>
          </li>
          <li className="nav-item shopping-cart-link">
            <NavLink className='nav-link' to='/cart'>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                <i className="fa fa-shopping-cart"></i> Cart
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
