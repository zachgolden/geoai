import React, { Component } from 'react';
import { Link } from 'react-dom';
import { login, logout, isLoggedIn } from './utils/authService';
import Navigate from './components/Nav'
import Home from './components/Home';
import Login from './components/Login';
import Directory from './components/Directory';
import About from './components/About';
import logo from './img/logo.svg';
import './App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 0 ,
      pageHeader: "Test: Main Page"
    };
    this.setView.bind(this);

  }

  loadView(){
    switch(this.state.view){
      case 1:
        return (<Home />);
      case 2:
        return (<Directory />);
      case 3:
        return (<Login />);
      default:
        return (<About />);
    }
  }

  setView(viewNum){
    this.setState( {view: viewNum} );
  }


  render(){
    return(
      <div className="App">
        <div className="App-header">
          <div className="container">
            <Navbar className="MainMenu" >
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#home"> AI in Geoscience </a>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
          </div>
        </div>

				<div className="page-content container">

					{this.loadView()}

				</div>


				<div className="footer">
					<div className="container footer-content">
            <h6>Pacific Lutheran University -- Department of Computer Science</h6>
					</div>
				</div>

			</div>
    )
  }

}

export default App;



  /*
  <Nav activeKey={1}>
    <NavItem eventKey={1} onClick={() => this.setView(0)}>Login</NavItem>
    <NavItem eventKey={2} onClick={() => this.setView(1)}>Home</NavItem>
    <NavItem eventKey={3} onClick={() => this.setView(2)}>Directory</NavItem>
    <NavItem eventKey={4} onClick={() => this.setView(3)}>About</NavItem>
  </Nav>

<a href="#" onClick={() => this.setView(0)}>{this.state.pageHeader}</a>

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AI in Geoscience</h1>
        </header>
        <p className="App-intro">
          Changes made to <code>src/App.js</code> visable after save and reload.
        </p>

      </div>
    );
  }

  <div className="App-header">
    <div className="container">
      <Navbar className="MainMenu" >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home"> AI in Geoscience </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    </div>
  </div>


  <div className="App">
    <Navigate />

    <div className="page-content container">

      {this.loadView()}

    </div>


    <div className="footer">
      <div className="container footer-content">
        <h6>Pacific Lutheran University -- Department of Computer Science</h6>
      </div>
    </div>

  </div>
  */
