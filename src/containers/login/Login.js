import React, { Component } from "react";
import axios from 'axios';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  authenticate = (event) => {
    event.preventDefault();
    axios.get('/credentials.json')
      .then( response => {
        let creds = response.data;

        if( creds.email === this.state.email && creds.password === this.state.password ){
          this.props.history.push('/dashboard');
        }
      })
  }

  render() {
    return (
      <div className="container">
        <div className="card card-container">
            <img id="profile-img" className="profile-img-card" alt="profile avatar" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={this.authenticate.bind(this)}>
                <input type="email" id="email" className="form-control" placeholder="Email address" required autoFocus onChange={this.handleChange.bind(this)}></input>
                <input type="password" id="password" className="form-control" placeholder="Password" required onChange={this.handleChange.bind(this)}></input>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Sign in</button>
            </form>
        </div>
    </div>
    );
  }
}