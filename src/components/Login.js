import { useState } from 'react'
import { Button, Heading } from '../styles';


function Login({ setCurrentUser, url }) {

    // // refactor for more inputs
    // const [formData, setFormData] = useState({
    //     username: "",
    //     password: "",
    // });

    // function handleInputChange(event) {
    //     setFormData({
    //         ...formData,
    //         [event.target.id]: event.target.value,
    //     });
    // }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    function handleLogin(event) {
        event.preventDefault();
        event.target.reset();

        const user = { "username": username, "password": password };
        console.log(user)

        fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("login created response: ", response)
                    response.json()
                        .then((response) => {
                            localStorage.token = response.jwt;
                            setCurrentUser(response.user);
                            console.log("response OK!!");
                        })
                }
                else {
                    setErrorMessage(response.message)
                    console.log("error response:", response)
                }
            })
    }

    return (
        <>
            <h1> Log In </h1>
            <br/>
            <form onSubmit={handleLogin}>
                <p>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => { setUsername(e.target.value) }}
                        placeholder="Username"
                    />
                </p>
                <p>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Password"
                    />
                </p>
                <Button type="submit">Submit</Button>
            </form>
            <p className="validation-error"> {errorMessage} </p>
        </>
    );
}

export default Login