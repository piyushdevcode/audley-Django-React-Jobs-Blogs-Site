import React, { useState } from "react";
import Login from "./Login";
import "./ctabutton.css";
import Feedback from "./Feedback";
import axios from "axios";
import { API_URL } from "../constants";

export default function CtaButtons() {
  const[modal,setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const uname = localStorage.getItem('username');
  const toggleModal = () => {
      setModal(!modal);
  };
  const toggleModal2 = () => {
    setModal2(!modal2);
};
  if(modal || modal2) {
    document.body.classList.add('active-modal'); 
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <div className="btn-grp">
      <button onClick={toggleModal2} className="btn">
        {uname==null ? "Login/Register" : `${uname} | logout`}
      </button>
      <button onClick={toggleModal} className="btn">Talk With Us</button>
      </div>
      {/* CONDITIONAL RENDERING */}
      {modal &&( 
      <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
              <Feedback/>
            <button
            className="btn close-modal"
            onClick = {toggleModal}
            > X </button>
          </div>
      </div>
      ) 
    }
    {modal2 && uname==null ?(
      <div className="modal">
      <div className="overlay"></div>
      <div className="loginmodal modal-content">
          <Login/>
        <button
        id="modal-btn-cl"
        className="btn close-modal"
        onClick = {toggleModal2}
        > X </button>
      </div>
  </div>
      
    ): logout()}
      </>
  );
}

function logout(){
  document.body.classList.remove('active-modal');
  const token = localStorage.getItem('token');
  let axiosConfig = {
    headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Token ${token}`,
  }
  };
  console.log(axiosConfig);
  axios.post(`${API_URL}/user/logout`,axiosConfig).then((resp)=>{
    console.log("response: ",resp);
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }).catch((err)=>{
    console.log("error: ",err);
  })
}
