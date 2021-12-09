import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./constants";
import "./blogIndiv.css";
const BlogIndiv = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();

  // ComponentDidMount
  useEffect(() => {
    axios
      .get(`${API_URL}/posts/${id}/`)
      .then((res) => {
        console.log("success", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Failed to retrieve", err.response);
      });
  }, []);
  const bg_url = "https://picsum.photos/1000/?random=";
  const date = "2021/12/01";
  // const date = data.created_on.substr(0,10);
  return (

    <main className="blog-main">
      <div className="blog-sth">
        <div className="blog-details">
          <div className="blog-title">{data.title}</div>
          <div className="blog-author">Written By: {data.author}</div>
          <div className="blog-date">Posted on: {date}</div>
        </div>
        <div className="blog-image">
          <img src={`${bg_url}${id}`} alt="blog-image"/>
        </div>
        <div className="blog-content">
          <p>{data.content}{data.content}</p>
          <p>{data.content}{data.content}</p>
          <p>{data.content}{data.content}</p>
          <div className="fake-hr" />
        </div>
      </div>
    </main>
  );
};
export default BlogIndiv;
