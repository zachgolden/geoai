import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import Directory from './components/Directory';
import Login from './components/Login';
import Callback from './components/Callback';
import Predict from './components/PredictTest';
import { requireAuth } from './utils/authService';
import { Router, Route, browserHistory } from 'react-router-3';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

//const express = require('express');
//const app = express();
//const port = 5000;
//app.listen(port, () => console.log('Express server started on port ${port}'));

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={About}/>
        <Route path="/files" component={Directory} onEnter={requireAuth}/>
        <Route path="/callback" component={Callback} />
        <Route path="/prediction" component={Predict} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
