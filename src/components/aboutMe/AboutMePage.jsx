import React from 'react';
import SkillsPage from './SkillsPage';
import EducationPage from './EducationPage';
import Me from '../../asset/images/me.png';

const AboutMePage = ({ isSkills, setIsSkills }) => (
	
	<section className="abotMe" id="about">
		<div className="container pt-5">
			<div className="row py-5">
				<div className="col-12 col-md-6 d-flex align-items-center">
					<img src={Me} alt="me" className="img-fluid" />	
				</div>
				
				<div className="col-12 col-md-6 mt-4 mt-md-0 d-flex flex-column justify-content-center">	
					<h2 className="mb-4">About Me</h2>
				
					<p>I am Software Developer in the north santander Colombia. Lastly, I have been working in React, developing personal apps and projects. I have knowledge in JavaScript, HTML, Css, Node and many others Frameworks. I like ReactJS library for frontend.
					</p>
				
					<ul className="nav navbar-nav nav-pills mb-4 mt-0 my-md-4 d-flex flex-row">
						<li className="nav-item ml-0">
							<span 
								className="nav-link pb-2 active"
								data-toggle="pill"
								onClick={() => setIsSkills(true)}
							>Main skills</span>
						</li>

						<li className="nav-item ml-4">
							<span 
								className="nav-link pb-2" 
								data-toggle="pill"
								onClick={() => setIsSkills(false)}
							>Education</span>
						</li>
					</ul>

					{ isSkills ? <SkillsPage /> : <EducationPage /> }
				</div>
			</div>
		</div>
	</section>
)

export default AboutMePage;