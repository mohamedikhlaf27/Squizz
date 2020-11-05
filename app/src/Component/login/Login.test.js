import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import {LoginForm} from "./LoginForm";
import {FetchLogin} from "./Util";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


describe("All Test" , () => {
    it("Form renders correct", () => {
        const { getByTestId } = render(<LoginForm/>);
        expect(getByTestId("login-form")).toBeTruthy();
    });

    describe("Input value" , () => {
        it("email input", () => {
            const { getByPlaceholderText} = render(<LoginForm/>)
            const emailInput = getByPlaceholderText("Email address");

            fireEvent.change(emailInput, {target: {value: "test1@gmail.com"}})

            expect(emailInput.value).toBe("test1@gmail.com");
        })

        it("password input", () => {
            const { getByPlaceholderText} = render(<LoginForm/>)
            const emailInput = getByPlaceholderText("Password");

            fireEvent.change(emailInput, {target: {value: "Test1234&"}})

            expect(emailInput.value).toBe("Test1234&");
        })
    })

    describe("with correct required fields" , () => {
        //test values
        let mock = new MockAdapter(axios);

        const Data = {
            message: "Login succeeded",
            jwt: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBleGFtcGxlL…TgzfQ.cALHz3kp7PftVtUtIEzcKYSWoiq-0gW85eAOBeZoXaQ"
        }

        mock.onPost("http://localhost:8080/person/login").reply(200, Data);

        const email= "test1@exapmle.com";
        const password= "Test1234&";
        const event =  {
            preventDefault: () => {},
            target: {
                email: email,
                password: password
            }
        };
        const setCanLogin = jest.fn();
        const setLoggedIn = jest.fn();
        const setMessage = jest.fn();
        const loginRequestedMock = jest.fn();

        it("gives fitting message",  () => {

            return FetchLogin(event, setCanLogin, setLoggedIn, setMessage, loginRequestedMock).then(data =>{
                expect(data.message).toBe("Login succeeded")
            })
        })

        it("loginRequested has been called", () => {

            return FetchLogin(event, setCanLogin, setLoggedIn, setMessage, loginRequestedMock).then(data =>{
                expect(loginRequestedMock).toHaveBeenCalled();
            })

        })
    })
})