import Cheat from './Cheat'

function EditingSheet({ lessons }) {

    return (
 
    <span className="editor-sheet">
        {/* TODO: map for editor lessons, create component to contain them */}
    {lessons.filter((lesson) => lesson.category === "Editing")
    .map((lesson) => (
        <Cheat 
        key={lesson.id}
        lesson={lesson}/>
    ))}
     </span>
    )


    //map over fetched shortcut lessons
}
export default EditingSheet