import React from 'react';
import './asset/sass/main.scss';
import './asset/bootstrap.min.css';
import Header from './components/header/';
import Navbar from './components/navbar/';
import AboutMe from './components/aboutMe/';
import MyService from './components/services/';

const App = () => (

	<React.Fragment>
		<Header />
		<Navbar />
		<AboutMe />
		<MyService />
	</React.Fragment>
);

export default App;