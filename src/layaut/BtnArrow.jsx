import React from 'react';

const BtnArrow = ({ classCarrousel, dataSlide, nextOrPrevImg, Icon }) => (
				
	<div 
		className={`arrow_button ${classCarrousel}`} 
		href="#myCarousel" 
		data-slide={dataSlide}
		onClick={() => nextOrPrevImg(dataSlide)}
	>
		<Icon />
	</div>
)

export default BtnArrow;