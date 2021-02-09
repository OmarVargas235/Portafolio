import React, { useState, useEffect } from 'react';

const Alert = ({ typeAlert, messageAlert, index }) => {


	const [showTransition, setShowTransition] = useState(false);

	useEffect(() => {

		setTimeout(() => setShowTransition(true), (index+1) + '00');
		setTimeout(() => setShowTransition(false), '2' + index + '00');

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