import React, { useEffect, useContext } from 'react';
import HeaderPage from './HeaderPage';
import { LanguageContext } from '../../context/LanguageContext';
import { useTranslate } from "react-translate";

const Header = () => {
	
	const t = useTranslate("Header");

	const containerCarousel = React.createRef();

	const { isEN } = useContext( LanguageContext );

	useEffect(() => {
	
		/** Animacion **/
		
		const tagsP = Array.from(containerCarousel.current.children);
		let i = 0, n = 0, max = tagsP.length;
		let interval, timeout;

		interval = setInterval(() => {
			
			// i = elmento actual, n = elemento siguiente.

			n = i < max - 1 ? i + 1 : 0;
			tagsP[i].classList.add('animate-outside'); // Animacion de la salida del texto.
			tagsP[n].classList.add('animate-inside'); // Animacion de la entrada del texto siguiente.
			tagsP[n].classList.remove('notActive');

			timeout = setTimeout(() => {
				
				tagsP[i].classList.remove('animate-outside');
				tagsP[i].classList.add('notActive');
				tagsP[n].classList.remove('animate-inside');
				tagsP[n].classList.remove('notActive');

				i++;

				if (i === max) i = 0;

			}, 200);

    	}, 2000);

    	return () => {
			clearInterval(interval);
			clearTimeout(timeout);
    	}

	}, [containerCarousel]);

	return (
		<HeaderPage 
			containerCarousel={containerCarousel}
			isEN={isEN}
			translate={t}
		/>
	)
}

export default Header;