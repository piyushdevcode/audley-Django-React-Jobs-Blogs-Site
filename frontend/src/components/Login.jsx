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
      username:"",
      password:"",
      isAuthorized: false,
      errors: {},
    };
    // to show without arrow function 
    this.handleOnChange= this.handleOnChange.bind(this);
  }
  handleLoginSubmit= (event)=>{
    event.preventDefault();
    const {username,password} = this.state;
    const payload = {username, password};

    console.log(username," - ",password);

    const onSuccess = ({data})=>{
      // setClientToken(data.token);
      this.setState({isAuthorized: true});
      console.log(`Token : ${data.token}`);
    }

    const onFailure = error=>{
      console.log(error && error.response);
      this.setState({errors: error.response.data});
    };
    axios.post(`${API_URL}/user/login`,payload).then(onSuccess).catch(onFailure);

  }
  handleOnChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div className="LoginPage">
        <div className="LoginForm ">
          <h1>LOGIN</h1>
          <form method="post" onSubmit={this.handleLoginSubmit}>
            <p>
              Username
              <PersonIcon fontSize="small" />
            </p>
            <input name="username"type="text" placeholder="Enter username" onChange={this.handleOnChange} required />
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
