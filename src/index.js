import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

//const express = require('express');
//const app = express();
//const port = 5000;
//app.listen(port, () => console.log('Express server started on port ${port}'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
