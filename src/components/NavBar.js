
import { NavLink } from 'react-router-dom'
import { Button } from "../styles";


function NavBar({ user, handleLogOut }) {
    return (
            <div className="navbar">
                <nav >
                <span className="user-welcome">Welcome {user.username}!</span>
                    <button className="navbar-link" onClick={handleLogOut}>
                        Logout
                    </button>
                    
                    <NavLink exact activeClassName="active-nav" className="navbar-link" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active-nav" className="navbar-link" to="/lessons">Lessons</NavLink>

                </nav>
            </div>

    )
}

export default NavBar