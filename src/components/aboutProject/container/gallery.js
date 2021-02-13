import React, { useState } from 'react';
import GalleryPage from '../components/GalleryPage';

const Gallery = ({ data }) => {

	const [imgCarouselActive, setImgCarouselActive] = useState(0);

	return (
		<GalleryPage 
			data={data}
			imgCarouselActive={imgCarouselActive}
			setImgCarouselActive={setImgCarouselActive}
		/>
	)
}

export default Gallery;