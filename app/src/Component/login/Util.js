import React from 'react';
import './Login.css';
import axios from 'axios';

export const FetchLogin = (event, setCanLogin, setLoggedIn, setMessage, loginRequested) => {

    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    let formData = new URLSearchParams();
    formData.append('email', email)
    formData.append('password', password);

    return axios
        .post("http://localhost:8080/person/login", formData)
        .then(response => response.status === 200 ? response : Promise.reject)
        .then(response => {
            console.log(response);
            localStorage.setItem('Squizz-loggedIn', true);
            setCanLogin(false);
            setLoggedIn(true);
            setMessage(response.data.message);
            loginRequested();

            return response.data;
        })
        .catch(error => {
            console.log(error.response.data);
            localStorage.setItem('Squizz-loggedIn', false);
            setCanLogin(true);
            setLoggedIn(false);
            setMessage(error.response.data.message);

            return error.response.data;
        });
}

