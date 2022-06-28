import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {

  constructor() {
    super()
    this.state = { blink: false }
  }

  render() {
    return (
        <Link to={`/details/${this.props.user.id}`} className="collection-item blue-text">
          {this.props.user.last_name} {this.props.user.first_name}
        </Link>
    );

  }
}
