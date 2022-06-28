import React, { Component } from 'react';
import List from '../components/user/list';


export default class Listing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="section">
              <h3 className="header">User listing</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <List />
        </div>
      </div>
    );
  }
}