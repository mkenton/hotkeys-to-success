import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Signup({ url }) {
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
            .then((response) => {
                if (response.ok) {
                    console.log("signup created response: ", response)
                    response.json()
                        .then(res => {
                            console.log("response data", res);
                            setCreated(true);
                            setErrorMessage('');
                            // console.log("error message: ", errorMessage)

                        })
                }
                else {
                    // console.log("response not OK: ", response)
                    response.json()
                    .then(res => {
                        // console.log(res.error[0])
                        setErrorMessage(res.error[0])
                        setUsername('')
                        setPassword('')
                    })
                    
                }
            }
            )
    }
    //         .catch((response) => {
    //             setErrorMessage(response.message);
    //             console.log("signup catch response: ", response)
    //             console.log("error message: ", errorMessage)
    //         }
    //         );
    // }

    return (
        <div>
            {created ? (
                <Redirect to="/login" />
            ) : (
                <div>
                    <h1> SIGNUP FORM </h1>
                    <div className="please-log-in">
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
                        <p className="validation-error">{errorMessage}</p>
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