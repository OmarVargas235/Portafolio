import React, { useContext } from 'react';
import NavbarPage from './NavbarPage';
import { useFixed } from '../../customHook/useFixed';
import { LanguageContext } from '../../context/LanguageContext';
import { useTranslate } from "react-translate";

const Navbar = () => {
	
	const t = useTranslate("Navbar");

	const menuRef = React.createRef();
	const isPositionFixed = useFixed(80);

	const { isEN, setIsEN } = useContext( LanguageContext );

	return (
		<NavbarPage 
			menuRef={menuRef}
			isPositionFixed={isPositionFixed}
			isEN={isEN}
			setIsEN={setIsEN}
			translate={t}
		/>
	)
}

export default Navbar;