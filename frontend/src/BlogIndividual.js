import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./constants";
import "./blogIndiv.css";
import parse from 'html-react-parser';
import CommentModal from "./CommentModal";

const BlogIndiv = () => {
  const [data, setData] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [showModal,setModal] = useState(false);
  let { id } = useParams();

  // ComponentDidMount
  useEffect(() => {
    const fetchBlogData = () => {
      axios
        .get(`${API_URL}/posts/${id}/`)
        .then((res) => {
          res.data.created_on = res.data.created_on.slice(0, 10);
          setData(res.data);
          setLoading(false);
          console.log("success", res.data);
        })
        .catch((err) => {
          console.log("Failed to retrieve", err.response);
        });
    }
    fetchBlogData();
  }, []);
 const toggleModal = () =>{
    setModal(!showModal)
  }
  const parseTime = (time)=>{
    console.log("SAMAY: ",time.slice(11,19))
    time = time.slice(11,19)
    const timeString = new Date('2022-12-12T' + time + 'Z').toLocaleTimeString(
      'en-US',{timeZone: 'UTC',hour12: true,hour: 'numeric',minute: 'numeric'}
    );
    return timeString

  }
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
      <div className="comment-block blog-content">
        <h1>Comments</h1>
        {console.log(data.comments)}
        { !isLoading && data.comments.length ? data.comments.map(comment => (
          <>
          <div className="comment-info">
          <div className="comment-title"> <strong className="commentor">{comment.name}</strong><span className="comment-date" > {comment.date_created.slice(0,10)} , {parseTime(comment.date_created)} </span></div>
          <div className="comment-body">{comment.body}</div>
          </div>
          </>
        )): <div className="no-comment">No Comments</div> }
         <button className="create-post-btn comment-btn" onClick={toggleModal}>
            Add a comment
          </button>
          {
            showModal ?<>
             
            <CommentModal post_id={`${id}`}/> 
            <button id="crtpost-btn" style={{position:"fixed"}} className="btn close-modal create-close-modal" onClick={toggleModal}>
            {" "}
            X{" "}
          </button> </> : ''
          }
      </div>
      </div>
    </main>
  );
};
export default BlogIndiv;
