import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="FeedbackPage">
        <div className="FeedbackForm">
          <form method="post" className="FormFilling">
            <div className="Personal">
              <div className="txt_field">
                <input type="text" required />
                <label>
                  <PersonIcon />
                  Your Name
                </label>
              </div>
              <div className="txt_field">
                <input type="text" required />
                <label>
                  <PhoneIcon />
                  Phone No.
                </label>
              </div>
            </div>
            <br />
            <div className="txt_field">
              <input type="email" required />
              <label>
                <EmailIcon />
                Email ID
              </label>
            </div>
            <br />
            <div className="txt_field">
              <textarea id="message" rows="8" required></textarea>
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
      </div>
    );
  }
  componentDidMount() {
    document.title = "Feedback";
  }
}
