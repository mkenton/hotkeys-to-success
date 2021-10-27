import Lesson from './Lesson'
import { useEffect, useState } from 'react'

function LessonContainer({ url }) {

    const [lessons, setLessons] = useState({})

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Head", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${url}/lessons`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('lessondata:', data)
                setLessons(data)
            }
            )
            .catch(error => console.log('error', error));
    }, []);


    return (
        <div className="lesson-container">
            <h1>LessonContainer</h1>
            <Lesson />
        </div>
    )
}
export default LessonContainer