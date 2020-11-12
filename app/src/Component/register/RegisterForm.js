import {Button, FormGroup, Input, Label} from "reactstrap";
import React from "react";
import {FetchRegister} from "./Util";

import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';


export const RegisterForm = ({registerRequested}) => {

    const [canSubmit, setCanSubmit] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = (event) => {
        FetchRegister(event, setMessage, setCanSubmit, registerRequested).then(r => message);
    }

    const [passwordShown, setPasswordShown] = React.useState(false);
    const [repeatPasswordShown, setRepeatPasswordShown] = React.useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const toggleRepeatPasswordVisibility = () => {
        setRepeatPasswordShown(!repeatPasswordShown);
    };

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

                    <div className="passIcon">
                        <input type={passwordShown ? "text" : "password"} id="password" className="form-control" placeholder="Password" required data-hj-allow />

                        <span onClick={togglePasswordVisibility} className="icon">
                                <span>
                                    {passwordShown ?
                                        <FaRegEyeSlash classname= "customIcon"/>:
                                        <FaRegEye classname= "customIcon"/>
                                    }
                                </span>
                            </span>
                    </div>

                    <div className="passIcon">
                        <input type={repeatPasswordShown ? "text" : "password"} id="repeatPassword" className="form-control" placeholder="Repeat password" required data-hj-allow/>

                        <span onClick={toggleRepeatPasswordVisibility} className="icon">
                                <span>
                                    {repeatPasswordShown ?
                                        <FaRegEyeSlash classname= "customIcon"/>:
                                        <FaRegEye classname= "customIcon"/>
                                    }
                                </span>
                            </span>
                    </div>

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
