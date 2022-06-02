import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Tooltip } from 'reactstrap';
import parse from "html-react-parser";
import { API_URL } from './constants';
import axios from 'axios';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      isLoggedIn : localStorage.getItem('username')==null ?false : true,
      hasapplied: this.checkHasapplied(),
      showTooltip: false,
    };
  
    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }
  checkHasapplied = () => {
    let jobs_id = JSON.parse(localStorage.getItem("jobs_id"));
    if (jobs_id){
        for(let i in jobs_id){
            if (jobs_id[i] == this.props.details.id){
                return true
            } 
        }
      }
      return false
  }
  toggle() {
    console.log(localStorage.getItem('username'));
    console.log("auth",this.state.isLoggedIn);
    this.setState({
      modal: !this.state.modal,
    });
  }
  toggleTooltip = ()=>{
    console.log("called",this.state)
    this.setState({
      showTooltip : !this.state.showTooltip,
    })
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }
  ApplyJob = () =>{
      if(!this.state.hasapplied)
      {
      const user_id = localStorage.getItem('user_id');
      const token = localStorage.getItem('token');
      let jobs_id = JSON.parse(localStorage.getItem('jobs_id'));
      const payload = {
          user: user_id,
          job: this.props.details.id
      }
      console.log(payload)
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Authorization": `Token ${token}`,
        }
      };
      axios.post(`${API_URL}/jobsapplied`,payload,axiosConfig)
        .then((resp) =>{
            console.log("Applied for Job Successfully",resp);
            this.setState({
                nestedModal: !this.state.nestedModal,
            })
            jobs_id.push(this.props.details.id);
            localStorage.setItem("jobs_id",JSON.stringify(jobs_id))
        }).catch((err)=>{
            console.log("Some error occured :(",err)
        })
    }
    else{
        this.setState({
            nestedModal: !this.state.nestedModal,
    })
    }
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <div>
          {this.checkHasapplied}
            
            <span id="tooltip-btn">
              <Button color="danger" onClick={this.toggle} 
            style={!this.state.isLoggedIn ? { pointerEvents: "none" } : {}}
            disabled={!this.state.isLoggedIn? true:false}>{this.props.buttonLabel}</Button>
              </span>
            <Tooltip
    placement='right'
    autohide={false}
    isOpen={this.state.showTooltip && !this.state.isLoggedIn}
    target="tooltip-btn"
    toggle={this.toggleTooltip}
  >
    Login required
  </Tooltip>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.details.title}</ModalHeader>
          <ModalBody>
            <div className="salary">Expected Salary: {this.props.details.salary}</div>
            <div className="company">
                Company: {this.props.details.company_name} | <a href="#">Visit the website</a>
                </div>
            <div className="location">

            Location: {this.props.details.location} | {this.props.details.location_type}
            </div>
            <br/><br/>

            {parse(this.props.details.description)}
            {/* <Button color="success" onClick={this.toggleNested}>Show Nested Modal</Button> */}
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Confirmation</ModalHeader>
              <ModalBody>{console.log(this.state.hasapplied)}{this.state.hasapplied ? "You have already applied for this job": `You have successfully applied for position ${this.props.details.title}` }</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Ok</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>Close</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.ApplyJob}>Apply Now</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;