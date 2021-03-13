import React, { useState } from 'react';
import GalleryPage from '../components/GalleryPage';

const Gallery = ({ data, isEN }) => {

	const [imgCarouselActive, setImgCarouselActive] = useState(0);

	return (
		<GalleryPage 
			data={data}
			imgCarouselActive={imgCarouselActive}
			setImgCarouselActive={setImgCarouselActive}
			isEN={isEN}
		/>
	)
}

export default Gallery;