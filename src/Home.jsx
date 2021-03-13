import React from 'react';
import Header from './components/header/';
import AboutMe from './components/aboutMe/';
import MyService from './components/services/';
import Technologies from './components/technologies/';
import Works from './components/works/';
import HireMe from './components/contactMe/';
import Footer from './layaut/Footer';

const Home = () => (
	
	<React.Fragment>
		<Header />
		<AboutMe />
		<MyService />
		<Technologies />
		<Works />
		<HireMe />
		<Footer color="#101010" />
	</React.Fragment>
);

export default Home;