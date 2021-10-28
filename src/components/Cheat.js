import { useHotkeys } from 'react-hotkeys-hook';
import {useState} from 'react'

function Cheat({lesson}) {

    
    const [pressed, setPressed] = useState(false);
    // const [count, setCount] = useState(0);


    // useHotkeys(`${lesson.shortcut}`, (e) => {
    //     e.preventDefault();
    //     setCount(count => count + 1);
    //     })
    useHotkeys(`${lesson.shortcut}`, (e) => {
        e.preventDefault();
        setPressed(true);
    })

    return (
        <div className="cheat">
            
       <h3>{lesson.title}</h3>
       <p>{lesson.description}</p>
       <p><strong style={{ 'color': pressed ? 'green' : '' }}>Press {lesson.shortcut}</strong> {pressed ? "✅": ""} </p>
       <br/>
       </div>
    )
}
export default Cheat