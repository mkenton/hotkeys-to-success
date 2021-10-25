import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {Button} from '../styles'

function Signup({ setCurrentUser, url }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function createUser(event) {
        event.preventDefault();
        event.target.reset();

        let user = {
            username,
            password,
        };

        fetch(`${url}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("signup created response: ", response)
                    response.json()
                        .then(res => {
                            console.log("response data", res);
                            setCurrentUser(true)
                            setErrorMessage('');
                        })
                }
                else {
                    response.json()
                        .then(res => {
                            setErrorMessage(res.error[0])
                            setUsername('')
                            setPassword('')
                        })
                }
            })
    }


    return (
        <>
            <h1> Sign Up </h1>
            <br />
            <form onSubmit={createUser}>
                <p>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </p>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="validation-error">{errorMessage}</p>
                <p>
                    <Button type="submit">Submit</Button>
                </p>
            </form>
        </>
    )
}


export default Signup