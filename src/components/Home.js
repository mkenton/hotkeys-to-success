import { Redirect } from "react-router-dom";
import { useState } from 'react'

function Home({ user }) {
  const [redirected, setRedirected] = useState("")
console.log(redirected)

  function redirect(link) {
    setRedirected(link)
  }

  if (redirected) {
    return (<Redirect to={redirected} />)
  }

  return (
    <div className="home-div">
      <h2 >Welcome to HotKeys to Success. </h2>
      <p>Learn valuable shortcuts and build muscle memory.</p>
      <p> It could save you <em>hundreds</em> of hours in the long run. </p>
      <p>Start by learning HotKeys in the <strong className="redirect-link" onClick={() => redirect("cheat_sheet")}>Cheat Sheet</strong></p>
      <p>When you're ready, put your skills to the test in the <strong className="redirect-link" onClick={() => redirect("arcade")}>Hotkey Arcade</strong></p>
    </div>
  );

}
export default Home