import React from 'react';
import { ReactComponent as Github } from '../asset/icons/github.svg';
// import { ReactComponent as Linkedin } from '../asset/icons/linkedin.svg';

const FooterPage = ({ color }) => (
	<footer style={{backgroundColor: color}} className="p-4 footer d-flex justify-content-between">
		<span className="d-flex">
			<a 
				className="footer__icon mr-2" 
				href="https://github.com/OmarVargas235"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Github />
			</a>

			<a
				className="footer__icon font-weight-bold"
				href="https://drive.google.com/file/d/10P2K9G-5ypN4mc5Pg52ExIv-B9vuIKQD/view"
				rel="noopener noreferrer"
				target="_blank"
			>
				CV
			</a>
		</span>

		<span className="ml-5 pt-4">Copyright © {new Date().getFullYear()} OrV. All Rights Reserved.</span>
	</footer>
)

export default FooterPage;