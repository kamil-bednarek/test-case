import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoginStatus from './../auth/loginStatus';


export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/listing">Listing</NavLink>
          </li>
        </ul>
        <ul className='right'>
          <li>
            <LoginStatus />
          </li>
        </ul>
      </nav>
    );
  }
}
