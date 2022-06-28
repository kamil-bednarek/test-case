import React, { Component } from 'react';
import _ from 'lodash';
import Card from './card';
import axios from 'axios';

export default class details extends Component {
  constructor(){
    super();
    this.state = {
      users:[],
      current_page: 1,
      total_pages:""
    }
    this.url = 'https://reqres.in/api/users/?page='
    this.headers = {
      'content-type': 'application/json',
      'accept': 'application/json',
    };

    this.options = {
      headers: this.headers,
      timeout: 5000,
    };
  }
  users = {};

  getData(){
    axios.get(this.url+this.state.current_page,this.options)
    .then(result => {
      let data = result.data;
      let users = this.state.users;
      Object.keys(data.data).map((k,i) => {
          users.push(data.data[k]);
          return data.data[k];
      });
      this.setState({users:users});
      this.setState({total_pages: data.total_pages});

      while(this.state.current_page <= this.state.total_pages) {
        this.setState({current_page: this.state.current_page+1});
        this.getData();
      }
    });
  }

  componentDidMount() {
    this.getData();
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  renderUserCard(){
    return _.map(this.state.users, user => {
        return(
          <Card key={user.last_name} user={user} />
        )
    });
  }

  isCollectionFetched(){
    return this.state.users.length > 0;
  }
  render() {
    return (
        <ul className="collection">
          {this.isCollectionFetched() && this.renderUserCard()}
        </ul>
    );
  }
}
