import { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, CardText } from 'reactstrap'
import "./Job.css";
import axios from "axios";
import { API_URL } from "./constants";
import parse from 'html-react-parser';
import JobModal from "./JobModal";
class JobIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxlength: 250,
            details: [],
            username: "",
            isAuthenticated: false,
        };
    }
    componentDidMount() {
        let data;
        let uname = localStorage.getItem('username');
        axios
            .get(`${API_URL}/jobs`)
            .then((res) => {
                console.log("success");
                data = res.data;
                console.log(data)
                this.setState({
                    details: data,
                    username: uname,
                    isAuthenticated: uname == null ? false : true,
                });
                let initial = false;
                for (let i = 0; i < data.length; i++) {
                    this.setState({
                        showApplyModal: [...this.state.showApplyModal, initial]
                    })

                }
                console.log(this.state.showApplyModal)
            })
            .catch((err) => {
                console.log(API_URL, "Failed to retrieve", err.response);
            });

        console.log("AuthState-", this.state.isAuthenticated, "---", this.state.username);
    }
    // if job id matches with user then change apply now to applied
    render() {
        return (
            <div className="jobs-group">
                {this.state.details.map((details, index) => (
                    <div key={details.id}>
                        {/* {handleModals} */}
                        <Card className="job-card bg-dark">
                            <CardHeader>
                                {details.title} ({details.company_name})
                            </CardHeader>
                            <CardBody className="job-card-body">
                                <CardTitle tag="h5">
                                    {details.location} | {details.location_type} |  &#8377;{details.salary}
                                </CardTitle>
                                <CardText>
                                    <div>{parse(details.description.replace(/<[^>]*>/g, '').slice(0, this.state.maxlength))}</div>
                                </CardText>
                                <JobModal buttonLabel={`Apply for ${details.title}`} details={details} />

                            </CardBody>
                            <div className="tags">
                                {details.tags.map((tag) => (
                                    <a href="#" key={tag.id} className="job-tags">{tag}</a>
                                ))}
                            </div>
                            <CardFooter>
                                Posted On: {details.posted_at.slice(0, 10)} | Last Date: {details.last_date.slice(0, 10)}
                            </CardFooter>

                        </Card>
                    </div>))}

            </div>

        )

    }
};

export default JobIndex;