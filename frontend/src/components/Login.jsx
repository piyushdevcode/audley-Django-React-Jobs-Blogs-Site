import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import axios from 'axios';
import {API_URL} from "../constants";
import "./login.css"
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
    };
    this.handleOnChange= this.handleOnChange.bind(this);
  }
  handleLoginSubmit= (event)=>{
    const {email,password} = this.state;
    event.preventDefault();
    console.log(email," - ",password);
    // axios.post(`${API_URL}/user/login/`).then(()={}).catch((err)=>{})

  }
  handleOnChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log('br');
  }
  render() {
    return (
      <div className="LoginPage">
        <div className="LoginForm ">
          <h1>LOGIN</h1>
          <form method="post" onSubmit={this.handleLoginSubmit}>
            <p>
              Email ID
              <PersonIcon fontSize="small" />
            </p>
            <input name="email"type="text" placeholder="Enter Email ID" onChange={this.handleOnChange} required />
            <p>
              Password
              <LockIcon fontSize="small" />
            </p>
            <input name="password" type="password" placeholder="Enter Password" onChange={this.handleOnChange} autoComplete="on"  required/>
            <input type="submit" value="Login" />
            <a href="#">Lost your password?</a>
            <br />
            <a href="#">Don't have an account?</a>
          </form>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Login";
  }
  componentWillUnmount(){
    
    document.title = "Audley";
  }
}
