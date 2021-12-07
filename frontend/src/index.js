import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Blogs from "./BlogsMain";
import  Navbar  from "./components/navbar";
import reportWebVitals from "./reportWebVitals";
import Feedback from "./components/Feedback";
import Login from "./components/Login";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Route , BrowserRouter as Router,Routes} from 'react-router-dom';

// <Blogs/>
ReactDOM.render(
  // <React.StrictMode>
  <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element ={<App/>} />
      <Route path ="/blogs"element = {<Blogs/>} />
      </Routes>
    </Router>
    // <App/>
  // </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
