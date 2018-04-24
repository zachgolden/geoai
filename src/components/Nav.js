import React, { Component } from 'react';
import { Link } from 'react-router-3';
//import '../App.css';
import { login, logout, isLoggedIn } from '../utils/authService';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">AI in Geoscience</Link>
        </div>
        <ul className="nav navbar-nav">

        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             ( isLoggedIn() ) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ''
           }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

/*
<li>
  {
    ( isLoggedIn() ) ? <Link to="/files">Directory</Link> :  ''
  }
</li>


{
  ( isLoggedIn() ) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
}

<li>
  <Link to="/">Login</Link>
</li>
*/
