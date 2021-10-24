import { useState } from 'react'

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
        // const user = {username, password };
        console.log(user)

        fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user }),
        })
            .then((r) => r.json())
            .then((response) => {
                if (response.ok) {
                    localStorage.token = response.jwt;
                    setCurrentUser(response.user);
                    console.log("response OK!!")
                }
                else {
                    setErrorMessage(response.message)
                console.log("error response:" , response.message)}

        })
}

return (
    <div>
        <h1> LOGIN FORM </h1>
        <form onSubmit={handleLogin}>
            <p>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => { setUsername(e.target.value) }}
                    placeholder="username"
                />
            </p>
            <p>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    placeholder="password"
                />
            </p>
            <input type="submit" />
        </form>
        <p> {errorMessage} </p>
    </div>
);
}

export default Login