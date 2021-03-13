import React, { useState, useEffect } from 'react';
import ModalPage from '../components/ModalPage';

const Modal = ({ index, data, setImgCarouselActive, isEN }) => {

	const [fullscreen, setFullscreen] = useState(false);
	const [numberImg, setNumberImg] = useState(index);
	const [disabledArrow, setDisabledArrow] = useState(false);

	const modalRef = React.createRef();
	
	useEffect(() => {

		if (document.fullscreenElement && !fullscreen) document.exitFullscreen(); // Sale de pantalla completa.
		else if (fullscreen) modalRef.current.requestFullscreen(); // Pantalla completa.
	
	}, [modalRef, fullscreen]);

	const nextOrPrevImg = (nextOrPrev) => {
		
		if (disabledArrow) return;

		const nImg = data.gallery.length;
		let posImg = numberImg;
		nextOrPrev === 'next' ? posImg += 1 : posImg -= 1;

		if (posImg === -1) setNumberImg(nImg - 1); // Si es la primera imagen el contador toma el numero de la ultima imagen
		else if (posImg === nImg) setNumberImg(0); // Si es la ultima imagen reinicia el contador
		else setNumberImg(posImg);

		// Los 600ms es el tiempo que tarda en pasar de una imagen a otra en el carrusel
		setDisabledArrow(true);
		setTimeout(() => setDisabledArrow(false), 600);
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
			setImgCarouselActive={setImgCarouselActive}
			isEN={isEN}
		/>
	)
}

export default Modal;