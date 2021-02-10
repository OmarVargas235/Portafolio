import React, { useState, useEffect } from 'react';

const Alert = ({ typeAlert, messageAlert, index, sendLoading=false }) => {


	const [showTransition, setShowTransition] = useState(false);

	useEffect(() => {
		
		let tiemout2;
		const tiemout1 = setTimeout(() => setShowTransition(true), (index+1) + '00');
		if (!sendLoading) tiemout2 = setTimeout(() => setShowTransition(false), '2' + index + '00');

		return () => {

			clearTimeout(tiemout1);
			clearTimeout(tiemout2);
		}
	}, []);

	
	return (
		<div 
			className={`alert ${typeAlert ? 'alert-success' : 'alert-danger'} alert-email d-flex justify-content-center align-items-center ${showTransition ? 'alerta-show' : ''}`}
			style={{
				top: `calc(15% + ${70 * index}px)`,
			}}
		><p className="mb-0">{messageAlert}</p></div>
	)
}

export default Alert;