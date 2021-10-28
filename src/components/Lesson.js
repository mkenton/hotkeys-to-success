import { useHotkeys } from 'react-hotkeys-hook';
import {useState} from 'react'

function Lesson({lessons}) {

    const [count, setCount] = useState(0);

    useHotkeys(`command+a`, () => setCount(count => count + 1));

    return (
        <div className="lesson">
       <h3>Lesson</h3>
       <span>Pressed 'command+a' key {count} times.</span>
       </div>
    )
}
export default Lesson