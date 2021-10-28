import Cheat from './Cheat'

function CLI({ lessons }) {

    return (
 
    <span className="editor-sheet">
        {/* TODO: map for editor lessons, create component to contain them */}
    {lessons.filter((lesson) => lesson.category === "CLI")
    .map((lesson) => (
        <Cheat 
        key={lesson.id}
        lesson={lesson}/>
    ))}
     </span>
    )


    //map over fetched shortcut lessons
}
export default CLI