import React from 'react';
import Modal from '../container/modal';

const GalleryPage = ({ data, isImgActiveCarousel, setIsImgActiveCarousel }) => (

	<React.Fragment>
		<h2 className="pb-4">Gallery</h2>

		<aside className="mt-4">
			{
				data.gallery.map((img, index) => (
					<React.Fragment key={index}> 
						<img 
							className="img-fluid mb-2 btn" 
							src={img} 
							alt="img" 
							data-toggle="modal" 
							data-target={`#modal-${index}`}
							onClick={ () => setIsImgActiveCarousel(index) }
						/>
						
						{
							isImgActiveCarousel === index 
							? <Modal 
								index={index}
								data={data}
							/> : null
						}
					</React.Fragment>
				))
			}
		</aside>
	</React.Fragment>
)

export default GalleryPage;