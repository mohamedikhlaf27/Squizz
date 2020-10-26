import React, {Component} from 'react'
import './Register.css';
import {Button, Input, Label, FormGroup} from "reactstrap";
import { withRouter } from "react-router-dom";


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canSubmit: true,
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
        const repeatPassword = event.target.repeatPassword.value;
        const username = event.target.userName.value;
        const role = document.querySelector('input[name="radio"]:checked').value;

        let formData = new URLSearchParams();
        formData.append('email', email)
        formData.append('password', password);
        formData.append('repeatPassword', repeatPassword);
        formData.append('username', username);
        formData.append('role', role);

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
                <div className="empty"> </div>
                <div className="container">
                    <div className="card card-container">
                        <div className= "pb-2"><
                            h4 id = "Title">Sign up</h4>
                        </div>
                        <Input type="email" id="email" className="form-control" placeholder="Email address" data-hj-allow
                               required autoFocus> </Input>
                        <Input type="password" id="password" className="form-control" placeholder="Password" required data-hj-allow> </Input>
                        <Input type="password" id="repeatPassword" className="form-control" placeholder="Repeat password" required data-hj-allow> </Input>
                        <Input type="text" id="userName" className="form-control" placeholder="Username" required> </Input>

                        <div>
                            <Label>
                                Function:
                            </Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" id="radioTeacher" name="radio" value="true" checked={true}/>{' '}
                                    Teacher
                                </Label>
                            </FormGroup>
                            <FormGroup check className="pb-2">
                                <Label check>
                                    <Input type="radio" id="radioStudent" name="radio" value="false"/>{' '}
                                    Student
                                </Label>
                            </FormGroup>
                        </div>

                        <div className="text-danger pb-2">{this.state.message}</div>

                        <Button className="btn btn-lg btn-primary btn-block btn-signup" type="submit">Sign up
                        </Button>
                        <div>
                            <p>Already have a account?
                                <a className="login" href={'/login'}> Sign in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(Register);