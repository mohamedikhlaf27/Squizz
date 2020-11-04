import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import {LoginForm} from "./LoginForm";
import {FetchData} from "./Util";


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
        const det = {
            message: "Login succeeded",
            jwt: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBleGFtcGxlL…TgzfQ.cALHz3kp7PftVtUtIEzcKYSWoiq-0gW85eAOBeZoXaQ"
        }

        const email= "test1@exapmle.com";
        const password= "Test1234&";
        const event =  {
            preventDefault: () => {},
            target: {
                email: email,
                password: password
            }
        };
        const setCanLogin = true;
        const setLoggedIn = false;
        const setMessage = jest.fn();
        const loginRequestedMock = jest.fn();

        it("check fetch has been called", () => {

            //fetch.mockResponseOnce(JSON.stringify(data));
            //
            // expect(fetch).toHaveBeenCalledTimes(0);

        })

        it("gives fitting message", async () => {

            fetch.mockResponseOnce(JSON.stringify(det));

            return FetchData(event, setCanLogin, setLoggedIn, setMessage, loginRequestedMock).then(data =>{
                console.log("niks");
                console.log(data);
                expect(data.message).toBe("Login succeeded");
            })

        })

        it("loginRequested has been called", () => {

            // const loginRequestedMock = jest.fn();
            //
            // return FetchData(email, password, loginRequestedMock).then(data =>{
            //     expect(loginRequestedMock).toHaveBeenCalled();
            // })


        })
    })

})