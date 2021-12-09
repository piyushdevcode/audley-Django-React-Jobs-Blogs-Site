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
import {Link} from 'react-router-dom';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxlength: 250,
      details: [],
    };
  }
  componentDidMount() {
    let data;
    axios
      .get(`${API_URL}/posts/`)
      .then((res) => {
        console.log("success");
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {
        console.log(API_URL,"Failed to retrieve", err.response);
      });
  }
  render() {
    const bg_url = 'https://picsum.photos/1000/?random=';
    return (
      <>
        <div>
          {console.log("--reqq--",this.state.details)}
          {this.state.details.map((details) => (
            <div key={details.id}>
              <Card className="w-75 m-5 .bg-info" >
              <div className="blogs-bg-img"style ={{backgroundImage: `url(${bg_url}${details.id})` }}/>
                <CardBody className=".bg-info">
                  <CardTitle tag="h3">{details.title}</CardTitle>
                  <hr></hr>
                  <CardSubtitle className="mb-2 opacity-75" tag="h6">
                    Author: {details.author} | Created at:{" "}
                    {details.created_on.slice(0, 10)}
                  </CardSubtitle>
                  <CardText>
                    {details.content.slice(0, this.state.maxlength)}{" "}
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
      </>
    );
  }
}
export default Blogs;
