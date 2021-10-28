
import { NavLink } from 'react-router-dom'
// import { Button } from "../styles";


function NavBar({ user, handleLogOut }) {
    return (
        <div className="navbar-container">
            <div className="navgrid1">
            <span className="user-welcome">Welcome <strong>{user.display_name}</strong>! | <u className="logout-link" onClick={handleLogOut}>Logout</u></span>
            </div>
            <div className="navlink-div">
                <nav className="navlink-container">
                    <NavLink exact activeClassName="active-nav" className="navbar-link" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active-nav" className="navbar-link" to="/cheat_sheet">Cheat Sheet</NavLink>
                    <NavLink exact activeClassName="active-nav" className="navbar-link" to="/arcade">Arcade</NavLink>

                </nav>
            </div>
            <div className="navgrid1">
            
            </div>
        </div >
    )
}

export default NavBar