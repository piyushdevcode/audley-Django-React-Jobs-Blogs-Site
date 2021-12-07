import React, { Component , useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import axios from "axios";
import "./feedback.css";

function AfterSubmit(){
  return(
    <div className="response">
        <div className="overlay">
        <div className="after-resp">
          Thank you for submitting your response.
            <div>
              <CheckCircleOutlineIcon id="submitted-icon"/>
              </div>
        </div>
        </div>
  </div>

  )
}
export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneno: "",
      message: "",
      showResp: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const { name, email, phoneno, message } = this.state;

    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/feedback", {
        name: name,
        email: email,
        phoneno: phoneno,
        message: message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      // TEST THIS ----------------------
      setTimeout(()=> {
        this.setState({
          showResp : true,
      })}, 2000)
      // --------------------------------

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div className="FeedbackPage">
        <div className="FeedbackForm">
          <form
            onSubmit={this.handleSubmit}
            method="post"
            className="FormFilling"
          >
            <div className="Personal">
              <div className="txt_field">
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  required
                />
                <label>
                  <PersonIcon />
                  Your Name
                </label>
              </div>
              <div className="txt_field">
                <input
                  type="text"
                  name="phoneno"
                  onChange={this.handleChange}
                  required
                />
                <label>
                  <PhoneIcon />
                  Phone No.
                </label>
              </div>
            </div>
            <br />
            <div className="txt_field">
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                required
              />
              <label>
                <EmailIcon />
                Email ID
              </label>
            </div>
            <br />
            <div className="txt_field">
              <textarea
                id="message"
                rows="8"
                name="message"
                onChange={this.handleChange}
                required
              ></textarea>
              <label>
                <ChatBubbleIcon />
                Feedback...
              </label>
            </div>
            <div className="txt_field">
              <button type="submit">
                SUBMIT
                <CheckCircleOutlineIcon />
              </button>
            </div>
          </form>
        </div>
        
        {this.state.showResp && (<AfterSubmit/>)}
      </div>
    );
  }
  componentDidMount() {
    document.title = "Feedback";
  }
}
