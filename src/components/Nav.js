/*
Zach Golden
Capstone 2018
Component for navbar, link to base/about path. If logged in displays button to handle logout.
*/
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
