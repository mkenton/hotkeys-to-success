import Lesson from './Lesson'
// import { useEffect, useState } from 'react'

function LessonContainer({ user, lessons}) {




    return (
        <div className="lesson-container">
            <h1>Arcade</h1>
            <Lesson lesson={lessons}/>
        </div>
    )
}
export default LessonContainer