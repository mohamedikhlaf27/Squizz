import {Button, FormGroup, Input, Label} from "reactstrap";
import React from "react";
import {FetchRegister} from "./Util";


export const RegisterForm = ({registerRequested}) => {

    const [canSubmit, setCanSubmit] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = (event) => {
        FetchRegister(event, setMessage, setCanSubmit, registerRequested).then(r => message);
    }

    return (
        <form data-testid="register-form" className="form-signup" onSubmit={handleSubmit}>
            <div className="empty"> </div>
            <div className="container">
                <div className="card card-container">
                    <div className= "pb-2"><
                        h4 id = "Title">Sign up</h4>
                    </div>
                    <input type="email" id="email" className="form-control" placeholder="Email address" data-hj-allow
                           required autoFocus />
                    <input type="password" id="password" className="form-control" placeholder="Password" required data-hj-allow />
                    <input type="password" id="repeatPassword" className="form-control" placeholder="Repeat password" required data-hj-allow/>
                    <input type="text" name="userName" id="userName" className="form-control" placeholder="Username" required />

                    <div>
                        <Label>
                            Function:
                        </Label>
                        <FormGroup check>
                            <Label check>
                                <input data-testid="Teacher" type="radio" id="radioTeacher" name="radio" value="true" defaultChecked={true}/>{' '}
                                Teacher
                            </Label>
                        </FormGroup>
                        <FormGroup check className="pb-2">
                            <Label check>
                                <input data-testid="Student" type="radio" id="radioStudent" name="radio" value="false"/>{' '}
                                Student
                            </Label>
                        </FormGroup>
                    </div>

                    <div className="text-danger pb-2">{message}</div>

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
