import { useHotkeys } from 'react-hotkeys-hook';
import {useState} from 'react'

function Lesson({lessons}) {

    const [count, setCount] = useState(0);

    useHotkeys(`control+shift+d`, () => setCount(count => count + 1));

    return (
        <div className="home-div">
       <h1>HotKey Arcade</h1>
       <h2>This section is under construction</h2>
       <span> Pressed <p className="key-code"> ctrl+shift+D</p> {count} times.</span>
       </div>
    )
}
export default Lesson