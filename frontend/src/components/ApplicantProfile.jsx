import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { API_URL } from '../constants';
import { circularProgressClasses, dividerClasses } from '@mui/material';
import "./profile.css";
import default_img from "../img/Profile-Icon.png"

class ApplicantProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      gender: 'male',
      image: null,
      country: 'IN',
      location: '',
      resume: null,
      img_url : default_img, //specify default image
      isAuthenticated: true,
      submitted: false,
      hasProfile: false,
      username: '',
    };
  }
  componentDidMount() {
    let uname = localStorage.getItem('username');
    console.log('Username is: ', uname, '-', typeof (uname))
    this.setState({
      isAuthenticated: uname != null ? true : false,
      username: uname,
    });

    if (uname != null) {

      axios
        .get(`${API_URL}/applicants/?search=${uname}`)
        .then((res) => {
          console.log("success",res.data);
          let data = res.data;
          const { full_name, gender, image, country, location, resume } = data[0];
          this.setState({
            full_name, gender, image, country, location, resume
          });
          this.setState({
            img_url : image ? image : default_img,
            hasProfile: true,
        })
          console.log('Destructure o/p -', full_name, this.state.resume);
          console.log("IMAGE CONTAINS",this.state.image,typeof(this.state.image),this.state.img_url)
        })
        .catch((err) => {
          console.log(API_URL, "Failed to retrieve", err);
        });
      console.log("AuthState-", this.state.isAuthenticated, "---", this.state.username);
    }
      
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleFileChange = (event) => {
    this.setState({
      [event.target.name]: event.target.files[0],
    })
    console.log("Data",event.target.files[0],typeof(event.target.files[0]));
  };
  
  handleSubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData();
    const uid = localStorage.getItem("user_id");
    const uname = this.state.username
   
     //Converting Img URL to FIle object
     console.log(typeof(this.state.image) != 'string',typeof(this.state.image),typeof(default_img),default_img)
     if(typeof(this.state.image) != 'string' && this.state.image != null){
      form_data.append('image', this.state.image, "profile_img-"+ uname + ".png");
     }
     console.log(typeof(this.state.resume) === 'object', typeof(this.state.resume))
      if(typeof(this.state.resume) != 'string' && this.state.resume != null){
      form_data.append('resume',this.state.resume,"resume_"+uname+".pdf")
      }
    
    console.log("Before sending form: ",this.state);
    ////FORM DATA---------------------------
    
  ////FORM DATA---------------------------
  form_data.append('user', uid)
  form_data.append('full_name', this.state.full_name);
  form_data.append('gender', this.state.gender)
  form_data.append('country', this.state.country)
  form_data.append('location', this.state.location)
    const token = localStorage.getItem('token');
    let headers = {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Token ${token}`,
          }
        }

      let url = 'http://localhost:8000/api/applicants/';
    if(this.state.hasProfile){
      axios.put(`${url}${uid}`,form_data,headers).then((resp)=>{console.log(resp.data);
        this.setState({
                submitted: true,
              })
      }).catch((err)=>{console.log(err)})
    }
    else{
    axios.post(url, form_data, headers)
      .then(res => {
        console.log(res.data);
        this.setState({
          submitted: true,
        })
        //document.forms['profile-form'].reset();
      })
      .catch(err => {
        console.log(err.data)
      })
    }
  }
  render() {
    return (
      this.state.isAuthenticated ? (
        <>
          <img className='profile-img' src={this.state.img_url} />
          <Form className="profile-form" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="full_name">Full Name</Label>
              <Input valid={this.state.submitted} type="text" name="full_name" placeholder="Your Full Name" value={this.state.full_name} onChange={this.handleChange}
              required/>
              {this.state.submitted && (<FormFeedback valid>Profile updated Successfully !</FormFeedback>)}
            </FormGroup>

            <FormGroup>
              <Label for="Gender">Gender</Label>
              <Input type="select" name="gender"
                value={this.state.gender} onChange={this.handleChange}>
                <option>male</option>
                <option>female</option>
                <option>not specify</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="image">Profile Image</Label>
              <Input type="file" name="image" onChange={this.handleFileChange} />
              <FormText color="muted">
                (JPEG, JPG, PNG)
              </FormText>
            </FormGroup>
            {/* Country */}
            <FormGroup>
              <Label for="Location">Location</Label>
              <Input type="text" name="location" placeholder="Your Location" value={this.state.location} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="resume">Resume</Label>
              <Input type="file" name="resume" onChange={this.handleFileChange} />
              <FormText color="muted">
                (PDF only)
              </FormText>
            </FormGroup>
            <Button>Submit</Button>

          </Form>
        </>
      ) : (<div>Hey, Please Login to see profile</div>)
    );

  }
}

export default ApplicantProfile;