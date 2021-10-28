import Cheat from './Cheat'

function CheatSheet({ lessons }) {

    return (
     <div className="home-div">
     <h1>Code Editor Shorcuts</h1>
     <p>Check out the useful shortcuts below. Don't forget to test them out by pressing the corresponding hotkeys!</p>
    <span className="editor-sheet">
        {/* TODO: map for editor lessons, create component to contain them */}
    {lessons.map((lesson) => (
        <Cheat 
        key={lesson.id}
        lesson={lesson}/>
    ))}
     </span>

     {/* TODO:  map for CLI lessons, create component to contain them */}
    {/* <span className="CLI-sheet">
    {lessons.map((lesson) => (
        <Cheat 
        key={lesson.id}
        lesson={lesson}/>
    ))}
     </span> */}
     </div>
    )


    //map over fetched shortcut lessons
}
export default CheatSheet