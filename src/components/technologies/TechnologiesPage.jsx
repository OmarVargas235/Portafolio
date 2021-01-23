import React from 'react';
import html from '../../asset/images/html-5-Logo.png';
import css from '../../asset/images/css-3.png';
import javascript from '../../asset/images/JavaScript-Logo.png';
import bootstrap from '../../asset/images/bootstrap-Logo.png';
import styledComponent from '../../asset/images/styled-component.png';
import react from '../../asset/images/react-Logo.png';
import redux from '../../asset/images/redux-Logo.png';
import node from '../../asset/images/node-Logo.png';
import mongodb from '../../asset/images/mongodb-Logo.png';
import github from '../../asset/images/github-Logo.png';
import socket from '../../asset/images/socket-Logo.png';

const TechnologiesPage = () => (
	
	<article className="technologies">
		<h2>Frameworks and Technologies</h2>
		<p>These are some of the libraries, technologies and languages ​​that I have used in the projects that I have done.</p>

		<div>
			<img src={html} alt="html5" />
			<img src={css} alt="css3" />
			<img src={javascript} alt="javascript" />
			<img src={bootstrap} alt="bootstrap" />
			<img src={styledComponent} alt="styledComponent" />
			<img src={react} alt="react" />
			<img src={redux} alt="redux" />
			<img src={node} alt="node" />
			<img src={mongodb} alt="mongodb" />
			<img src={github} alt="github" />
			<img src={socket} alt="socket" />
		</div>
	</article>
)

export default TechnologiesPage;