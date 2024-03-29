import React from 'react';
import { withRouter } from 'react-router-dom';
import Icon from '../../asset/images/icon.png';
import { ReactComponent as TheUnitedStates } from '../../asset/icons/estados-unidos-de-america.svg';
import { ReactComponent as Spain } from '../../asset/icons/espana.svg';
import { ReactComponent as GitHubIcon } from '../../asset/icons/github.svg';
// import { ReactComponent as Linkedin } from '../../asset/icons/linkedin.svg';
import { ReactComponent as BtnToggle } from '../../asset/icons/btn_toggle.svg';

const NavbarPage = ({ menuRef, isPositionFixed, isEN, setIsEN, translate, history }) => (
	
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
				<span 
					className="icon mr-2" 
					onClick={() => setIsEN(false)}
				> <Spain /> </span>
				<span 
					className="icon mr-2"
					onClick={() => setIsEN(true)}
				> <TheUnitedStates /> </span>

				<a 
					href="https://github.com/OmarVargas235"
					rel="noopener noreferrer"
					target="_blank" 
					className="icon mr-2"
					> 
						<GitHubIcon /> 
				</a>
				
				<a 
					href="https://drive.google.com/file/d/10P2K9G-5ypN4mc5Pg52ExIv-B9vuIKQD/view"
					rel="noopener noreferrer"
					target="_blank" 
					className="icon cv mr-2 font-weight-bold"
					> 
						<p className="mb-0">CV</p>
				</a>
			</div>
			
			<BtnToggle className="btn-toggle" onClick={() => menuRef.current.classList.toggle('menuActive')} />
		</div>

		<div className="collapse navbar-collapse" ref={menuRef}>
			<ul className="nav navbar-nav nav-pills p-3 p-sm-5 p-md-0">
				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#home" className="nav-link active">
						{ isEN ? translate("HOME") : translate("INICIO") }
					</a>
				</li>

				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#about" className="nav-link">
						{ isEN ? translate("ABOUT") : translate("SOBRE") }
					</a>
				</li>

				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#service" className="nav-link">
						{ isEN ? translate("SERVICE") : translate("SERVICIOS") }
					</a>
				</li>

				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#works" className="nav-link">
						{ isEN ? translate("PORTFOLIO") : translate("PORTAFOLIO") }
					</a>
				</li>

				<li className="nav-item mb-3 mb-md-0 mr-md-3">
					<a href="#contact" className="nav-link">
						{ isEN ? translate("CONTACT") : translate("CONTACTO") }
					</a>
				</li>
			</ul>
		</div>
	</nav>
)

export default withRouter(NavbarPage);