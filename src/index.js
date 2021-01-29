import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './asset/sass/main.scss';
import './asset/bootstrap.min.css';
import App from './App';
import Project from './Project';
import Navbar from './components/navbar/';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    	<Navbar />

		<Switch>
    		<Route exact path="/" component={App} />
    		<Route path="/project-details/:name" component={Project} />
		</Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);