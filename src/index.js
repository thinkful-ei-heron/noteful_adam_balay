import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Store'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(<BrowserRouter><App Store={Store}/></BrowserRouter>, document.getElementById('root'));


