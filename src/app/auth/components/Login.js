import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';

import {inject, observer} from "mobx-react";

@inject("authState")
@observer
export default class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
       
        username: '',
        password: '',

        error: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e, history) {
    e.preventDefault();
    const { username, password } = this.state;
    //FIXME: add the redirct after user logged in
    this.props.authState.login(username, password)
    .then ( () => {
        this.props.history.push("/");
    })
    .catch ( () => {
        //Show error
        this.setState({
            error: 'invalid username or password'
        })
    })
  }

  onChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const {   username, password  } = this.state;
   

    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={(e)=>this.onSubmit(e)}>
            User Name
            <input
              name="username"
              value={username}
               
              type="text"
              onChange={this.onChange}
            />

            Password
            <input
              name="password"
              value={password}
              
              type="password"
              onChange={this.onChange}
            />
            
            
            <button type="submit">Login</button>

            {this.state.error && <p> {this.state.error} </p>}
        </form>
         
      </div>
    );
  }
}
 