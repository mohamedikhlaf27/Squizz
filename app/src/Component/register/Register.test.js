import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {RegisterForm} from "./RegisterForm";
import {FetchRegister} from "./Util";

describe("All Test" , () => {
    it("Form renders correct", () => {
        const { getByTestId } = render(<RegisterForm/>);
        expect(getByTestId("register-form")).toBeTruthy();
    });

    describe("Input value" , () => {
        it("Email input", () => {
            const { getByPlaceholderText} = render(<RegisterForm/>)
            const EmailInput = getByPlaceholderText("Email address");

            fireEvent.change(EmailInput, {target: {value: "test1@gmail.com"}})

            expect(EmailInput.value).toBe("test1@gmail.com");
        })

        it("Password input", () => {
            const { getByPlaceholderText} = render(<RegisterForm/>)
            const passwordInput = getByPlaceholderText("Password");

            fireEvent.change(passwordInput, {target: {value: "Test1234&"}})

            expect(passwordInput.value).toBe("Test1234&");
        })

        it("Repeat password input", () => {
            const { getByPlaceholderText} = render(<RegisterForm/>)
            const repeatPasswordInput = getByPlaceholderText("Repeat password");

            fireEvent.change(repeatPasswordInput, {target: {value: "Test1234&"}})

            expect(repeatPasswordInput.value).toBe("Test1234&");
        })

        it("Username input", () => {
            const { getByPlaceholderText} = render(<RegisterForm/>)
            const usernameInput = getByPlaceholderText("Username");

            fireEvent.change(usernameInput, {target: {value: "testtest"}})

            expect(usernameInput.value).toBe("testtest");
        })

        it("Function teacher input", () => {
            const { getByTestId} = render(<RegisterForm/>)
            const teacherInput = getByTestId("Teacher");

            fireEvent.click(teacherInput, {target: {value: "true"}})

            expect(teacherInput.value).toBe("true");
        })

        it("Function student input", () => {
            const { getByTestId} = render(<RegisterForm/>)
            const studentInput = getByTestId("Student");

            fireEvent.click(studentInput, {target: {value: "false"}})

            expect(studentInput.value).toBe("false");
        })
    })

    describe("with correct required fields" , () => {
        //test values
        let mock = new MockAdapter(axios);

        const Data = {
            message: "Registration succeeded",
        }

        mock.onPost("http://localhost:8080/person/register").reply(200, Data);

        const email= "test1@exapmle.com";
        const password= "Test1234&";
        const repeatPassword= "Test1234&";
        const username= "testtest";

        const event =  {
            preventDefault: () => {},
            target: {
                email: email,
                password: password,
                repeatPassword: repeatPassword,
                userName: username,
            }
        };
        const setCanSubmit = jest.fn();
        const setMessage = jest.fn();
        const registerRequestedMock = jest.fn();

        jest.spyOn(document, 'querySelector').mockImplementation(() => {
            return true;
        });

        it("gives fitting message", () => {

            return FetchRegister(event, setMessage, setCanSubmit, registerRequestedMock).then(data =>{
                expect(data.message).toBe("Registration succeeded")
            })
        })

        it("registerRequested has been called", () => {

            return FetchRegister(event, setMessage, setCanSubmit, registerRequestedMock).then(data =>{
                expect(registerRequestedMock).toHaveBeenCalled();
            })
        })
    })
})