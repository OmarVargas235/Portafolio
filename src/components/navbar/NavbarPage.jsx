import React from 'react';
import { withRouter } from 'react-router-dom';
import Icon from '../../asset/images/icon.png';
import { ReactComponent as GitHubIcon } from '../../asset/icons/github.svg';
import { ReactComponent as Linkedin } from '../../asset/icons/linkedin.svg';
import { ReactComponent as BtnToggle } from '../../asset/icons/btn_toggle.svg';

const NavbarPage = ({ menuRef, isPositionFixed, history }) => (
	
	<nav className={`navbar navbar-expand-md bg-dark w-100 pb-md-0 px-5 ${isPositionFixed ? 'navbarFixed' : ''}`}>
		<span className="navbar-brand mr-4">
			<img 
				src={Icon} 
				alt="brand" 
				onClick={() => history.push('/home')} 
			/>
		</span>
		
		<div className="d-flex order-md-1">
			<div className="mr-4 mr-md-0 d-flex align-items-center">
				<a 
					href="https://github.com/OmarVargas235?tab=repositories"
					rel="noopener noreferrer"
					target="_blank" 
					className="icon"
					> <GitHubIcon className="mr-2" /> </a>
				<span className="icon"> <Linkedin /> </span>
			</div>
			
			<BtnToggle className="btn-toggle" onClick={() => menuRef.current.classList.toggle('menuActive')} />
		</div>

		<div className="collapse navbar-collapse" ref={menuRef}>
			<ul className="nav navbar-nav nav-pills p-3 p-sm-5 p-md-0">
				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#home" className="nav-link active">Home</a>
				</li>

				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#about" className="nav-link">About</a>
				</li>

				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#service" className="nav-link">Service</a>
				</li>

				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#works" className="nav-link">Portafolio</a>
				</li>

				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#contact" className="nav-link">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
)

export default withRouter(NavbarPage);