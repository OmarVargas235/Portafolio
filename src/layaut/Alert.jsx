import React, { useState, useEffect } from 'react';

const Alert = ({ typeAlert, messageAlert, index, sendLoading=false }) => {

	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		
		let tiemout2;
		const tiemout1 = setTimeout(() => setShowAlert(true), (index+1) + '00');
		if (!sendLoading) tiemout2 = setTimeout(() => setShowAlert(false), '2' + index + '00');

		return () => {

			clearTimeout(tiemout1);
			clearTimeout(tiemout2);
		}
	}, []);

	
	return (
		<div 
			className={`alert ${typeAlert ? 'alert-success' : 'alert-danger'} alert-email d-flex justify-content-center align-items-center ${showAlert ? 'alerta-show' : ''}`}
			style={{
				top: `calc(15% + ${70 * index}px)`,
			}}
		><p className="mb-0">{messageAlert}</p></div>
	)
}

export default Alert;