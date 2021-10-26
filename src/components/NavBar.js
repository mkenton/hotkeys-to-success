
import { NavLink } from 'react-router-dom'
import { Button } from "../styles";


function NavBar({ user, handleLogOut }) {
    return (
        <div className="navbar-container">
            <div className="navgrid1">
            <span className="user-welcome">Welcome {user.username}! </span>
            </div>
            <div className="navlink-container">
                <nav >
                    <NavLink exact activeClassName="active-nav" className="navbar-link" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active-nav" className="navbar-link" to="/cheat_sheet">Cheat Sheet</NavLink>
                    <NavLink exact activeClassName="active-nav" className="navbar-link" to="/lessons">Lessons</NavLink>

                </nav>
            </div>
            <div className="navgrid2">
            
                <u className="logout-link" onClick={handleLogOut}> Logout</u>
            </div>
        </div >
    )
}

export default NavBar