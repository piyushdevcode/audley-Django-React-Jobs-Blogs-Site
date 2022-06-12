import { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, CardText,Spinner } from 'reactstrap'
import "./Job.css";
import axios from "axios";
import { API_URL } from "./constants";
import parse from 'html-react-parser';
import JobModal from "./JobModal";
import SearchIcon from '@mui/icons-material/Search';
class JobIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxlength: 250,
            details: [],
            username: "",
            isAuthenticated: false,
            isLoading : true,
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
                    isLoading : false,
                });
            })
            .catch((err) => {
                console.log(API_URL, "Failed to retrieve", err.response);
            });

        console.log("AuthState-", this.state.isAuthenticated, "---", this.state.username);
    }
    handleTagClick = (e) => {
        console.log(e);
        axios
            .get(`${API_URL}/jobs?search=${e.target.innerText}`)
            .then((res) => {
                console.log("success");
                console.log(res.data)
                this.setState({
                    details: res.data,
                });
            })
            .catch((err) => {
                console.log(API_URL, "Failed to retrieve", err.response);
            });
    }
    handleSearch = (e) => {
        console.log("search param: ", e.target.value)
        axios
            .get(`${API_URL}/jobs?search=${e.target.value}`)
            .then((res) => {
                console.log("success");
                this.setState({
                    details: res.data,
                });
            })
            .catch((err) => {
                console.log(API_URL, "Failed to retrieve", err.response);
            });
    }
    // if job id matches with user then change apply now to applied
    render() {
        return (
            <>
            <div className="search-box">
                <SearchIcon className="search-ico"/>
                <input type="text" name="searchbar" className="job-search"  placeholder="Looking for ? "onChange={this.handleSearch} autofocus/>
                </div>
                {!this.state.isLoading ? (<div className="jobs-group">
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
                                        <a href="#" key={tag.id} className="job-tags" onClick={this.handleTagClick}>{tag}</a>
                                    ))}
                                </div>
                                <CardFooter>
                                    Posted On: {details.posted_at.slice(0, 10)} | Last Date: {details.last_date.slice(0, 10)}
                                </CardFooter>

                            </Card>
                        </div>))}

                </div>): (<Spinner className="center-spinner"/>)}
            </>
        )

    }
};

export default JobIndex;