import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Signup({url}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [created, setCreated] = useState(false);
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
            .then((r) => r.json())
            .then((response) => {
                if (response.status === 'created') {
                    setCreated(true);
                    setErrorMessage('');
                }
            })
            .catch((response) => {
                setErrorMessage(response.message);
                console.log(response)
            }
            );
    }

    return (
        <div>
            {created ? (
                <Redirect to="/login" />
            ) : (
                <div>
                    <h1> SIGNUP FORM </h1>
                    <div className="please-log-in">
                        <p>{errorMessage}</p>
                    </div>
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
                        <p>
                            <button type="submit">Submit</button>
                        </p>
                    </form>
                </div>
            )}
            <br />
        </div>
    );
}
export default Signup