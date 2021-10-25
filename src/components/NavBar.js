
import {NavLink} from 'react-router-dom'
import  {Button}  from "../styles";


function NavBar({handleLogOut}){
    return(
    <nav className="navbar">
          <Button className="logout-link" onClick={handleLogOut}>
            Logout
          </Button>
          <NavLink exact activeClassName="active-nav" className="navbar-link" to="/">Home</NavLink>
          <NavLink exact activeClassName="active-nav" className="navbar-link" to="/lessons">Lessons</NavLink>

        </nav>
    )
}

export default NavBar