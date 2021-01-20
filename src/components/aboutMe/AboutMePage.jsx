import React from 'react';
import Me from '../../asset/images/me.png';

const AboutMePage = ({ isSkills, setIsSkills }) => (
	
	<div className="abotMe">
		<div className="container">
			<div className="row py-5">
				<div className="col-6">
					<img src={Me} alt="me" className="img-fluid img-thumbnail" />	
				</div>
				
				<div className="col-6">	
					<h2 className="mb-4">About Me</h2>
				
					<p>I am Software Developer in the north santander Colombia. Lastly, I have been working in React, developing personal apps and projects. I have knowledge in JavaScript, HTML, Css, Node and many others Frameworks. I like ReactJS library for frontend.
					</p>
				
					<ul className="nav navbar-nav nav-pills my-4 d-flex flex-row">
						<li className="nav-item ml-0">
							<span 
								className="nav-link pb-2 active" 
								data-toggle="pill"
								onClick={() => setIsSkills(true)}
							>Main skills</span>
						</li>

						<li className="nav-item ml-2">
							<span 
								className="nav-link pb-2" 
								data-toggle="pill"
								onClick={() => setIsSkills(false)}
							>Education & Certification</span>
						</li>
					</ul>

					{
						isSkills ?
						<article>
							<aside className="mb-3">
								<p className="mb-1">HTML, CSS, SASS, STYLED-COMPONENTS, BOOSTRAP. - Layout designer</p>
								<p>Layout of web pages and applications</p>
							</aside>
					
							<aside className="mb-3">
								<p className="mb-1">React - Frontend</p>
								<p>I use React for interactivity with the frontend</p>
							</aside>
					
							<aside>
								<p className="mb-1">Node, Mongo, Express. - Backend</p>
								<p>Development using these technologies to create the backend of the applications</p>
							</aside>
						</article>

						: <article>
							<aside>
								<p>Udemy</p>
							</aside>
					
							<aside className="mb-3">
								<p>Edteam</p>
							</aside>
						</article>
					}
				</div>
			</div>
		</div>
	</div>
)

export default AboutMePage;