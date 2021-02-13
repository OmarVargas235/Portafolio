import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './asset/sass/main.scss';
import './asset/bootstrap.min.css';
import App from './App';
import Project from './Project';
import Navbar from './components/navbar/';
import ButtonUp from './layaut/ButtonUp';
import { data } from './utils/dataApp';

document.documentElement.style.scrollBehavior = 'smooth';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    	<Navbar />
      <ButtonUp />

  		<Switch>
      		<Route exact path="/home" component={App} />
      		<Route path="/project-details/:name" render={({ history, match }) => {
             
            const dataProject = data[match.params.name];

            return (
                <Project 
                  title={match.params.name}
                  data={dataProject}
                  history={history}
                />
             )
          }} />
          
          <Redirect from='/' to='/home' />
  		</Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);