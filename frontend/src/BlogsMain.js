import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Blog.css";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  CardTitle,
} from "reactstrap";
import axios from "axios";
import { Component } from "react";
import { API_URL } from "./constants/index";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";
import parse from 'html-react-parser';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxlength: 250,
      details: [],
      username: "",
      showModal: false,
      isAuthenticated: false,
    };
  }
  
  componentDidMount() {
    const root = document.getElementById('root');
    root.classList.add('blog-page-bg');
    let data;
    let uname = localStorage.getItem('username');
    axios
      .get(`${API_URL}/posts/`)
      .then((res) => {
        console.log("success");
        data = res.data;
        this.setState({
          details: data,
          username: uname,
          isAuthenticated: uname==null ? false: true ,
        });
      })
      .catch((err) => {
        console.log(API_URL, "Failed to retrieve", err.response);
      });
      console.log("AithState-",this.state.isAuthenticated,"---",this.state.username);
  }
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  render() {
    
      console.log("--response--", this.state.details);
    
    const bg_url = "https://picsum.photos/1000/?random=";
    return (
      <>
        <div>
          {this.state.details.map((details) => (
            <div key={details.id}>
              <Card className="w-75 m-5 .bg-info">
                <div
                  className="blogs-bg-img"
                  style={{ backgroundImage: `url(${bg_url}${details.id})` }}
                />
                <CardBody className=".bg-info">
                  <CardTitle tag="h3">{details.title}</CardTitle>
                  <hr></hr>
                  <CardSubtitle className="mb-2 opacity-75" tag="h6">
                    Author: {details.author} | Created at:{" "}
                    {details.created_on.slice(0, 10)}
                  </CardSubtitle>
                  <CardText>
                    {parse(`${details.content.slice(0, this.state.maxlength)}`)} {" "}
                    <span className="rm-dots">
                      <span className="ellipse"> </span>
                      <span className="ellipse"> </span>
                      <span className="ellipse"> </span>
                    </span>
                  </CardText>
                  <Button>
                    <Link to={`${details.id}`}>Read more</Link>
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="new-post">
          <div className="Greeting">Hey, {this.state.username==null ?"Guest": this.state.username}</div>
          <button className="create-post-btn" onClick={this.toggleModal} disabled={!this.state.isAuthenticated?"true":""}>
            create a post
          </button>
        </div>
        {this.state.showModal ? (
          <>
            <CreatePost />
            <button id="crtpost-btn" className="btn close-modal create-close-modal" onClick={this.toggleModal}>
              {" "}
              X{" "}
            </button>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
  componentWillUnmount(){
    const root = document.getElementById('root');
    root.classList.remove('blog-page-bg');
  }
}
export default Blogs;


