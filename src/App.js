
import './App.css';
import React from 'react';
import Header from './components/Header';
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';

class App extends React.Component{
   render(){

    return(
      <div>
             <HashRouter>
        <Header></Header>

         <Route path="/login" component={Login}></Route>
         <Route path="/logout" component={Logout}></Route>
         <Route path="/register" component={Register}></Route>
         <Route path="/dashboard" component={Dashboard}></Route>
        </HashRouter>
      </div>
    )

   }


}




export default App;
