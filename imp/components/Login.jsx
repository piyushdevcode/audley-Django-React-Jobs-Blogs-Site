import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="LoginPage">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="LoginForm ">
          <h1>LOGIN</h1>
          <form method="post">
            <p>
              Email ID
              <PersonIcon fontSize="small" />
            </p>
            <input type="text" placeholder="Enter Email ID" />
            <p>
              Password
              <LockIcon fontSize="small" />
            </p>
            <input type="password" placeholder="Enter Password" />
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
}
