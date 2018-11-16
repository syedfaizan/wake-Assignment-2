import React, { Component } from "react";
import request from '../../utils/request';
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
    let user = {};
    user.email = this.state.email;
    user.password = this.state.password;
    request.get('/users', { params: user})
      .then( response => {
        if(response.data && response.data.length){
          let creds = response.data && response.data[0];
          if( creds.email === this.state.email && creds.password === this.state.password && creds.isAdmin ){
            this.props.history.push('/dashboard');
            localStorage.setItem('user', JSON.stringify(creds));
        }} else {
          alert("Credentials are wrong!")
        }
      })
      .catch( err=>{
        alert("Error occured, try again");
        console.error(err);

      })
  }

  render() {
    return (
      <div className="container">
        <div className="card card-container">
            <img id="profile-img" className="img-thumbnail" alt="profile avatar" src="wakecap.png"/>
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