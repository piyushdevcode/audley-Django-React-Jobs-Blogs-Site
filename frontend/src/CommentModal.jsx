import axios from "axios";
import { Component } from "react";
import AfterSubmitResponse from "./AfterSubmitResponse";
import { API_URL } from "./constants";

export default class CommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      body: "",
      submitted: false,
    };

  }
  componentDidMount() {
    document.body.classList.add('overflow-hidden');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, body } = this.state;
    const payload = { name, body, post : this.props.post_id };
    console.log(payload);
    axios.post(`${API_URL}/comments`, payload).then((resp) => {
      console.log("response: ", resp);
      setTimeout(() => { this.setState({ submitted: true }) }, 1000);
      setTimeout(() => { document.getElementById('crtpost-btn').click() }, 3000);
    }).catch((err) => {
      console.log("error: ", err);
    })

  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="modal modal-own">
          <div className="overlay"></div>
          <div className="modal-content modal-content-own post-modal">
            <div className="create-comment">
              <form className="form-filling" onSubmit={this.handleSubmit}>
                <div className="txt_field">
                  <input type="text" name="name"
                    onChange={this.handleChange} placeholder="Name" required />
                </div>
                <div>
                 <textarea name="body" cols="30" rows="10" onChange={this.handleChange}></textarea>
                </div>
                <div className="txt_field">
                  <button type="submit">Submit Comment</button>
                </div>
              </form>
            </div>
          </div>
          {this.state.submitted && <AfterSubmitResponse msg="Commented Succesfully" />}
        </div>
      </>
    );
  }
  componentWillUnmount() {
    document.body.classList.remove('overflow-hidden');
  }
}
