import React from 'react';
import { ReactComponent as Github } from '../asset/icons/github.svg';
import { ReactComponent as Linkedin } from '../asset/icons/linkedin.svg';

const FooterPage = ({ color }) => (
	<footer style={{backgroundColor: color}} className="p-4 footer d-flex justify-content-between">
		<span className="d-flex">
			<div className="footer__icon mr-2">
				<Github />
			</div>

			<div className="footer__icon">
				<Linkedin />
			</div>
		</span>

		<span className="ml-5 pt-4">Copyright © {new Date().getFullYear()} JdL. All Rights Reserved.</span>
	</footer>
)

export default FooterPage;