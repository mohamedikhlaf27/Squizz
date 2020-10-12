import React, {Component} from 'react'
import './Register.css';
import {Button, Input, Label, FormGroup} from "reactstrap";
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canSubmit: true,
            registered: false,
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            canSubmit: false
        });

        const email = event.target.email.value;
        const password = event.target.password.value;
        const username = event.target.userName.value;
        const role = document.querySelector('input[name="radio"]:checked').value;

        let formData = new URLSearchParams();
        formData.append('email', email)
        formData.append('password', password);
        formData.append('username', username);
        formData.append('role', role);

        console.log(email, password, username, role);

        fetch("http://localhost:8080/person/register", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        })
        .then(result => {
            if (result.status === 200) {
                return result.json();
            } else {
                return Promise.reject(result)
            }
        })
        .then(data => {
            if (data) {
                this.setState({
                    canSubmit: true,
                    message: data.message
                });
                this.props.history.push("/login");
            }
        })
        .catch(result => result.json())
        .then(data => {
            if (data) {
                this.setState({
                    message: data.message
                });
            }
        })
    }

    render() {
        return (
            <form className="form-signup" onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="card card-container">
                        <div className= "pb-2"><
                            h4 id = "Title">Sign up</h4>
                        </div>
                        <Input type="email" id="email" className="form-control" placeholder="Email address"
                               required autoFocus> </Input>
                        <Input type="password" id="password" className="form-control" placeholder="Password" required> </Input>
                        <Input type="text" id="userName" className="form-control" placeholder="Username" required> </Input>

                        <div>
                            <Label>
                                Function:
                            </Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" id="radio" name="radio" value="true"/>{' '}
                                    Teacher
                                </Label>
                            </FormGroup>
                            <FormGroup check className="pb-2">
                                <Label check>
                                    <Input type="radio" id="radio" name="radio" value="false"/>{' '}
                                    Student
                                </Label>
                            </FormGroup>
                        </div>

                        <div>{this.state.message}</div>

                        <Button className="btn btn-lg btn-primary btn-block btn-signup" type="submit">Sign up
                        </Button>
                        <div className={this.state.registered ? "registered" : "register-failed"}>
                            <p>Already have a account?
                                <a className="login"> <Link to="/login"> Sign in </Link></a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(Register);
