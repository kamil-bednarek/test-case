import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="section">
                <h3 className="header">Homepage</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <p>
              Welcome to my test app. You cen either use the link below or use the navbar at the top.<br></br>To enter details about users you need to log in in the top right corner
            </p>
            <Link to={"/listing"}>Listing</Link>
          </div>
        </div>
      </div>
    );
  }
}