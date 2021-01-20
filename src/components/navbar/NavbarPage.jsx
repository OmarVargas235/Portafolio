import React from 'react';
import Icon from '../../asset/images/icon.png';
import { ReactComponent as GitHubIcon } from '../../asset/icons/github.svg';
import { ReactComponent as Linkedin } from '../../asset/icons/linkedin.svg';
import { ReactComponent as BtnToggle } from '../../asset/icons/btn_toggle.svg';

const NavbarPage = ({ menuRef }) => (
	
	<nav className="navbar navbar-expand-md bg-dark w-100 pb-md-0 pt-md-4 px-5">
		<span className="navbar-brand mr-4">
			<img src={Icon} alt="brand" />
		</span>
		
		<div className="d-flex order-md-1">
			<div className="mr-4 mr-md-0 d-flex align-items-center">
				<span className="icon"> <GitHubIcon className="mr-2" /> </span>
				<span className="icon"> <Linkedin /> </span>
			</div>
			
			<BtnToggle className="btn-toggle" onClick={() => menuRef.current.classList.toggle('menuActive')} />
		</div>

		<div className="collapse navbar-collapse" ref={menuRef}>
			<ul className="nav navbar-nav nav-pills p-3 p-sm-5 p-md-0">
				<li className="nav-item mb-3 mb-md-0">
					<span className="nav-link active" data-toggle="pill">Home</span>
				</li>

				<li className="nav-item mb-3 mb-md-0">
					<span className="nav-link" data-toggle="pill">About</span>
				</li>

				<li className="nav-item mb-3 mb-md-0">
					<span className="nav-link" data-toggle="pill">Service</span>
				</li>

				<li className="nav-item mb-3 mb-md-0">
					<span className="nav-link" data-toggle="pill">Portafolio</span>
				</li>

				<li className="nav-item mb-3 mb-md-0">
					<span className="nav-link" data-toggle="pill">Contact</span>
				</li>
			</ul>
		</div>
	</nav>
)

export default NavbarPage;