import React, { useState } from 'react';
import GalleryPage from '../components/GalleryPage';

const Gallery = ({ data, title }) => {

	const [isImgActiveCarousel, setIsImgActiveCarousel] = useState(0);

	return (
		<GalleryPage 
			data={data}
			title={title}
			isImgActiveCarousel={isImgActiveCarousel}
			setIsImgActiveCarousel={setIsImgActiveCarousel}
		/>
	)
}

export default Gallery;