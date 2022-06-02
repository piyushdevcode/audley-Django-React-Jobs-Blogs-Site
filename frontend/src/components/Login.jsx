import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import axios from "axios";
import { API_URL } from "../constants";
import "./login.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function AfterSubmit(props) {
  return (
    <div className="response">
      <div className="overlay center-ele"></div>
      <div className="after-resp center-ele">
        {props.showLogin ? "Login" : "Registeration"} Successful
        <div>
          <CheckCircleOutlineIcon id="submitted-icon" />
        </div>
      </div>
    </div>
  );
}
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      isAuthorized: false,
      errors: {},
      showLogin: true,
      showErr: false,
      showResp: false,
    };
    // to show without arrow function
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleLoginRegSubmit = (event) => {
    event.preventDefault();
    const { username, password, email } = this.state;

    console.log(username, " - ", password);

    if (this.state.showLogin) {
      const payload = { username, password };

      const onSuccess = ({ data }) => {
        let user_id = null;
        this.setState({ isAuthorized: true, showErr: false });
        console.log(`Token : ${data.token}`);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        let axiosConfig = {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization": `Token ${data.token}`,
          }
        };
        console.log(axiosConfig);
        axios.get(`${API_URL}/users/?search=${username}`,axiosConfig).then((resp) => {
          localStorage.setItem("user_id",resp.data[0].id);

        }).catch((err) => {
          console.log("error: ", err);
        })
        axios.get(`${API_URL}/jobsapplied?search=${username}`).then((resp) => {
          console.log("JOb details-",resp.data);
          let jobsdata = resp.data;
          let applied_jobs = [];
          console.log("trimmed: ",jobsdata.slice(),typeof(jobsdata.data))
          if (jobsdata.length){
          for (let i = 0 ; i < jobsdata.length; i++ ){
            let details = jobsdata[i];
              applied_jobs.push(parseInt(details.job))
            }
          }
          console.log("Jobs Appl=",applied_jobs)
    
          localStorage.setItem("jobs_id",JSON.stringify(applied_jobs));
    
        }).catch((err) => {
          console.log("error: ", err);
        })
        
        document.forms["loginReg"].reset();
        this.handleResponse();
      };

      const onFailure = (error) => {
        console.log(error && error.response);
        this.setState({ errors: error.response.data, showErr: true });
      };

      axios
        .post(`${API_URL}/user/login`, payload)
        .then(onSuccess)
        .catch(onFailure);
    } else {
      const payload = { username, email, password };
      console.log("reg-payload", payload);
      axios
        .post(`${API_URL}/user/register/`, payload)
        .then((res) => {
          console.log(res);
          document.forms["loginReg"].reset();
          this.handleResponse();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      showErr: false,
    });
  }
  handleResponse = () => {
    // For showing and hiding after login/registeration response

    setTimeout(() => {
      this.setState({ showResp: true });
    }, 1500);
    setTimeout(() => {
      this.setState({ showResp: false });
      if (this.state.showLogin) {
        document.getElementById("modal-btn-cl").click();
        window.location.reload();
      }
    }, 4000);
  };
  handleRegister = () => {
    document.forms["loginReg"].reset();
    this.setState({
      showLogin: !this.state.showLogin,
    });
  };
  render() {
    return (
      <>
        <div className="LoginPage">
          <div className="LoginForm ">
            <h1>{this.state.showLogin ? "LOGIN" : "REGISTER"}</h1>
            <form
              name="loginReg"
              method="post"
              onSubmit={this.handleLoginRegSubmit}
            >
              <p>
                Username
                <PersonIcon fontSize="small" />
              </p>
              <input
                name="username"
                type="text"
                placeholder="Enter Username"
                onChange={this.handleOnChange}
                required
              />
              {!this.state.showLogin && (
                <>
                  <p>
                    Email
                    <PersonIcon fontSize="small" />
                  </p>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    onChange={this.handleOnChange}
                    required
                  />
                </>
              )}
              <p>
                Password
                <LockIcon fontSize="small" />
              </p>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={this.handleOnChange}
                autoComplete="on"
                required
              />
              {this.state.showErr && (
                <div className="errTooltip">Username/Password Invalid</div>
              )}
              <input
                type="submit"
                value={this.state.showLogin ? "LOGIN" : "REGISTER"}
              />
              {/* <a href="#">Lost your password?</a>
            <br /> */}
              <a href="#" onClick={this.handleRegister}>
                {" "}
                {this.state.showLogin ? "Don't have an account?" : "Login"}{" "}
              </a>
            </form>
          </div>
          {this.state.showResp && (
            <AfterSubmit showLogin={this.state.showLogin} />
          )}
        </div>
      </>
    );
  }
  componentDidMount() {
    document.title = "Login";
  }
  componentWillUnmount() {
    document.title = "Audley";
  }
}
