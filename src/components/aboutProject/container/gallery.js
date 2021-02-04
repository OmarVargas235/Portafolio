import React, { useState } from 'react';
import GalleryPage from '../components/GalleryPage';

const Gallery = ({ data }) => {

	const [isImgActiveCarousel, setIsImgActiveCarousel] = useState(0);

	return (
		<GalleryPage 
			data={data}
			isImgActiveCarousel={isImgActiveCarousel}
			setIsImgActiveCarousel={setIsImgActiveCarousel}
		/>
	)
}

export default Gallery;