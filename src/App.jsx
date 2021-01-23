import React from 'react';
import './asset/sass/main.scss';
import './asset/bootstrap.min.css';
import Header from './components/header/';
import Navbar from './components/navbar/';
import AboutMe from './components/aboutMe/';
import MyService from './components/services/';
import Technologies from './components/technologies/';

const App = () => (

	<React.Fragment>
		<Header />
		<Navbar />
		<AboutMe />
		<MyService />
		<Technologies />
	</React.Fragment>
);

export default App;