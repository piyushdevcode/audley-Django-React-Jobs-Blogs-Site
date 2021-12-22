import React, { useState } from "react";
import Login from "./Login";
import "./ctabutton.css";
import Feedback from "./Feedback";

export default function CtaButtons() {
  const[modal,setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

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
        Employee
      </button>
      <button onClick={toggleModal} className="btn">Query ?</button>
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
    {modal2 &&(
      <div className="modal">
      <div className="overlay"></div>
      <div className="loginmodal modal-content">
          <Login/>
        <button
        className="btn close-modal"
        onClick = {toggleModal2}
        > X </button>
      </div>
  </div>
      
    )}
      </>
  );
}
