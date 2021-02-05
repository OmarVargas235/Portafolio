import React from 'react';
import Header from './components/header/';
import AboutMe from './components/aboutMe/';
import MyService from './components/services/';
import Technologies from './components/technologies/';
import Works from './components/works/';
import HireMe from './components/contactMe/';

const App = () => (
	
	<React.Fragment>
		<Header />
		<AboutMe />
		<MyService />
		<Technologies />
		<Works />
		<HireMe />
	</React.Fragment>
);

export default App;