import { Redirect } from "react-router-dom";
import { useEffect, useState } from 'react'

function Home({ url, user, setLessonEvents, lessonEvents }) {
  const [redirected, setRedirected] = useState("")
  console.log(redirected)

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

    fetch(`${url}/lesson_events`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('lesson_event data:', data)
        setLessonEvents(data)
      }
      )
      .catch(error => console.log('error', error));
  }, []);

  function redirect(link) {
    setRedirected(link)
  }

  if (redirected) {
    return (<Redirect to={redirected} />)
  }

  return (
    <>
      <div className="home-div">
        <h2 >Welcome to HotKeys to Success. </h2>
        <p>Learn valuable shortcuts and build muscle memory.</p>
        <p> It could save you <em>hundreds</em> of hours in the long run. </p>
        <div className="home-prompt-div">
          <span className="home-prompt">Start by learning HotKeys in the <strong className="redirect-link" onClick={() => redirect("cheat_sheet")}>Cheat Sheet</strong></span>
          <span className="home-prompt">When you're ready, put your skills to the test in the <strong className="redirect-link" onClick={() => redirect("arcade")}>Hotkey Arcade</strong></span>
        </div>
      </div>
      <div>

      </div>
    </>
  );

}
export default Home