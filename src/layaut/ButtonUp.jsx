import React from 'react';
import { ReactComponent as ArrowUp } from '../asset/icons/arrow_up.svg';
import { useFixed } from '../customHook/useFixed';

const ButtonUp = () => {
	
	const isPositionFixed = useFixed(110);

	const handleUp = () => {

		window.scrollTo(0, 0);
		document.documentElement.style.scrollBehavior = 'smooth';
	}
	
	return (
		<div 
			className={`arrow_up d-flex justify-content-center align-items-center ${isPositionFixed ? 'arrow_up__isFixed' : ''}`}
			onClick={handleUp}
		>
			<ArrowUp />
		</div>
	)
}

export default ButtonUp;