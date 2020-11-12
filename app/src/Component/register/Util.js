import React from 'react';

import axios from 'axios';

export const FetchRegister = (event, setMessage, canSubmit, registerRequested ) => {

    event.preventDefault();
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

    return axios
        .post("http://localhost:8080/person/register", formData)
        .then(response => response.status === 200 ? response : Promise.reject)
        .then(response => {
            console.log(response);

            canSubmit(true);
            setMessage(response.data.message)
            //registerRequested();

            return response.data;
        })
        .catch(error => {
            console.log(error.response.data);

            setMessage(error.response.data.message)

            return error.response.data;
        });
}