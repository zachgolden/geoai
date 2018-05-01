import React, { Component } from 'react';
import { Link } from 'react-router-3';
//import '../App.css';
import { login, logout, isLoggedIn } from '../utils/authService';
//import {Nav, NavItem } from 'react-bootstrap';

class Nav extends Component {

render() {
    return (
    <div class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            <img alt="" src=""></img>
            <Link className="navbar-brand" to="/">AI in Geoscience</Link>
          </a>
        </div>
        <p className="nav navbar-nav navbar-right">
          <li>
           {
             ( isLoggedIn() ) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ''
           }
          </li>
        </p>
      </div>
    </nav>
  </div>

    );
  }
}

export default Nav;

/*
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
