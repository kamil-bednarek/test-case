import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

export default class DetailedCard extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className="card ">
        <div className="card-image responsive-img">
          <div className='overlaygrad'>
            <LazyLoad height={200}>
              <img className="grad" src={this.props.user.avatar}></img>
            </LazyLoad>
          </div>
          <span className="card-title">{this.props.user.last_name} {this.props.user.first_name}</span>
        </div>
        <div className="card-action">
          <a href={"mailto:" + this.props.user.email}>E-mail</a>
        </div>
      </div>
    );

  }
}