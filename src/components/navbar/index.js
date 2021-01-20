import React from 'react';
import NavbarPage from './NavbarPage';

const Navbar = () => {

	const menuRef = React.createRef();

	return (
		<NavbarPage 
			menuRef={menuRef}
		/>
	)
}

export default Navbar;