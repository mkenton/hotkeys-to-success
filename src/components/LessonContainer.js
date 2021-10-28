import Lesson from './Lesson'
// import { useEffect, useState } from 'react'

function LessonContainer({ user, lessons}) {




    return (
        <div className="lesson-container">
            <Lesson lesson={lessons}/>
        </div>
    )
}
export default LessonContainer