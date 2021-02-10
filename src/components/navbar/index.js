import React from 'react';
import NavbarPage from './NavbarPage';
import { useFixed } from '../../customHook/useFixed';

const Navbar = () => {
	
	const menuRef = React.createRef();
	const isPositionFixed = useFixed(80);

	return (
		<NavbarPage 
			menuRef={menuRef}
			isPositionFixed={isPositionFixed}
		/>
	)
}

export default Navbar;