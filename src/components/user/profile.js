import React, { Component } from 'react';
import _ from 'lodash';
import Card from './detailedCard';
import axios from 'axios';
import { withParams } from "../../decorator/router/exportWithParams";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    }
    this.url = 'https://reqres.in/api/users/' + props.params.user
    this.headers = {
      'content-type': 'application/json',
      'accept': 'application/json',
    };

    this.options = {
      headers: this.headers,
      timeout: 5000,
    };
  }

  getData() {
    axios.get(this.url, this.options)
      .then(result => {
        let data = result.data.data;
        console.log(data);
        this.setState({ user: data });
      });
  }

  componentDidMount() {
    this.getData();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  renderUserCard() {
    return (
      <Card key={this.state.user.last_name} user={this.state.user} />
    )
  };

  isUserFetched() {
    return this.state.user ? true : false;
  }

  render() {
    return (
      <div className="row">
        <div className="col s4 offset-s4">
          {this.isUserFetched() && this.renderUserCard()}
        </div>
      </div>
    );
  }
}
export default withParams(Profile);