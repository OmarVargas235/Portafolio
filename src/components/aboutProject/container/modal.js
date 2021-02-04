import React, { useState, useEffect } from 'react';
import ModalPage from '../components/ModalPage';

const Modal = ({ index, data }) => {

	const [fullscreen, setFullscreen] = useState(false);
	const [numberImg, setNumberImg] = useState(index);

	const modalRef = React.createRef();
	
	useEffect(() => {

		if (document.fullscreenElement && !fullscreen) document.exitFullscreen(); // Sale de pantalla completa.
		else if (fullscreen) modalRef.current.requestFullscreen(); // Pantalla completa.
	
	}, [modalRef, fullscreen]);

	const nextOrPrevImg = (nextOrPrev) => {
		
		const nImg = data.gallery.length;
		let posImg = numberImg;
		nextOrPrev === 'next' ? posImg += 1 : posImg -= 1;

		if (posImg === -1) setNumberImg(nImg - 1);
		else if (posImg === nImg) setNumberImg(0);
		else setNumberImg(posImg);
	}

	return (
		<ModalPage 
			index={index}
			data={data}
			fullscreen={fullscreen}
			setFullscreen={setFullscreen}
			modalRef={modalRef}
			numberImg={numberImg}
			nextOrPrevImg={nextOrPrevImg}
		/>
	)
}

export default Modal;