import React from 'react';

import { Route, NavLink } from 'react-router-dom';
import Login from './Login';

class Logout extends React.Component{
    render(){
        console.log('render called');
        return(
            <div>
               <h1>You have successfully Logged out!</h1>

                <NavLink to="/login">Login</NavLink>

            </div>
        )
    }
}
export default Logout;

