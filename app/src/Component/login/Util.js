import React from 'react';
import './Login.css';

export const FetchData = (event, setCanLogin, setLoggedIn, setMessage, loginRequested) => {

    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    let formData = new URLSearchParams();
    formData.append('email', email)
    formData.append('password', password);

    return fetch("http://localhost:8080/person/login", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
    })
        .then(result => {
            if (result.status === 200) {
                return result.json()
            } else {
                return Promise.reject(result)
            }
        })

        .then(data => {
            if (data) {
                console.log(data);
                // localStorage.setItem('Squizz-loggedIn', true);
                // setCanLogin(true);
                // setLoggedIn(true);
                // setMessage(data.message);
                //loginRequested();
            }
        })
        .catch(result => result.json())
        .then(data => {
            if (data) {
                console.log("error");
                // console.log(error.data);
                // localStorage.setItem('Squizz-loggedIn', false);
                // setCanLogin(false);
                // setLoggedIn(true);
                // setMessage(error.data.message);
                //return error.data;
            }
        })
}

