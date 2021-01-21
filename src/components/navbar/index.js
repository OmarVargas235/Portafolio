import React, { useState, useEffect } from 'react';
import NavbarPage from './NavbarPage';

const Navbar = () => {

	const menuRef = React.createRef();

	const [isPositionFixed, setIsPositionFixed] = useState(false);

	useEffect(() => {
		
		// Crea el efecto de rebote del menu.

		function postionFixed() {

			if (window.scrollY > 80) setIsPositionFixed(true);
			else if (window.scrollY === 0) setIsPositionFixed(false);
		}

		window.addEventListener('scroll', postionFixed);
	
		return () => window.removeEventListener('scroll', postionFixed);

	}, [isPositionFixed]);

	return (
		<NavbarPage 
			menuRef={menuRef}
			isPositionFixed={isPositionFixed}
		/>
	)
}

export default Navbar;