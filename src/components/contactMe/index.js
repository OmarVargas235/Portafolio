import React, { useState, useContext } from 'react';
import HireMePage from './HireMePage';
import { LanguageContext } from '../../context/LanguageContext';
import { useTranslate } from "react-translate";

console.log(process.env.REACT_APP_BACKEND_URL)

const HireMe = () => {
	
	const t = useTranslate("HireMe");	
	const { isEN } = useContext( LanguageContext );

	const [messagesAlert, setMessagesAlert] = useState({});
	const [loadingSendEmail, setLoadingSendEmail] = useState(false);
	const [data, setData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = e => {

		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	}

	const handleSubmit = e => {
		
		e.preventDefault();

		const url = process.env.REACT_APP_BACKEND_URL + '/send-email';
		
		// Enviando el email
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(data),
			mode: 'cors',
		})
		.then(res => res.json())
		.then(res => {

			setMessagesAlert(res);
			setTimeout(() => setMessagesAlert({}), 2700); // Quitando el componente alerta
			setLoadingSendEmail(false); // Quitando el componente alert con el mensaje "Loading email..."
		})
		.catch(() => {

			const err = {
				ok: false,
				message: ['A problem has occurred']
			}
		
			setMessagesAlert(err);
			setTimeout(() => setMessagesAlert({}), 2700); // Quitando el componente alerta
			setLoadingSendEmail(false); // Quitando el componente alert con el mensaje "Loading email..."
		});

		setLoadingSendEmail(true);
	}

	return (
		<HireMePage 
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			messagesAlert={messagesAlert}
			loadingSendEmail={loadingSendEmail}
			isEN={isEN}
			translate={t}
		/>
	)
}

export default HireMe;