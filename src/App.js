import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import SignUp from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Button from './styles/Button';
import NavBar from './components/NavBar'
import CheatSheet from './components/CheatSheet'
import LessonContainer from './components/LessonContainer';
// import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';


function App() {

  // console.log("proces.env = " , process.env)
  const productionURL = 'https://hotkeys-to-success-api.herokuapp.com';
  // const developmentURL = 'http://localhost:3000';
  // const url = (process.env.NODE_ENV === "production" ? productionURL : developmentURL)

  const url = productionURL
  // console.log("api url: ", url)

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [lessons, setLessons] = useState({})
 

 

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = '';
  }

  //fetch lessons
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Head", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${url}/lessons`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('lessondata:', data)
        setLessons(data)
      }
      )
      .catch(error => console.log('error', error));
  }, []);

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


  if (loggedIn) {
    return (
      <Router>
        <div className="main-div">
          <Header />
          <NavBar user={user} handleLogOut={logOut} />
          <Switch>
            <Route path="/cheat_sheet">
              <CheatSheet user={user} lessons={lessons} />
            </Route>
            <Route path="/arcade">
              <LessonContainer user={user} lessons={lessons} />
            </Route>
            <Route exact path="/">
              <Home user={user} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    )
  }
  else {
    return (
      <div className="main-div">
        <Header />
        <div className="form-container" >
          <h2>Welcome to HotKeys To Success!</h2>
          <p>Sign up to begin your mastery of hotkeys and shortcuts!</p>
          {showLogin ? (
            <>

              <Login setCurrentUser={setCurrentUser} url={url} />
              <br />
              <div className="toggle-container">
                <p> Don't have an account?</p>
                <Button variant="outline" color="secondary" onClick={() => setShowLogin(false)}>
                  Sign Up
                </Button>
              </div>
            </>
          ) : (
            <>
              <SignUp setCurrentUser={setCurrentUser} url={url} />
              <br />
              <div className="toggle-container">
                <p>Already have an account?</p>
                <Button variant="outline" onClick={() => setShowLogin(true)}>
                  Log In
                </Button>
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>)

  }
}

export default App;



