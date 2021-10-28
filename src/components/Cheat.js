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
            
       <p className="key-code" style={{ 'background-color': pressed ? 'rgb(184, 228, 184)' : '' }}>{lesson.title} </p>
       <p>({lesson.shortcut}): <strong>{lesson.description}</strong> </p>
       <br/>
       </div>
    )
}
export default Cheat