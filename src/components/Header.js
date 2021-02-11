import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <NavLink className="navbar-brand" to="/login">Youtube</NavLink>
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/register">Register</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/logout">logout</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/change">Change Password</NavLink>
    </li>
  </ul>
</nav>
            </div>
        )
    }
}
export default Header;