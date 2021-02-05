import { useState, useEffect } from 'react';

export const useFixed = (n=80) => {

	const [isPositionFixed, setIsPositionFixed] = useState(false);

	useEffect(() => {
		
		function postionFixed() {

			if (window.scrollY > n) setIsPositionFixed(true);
			else if (window.scrollY === 0) setIsPositionFixed(false);
		}

		window.addEventListener('scroll', postionFixed);
	
		return () => window.removeEventListener('scroll', postionFixed);

	}, [isPositionFixed]);

	return isPositionFixed;
}