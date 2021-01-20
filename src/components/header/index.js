import React, { useEffect } from 'react';
import HeaderPage from './HeaderPage';

const Header = () => {

	const containerCarousel = React.createRef();

	useEffect(() => {
		
		const tagsP = Array.from(containerCarousel.current.children);
		let i = 0, n = 0, max = tagsP.length;

		setInterval(() => {
			
			// i = elmento actual, n = elemento siguiente.

			n = i < max - 1 ? i + 1 : 0;
			tagsP[i].classList.add('animate-outside'); // Animacion de la salida del texto.
			tagsP[n].classList.add('animate-inside'); // Animacion de la entrada del texto siguiente.
			tagsP[n].classList.remove('notActive');

			setTimeout(() => {
				
				tagsP[i].classList.remove('animate-outside');
				tagsP[i].classList.add('notActive');
				tagsP[n].classList.remove('animate-inside');
				tagsP[n].classList.remove('notActive');

				i++;

				if (i === max) i = 0;

			}, 200);

    	}, 2000);

	}, [containerCarousel]);

	return (
		<HeaderPage 
			containerCarousel={containerCarousel}
		/>
	)
}

export default Header;