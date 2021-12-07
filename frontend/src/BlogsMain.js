import Navbar from "./components/navbar";
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
      .get("http://127.0.0.1:8000/?format=json")
      .then((res) => {
        console.log("success");
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {console.log(err)});
  }
  render() {
    return (
      <>
        <div>
          {this.state.details.map((details, id) => (
            <div key={id}>
              <Card className="w-75 m-5 .bg-info">
                <CardBody className=".bg-info">
                  <CardTitle tag="h5">{details.title}</CardTitle>
                  <CardSubtitle className="mb-2 opacity-75" tag="h6">
                    Author: {details.author} | Created at:{" "}
                    {details.created_on.slice(0, 10)}
                  </CardSubtitle>
                  <CardText>
                    {details.content.slice(0, this.state.maxlength)}{" "}
                    <span>
                        <span className="ellipse"> </span>
                        <span className="ellipse"> </span>
                        <span className="ellipse"> </span>
                        </span>
                  </CardText>
                  <Button>
                    Read more<a href=""></a>
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
