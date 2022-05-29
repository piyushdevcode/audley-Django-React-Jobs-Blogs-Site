import React ,{Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText,FormFeedback } from 'reactstrap';
import { API_URL } from '../constants';
import { dividerClasses } from '@mui/material';
import "./profile.css";

class ApplicantProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            full_name: '',
            gender :'male',
            image : null,
            country : 'IN',
            location: '',
            resume : null,
            isAuthenticated: true,
            submitted: false,
        };
    }
    componentDidMount() {
        let uname = localStorage.getItem('username');
        console.log('Username is: ',uname,'-',typeof(uname))
        this.setState({
          isAuthenticated: uname!=null ? true : false ,
        });

        if (uname != null){
        axios
          .get(`${API_URL}/applicants/?search=${uname}`)
          .then((res) => {
            console.log("success");
            let data = res.data;
            const {full_name,gender,image,country,location,resume} = data[0];
            this.setState({
                full_name,gender,image,country,location,resume
            });
            console.log(data);
            console.log('Destructure o/p -',full_name,this.state.resume);
          })
          .catch((err) => {
            console.log(API_URL, "Failed to retrieve", err.response);
          });
          console.log("AuthState-",this.state.isAuthenticated,"---",this.state.username);
      }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    handleFileChange = (event) => {
        this.setState({
            [event.target.name] : event.target.files[0],
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const uid = localStorage.getItem("user_id");
        let form_data = new FormData();
        form_data.append('image',this.state.image,this.state.image.name);
        form_data.append('user',uid)
        form_data.append('full_name',this.state.full_name);
        form_data.append('gender',this.state.gender)
        form_data.append('country',this.state.country)
        form_data.append('location',this.state.location)
        form_data.append('resume',this.state.resume,this.state.resume.name)
        form_data.append('image',this.state.image,this.state.image.name)

        console.log(form_data);
        
        let url = 'http://localhost:8000/api/applicants/';
        axios.post(url, form_data,{
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(res => {
            console.log(res.data);
            this.setState({
                submitted : true,
            })
                //document.forms['profile-form'].reset();
            })
            .catch(err => {
                console.log(err.data)
            })
    }
    render () {
        return (
            this.state.isAuthenticated?(
            <Form className="profile-form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="full_name">Full Name</Label>
                <Input valid={this.state.submitted} type="text" name="full_name" placeholder="Your Full Name" value ={this.state.full_name} onChange={this.handleChange}
                />
                {this.state.submitted &&(<FormFeedback valid>Profile updated Successfully !</FormFeedback>)}
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
                <Input type="file" name="image"  onChange={this.handleFileChange} />
                <FormText color="muted">
                  (JPEG, JPG, PNG) 
                </FormText>
              </FormGroup>
                {/* Country */}
                <FormGroup>
                <Label for="Location">Location</Label>
                <Input type="text" name="location" placeholder="Your Location"value={this.state.location} onChange={this.handleChange} />
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
        ): (<div>Hey, Please Login to see profile</div>) 
        );
        
        }
      }

      export default ApplicantProfile;