import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import './App.css';
import Header from './components/Header'
import SignUp from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Button from './styles/Button';
import NavBar from './components/NavBar'
// import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';


function App() {

  // const productionURL = 'https://hotkeys-to-success-api.herokuapp.com';
  // const developmentURL = 'http://localhost:3000';
  // const url = (process.env.NODE_ENV ? productionURL : developmentURL)

  const url = 'http://localhost:3000'

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

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
  // return (
  //     <div className="main-div">{
  //       loggedIn ? ( 
  //   <Home user={user} />
  //   ):
  //         <Login setCurrentUser={setCurrentUser} url={url}/>
  // }
  // </div>



  if (loggedIn) {
    return (
      <Router>
      <div className="main-div">
        <Header/>
        <span>
          <br />
          <NavBar handleLogOut={logOut}/>
        </span>
        <Home user={user} />
      </div>
      </Router>
    )
  }
  else {
    return (
      <div className="main-div">
        <Header/>
        {showLogin ? (
          <div className="form-container" >
            <Login setCurrentUser={setCurrentUser} url={url} />
            <br/>
            <div className="toggle-container">
            <p> Don't have an account?</p>
            <Button onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
            </div>
          </div>
        ) : (
          <div className="form-container">
            <SignUp setCurrentUser={setCurrentUser} url={url} />
            <br/>
            <div className="toggle-container">
            <p>Already have an account?</p>
              <Button variant="fill" color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
              </div>
          </div>
        )}
        </div>)

        }
}

export default App;



