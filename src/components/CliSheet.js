import Cheat from './Cheat'

function CLI({ lessons, user }) {
    // let lesson_event = {
    //     "user_id": user.id,
    //     "lesson_id": 1,
    //     "status": "practiced",
    // };

    return (
 
    <span className="editor-sheet">

    {lessons.filter((lesson) => lesson.category === "CLI")
    .map((lesson) => (
        <Cheat 
        key={lesson.id}
        lesson={lesson}/>
    ))}
    <h2>Feel ready? Mark lesson <button className="complete-button"> Complete</button></h2>
     </span>
    )
}
export default CLI