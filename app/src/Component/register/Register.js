import React, {Component} from 'react'

class Register extends Component {

    handleSubmit(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        let formData = new URLSearchParams();
        formData.append('email', email)
        formData.append('password', password);


        fetch("http://localhost:8080/user/register", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        })
            .then(result => result.json())
            .then(data => {
                console.log(data)
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input placeholder="email" type="text" name="email" id="email"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input placeholder="password" type="text" name="password" id="password"></input>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        )
    }
}

export default Register;