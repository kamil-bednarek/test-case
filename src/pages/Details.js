import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/user/profile';

class Details extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="section">
              <h3 className="header">User details</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <Profile />
        </div>
        <div className="row">
          <Link to='/listing'>Go back</Link></div>
      </div>
    );
  }
}

export default Details;