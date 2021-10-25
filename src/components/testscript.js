// {
//     <div clasName="main-div">
//     <BrowserRouter>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">SignUp</Link>
//         <br />
//         {loggedIn ? (
//             <span>
//                 <br />
//                 <button onClick={logOut}>Log Out</button>
//             </span>
//         ) : null}
//         <br />
//         {/* <Link to="/">Home</Link> */}
//         <br />

//         <br />
//         <Switch>
//             <Route exact path="/">
//                 <Home user={user} />
//             </Route>

//             <Route exact path="/login">
//                 {loggedIn ? (
//                     <Redirect to="/" />
//                 ) : (
//                     <Login setCurrentUser={setCurrentUser} url={url} />
//                 )}
//             </Route>

//             <Route exact path="/signup">
//                 {loggedIn ? <Redirect to="/" /> : <SignUp url={url} />}
//             </Route>

//         </Switch>
//     </BrowserRouter>
// </div >
// }