import EditingSheet from './EditingSheet'
import CliSheet from './CliSheet'
import { useState } from 'react'

function CheatSheet({ lessons, user }) {
    const [showEditing, setShowEditing] = useState(false)
    const [showCli, setShowCli] = useState(false)

    function handleEditClick() {
        setShowEditing(true)
        setShowCli(false)
    }
    function handleCliClick() {
        setShowCli(true)
        setShowEditing(false)
    }


    return (
        <>
            <div className="home-div">
                <h1>CHEAT SHEET</h1>
                <p>Practice useful shortcuts!</p>
                <div >
                    <h2>Select Lesson</h2>
                    <button className="cheat-buttons" onClick={handleEditClick}>VS Code Shortcuts</button>
                    <button className="cheat-buttons" onClick={handleCliClick}>CLI Shortcuts</button>
                </div>
            </div>

            {showEditing ?
                <div className="home-div">
                    <h2> VS Code HotKeys: </h2>
                    <h3>Practice each shortcut by pressing the corresponding HotKeys.</h3>
                    <span className="cheat-span"> <EditingSheet user={user} lessons={lessons} /> </span>
                </div>
                : ""}

            {showCli ?
                <div className="home-div">
                    <h2> Command Line Interface HotKeys: </h2>
                    <h3>Practice each shortcut by pressing the corresponding HotKeys.</h3>
                    <span className="cheat-span"> <CliSheet user={user} lessons={lessons} /> </span>
                </div>
                : ""}

        </>
    )


    //map over fetched shortcut lessons
}
export default CheatSheet