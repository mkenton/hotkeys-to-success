import React, { useEffect, useState } from 'react'
import './App.css';
import SignUp from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';


function App() {

  // const productionURL = 'https://hotkeys-to-success-api.herokuapp.com';
  // const developmentURL = 'http://localhost:3000';
  // const url = (process.env.NODE_ENV ? productionURL : developmentURL)

  const url = 'http://localhost:3000'

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = '';
  }

  // auto-login
  useEffect(() => {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token.length > 1
      && token !== 'undefined'
    ) {
      fetch(`${url}/auto_login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => setCurrentUser(user));
    } else {
      console.log('TOKEN NOT FOUND. Log in first.');
    }
  }, []);

//   if (loggedIn) {
//     return (
//       <Home user={user}/>
//         )
//  }
//         else {
  return (
        <div className="main-div">
          {loggedIn ? (
            <h1 className="greeting-text">Welcome back {user.username}!</h1>
          ) : (
            <div className="please-log-in">
              <h2>I'm sorry, I don't know who you are...</h2>
              <h3>Please log in below!</h3>
            </div>
          )}

          <BrowserRouter>
            <Link to="/login">Login</Link>
            <span>---||||---</span>
            <Link to="/signup">SignUp</Link>
            <br />
            {loggedIn ? (
              <span>
                <br />
                <button onClick={logOut}>Log Out</button>
              </span>
            ) : null}
            <br />
            <Link to="/">Home</Link>
            <br />

            <br />
            <Switch>
              <Route exact path="/">
                <Home user={user}/>
              </Route>

              <Route exact path="/login">
                {loggedIn ? (
                  <Redirect to="/" />
                ) : (
                  <Login setCurrentUser={setCurrentUser} url={url} />
                )}
              </Route>

              <Route exact path="/signup">
                {loggedIn ? <Redirect to="/" /> : <SignUp url={url} />}
              </Route>

              {/* <Route exact path="/auth">
            <AuthDemo loggedIn={loggedIn} />
          </Route> */}
            </Switch>
          </BrowserRouter>
        </div>
        );
}

        export default App;
