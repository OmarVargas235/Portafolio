import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './asset/sass/main.scss';
import './asset/bootstrap.min.css';
import Home from './Home';
import Project from './Project';
import Navbar from './components/navbar/';
import ButtonUp from './layaut/ButtonUp';
import { dataEN, dataES } from './utils/dataProjects';
import { LanguageContext } from './context/LanguageContext';
import { TranslatorProvider } from "react-translate";
import { translations } from './utils/translates';

const App = () => {
	
	const { isEN } = useContext( LanguageContext );
	
	return (
		
		<TranslatorProvider translations={translations}>
			<Router>
				<Navbar />

				<ButtonUp />

				<Switch>
					<Route exact path="/home" component={Home} />
					<Route path="/project-details/:name" render={({ history, match }) => {

						const dataProject = isEN ? dataEN[match.params.name] : dataES[match.params.name];

						return (
							<Project 
								title={match.params.name}
								data={dataProject}
								isEN={isEN}
								history={history}
							/>
						)
					}} />

					<Redirect from='/' to='/home' />
				</Switch>
			</Router>
		</TranslatorProvider>
	)
}

export default App;