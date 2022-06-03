import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./constants";
import "./blogIndiv.css";
import parse from 'html-react-parser';

const BlogIndiv = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();

  // ComponentDidMount
  useEffect(() => {
    const fetchBlogData = () => {
      axios
        .get(`${API_URL}/posts/${id}/`)
        .then((res) => {
          res.data.created_on = res.data.created_on.slice(0, 10);
          setData(res.data);
          console.log("success", res.data);
        })
        .catch((err) => {
          console.log("Failed to retrieve", err.response);
        });
    }
    fetchBlogData();
  }, []);
  const bg_url = "https://picsum.photos/1000/?random=";
  return (

    <main className="blog-main">
      <div className="blog-sth">
        <div className="blog-details">
          <div className="blog-title">{data.title}</div>
          <div className="blog-author">Written By: {data.author}</div>
          <div className="blog-date">Posted on: {data.created_on}</div>
        </div>
        <div className="blog-image">
          <img src={`${bg_url}${id}`} alt="postImage" />
        </div>
        <div className="blog-content">
          <p>{parse(`${data.content}`)}{parse(`${data.content}`)}</p>
          <p>{parse(`${data.content}`)}{parse(`${data.content}`)}</p>
          <p>{parse(`${data.content}`)}{parse(`${data.content}`)}</p>

          <div className="fake-hr" />
        </div>
      </div>
    </main>
  );
};
export default BlogIndiv;
