import React, { useState } from 'react';
import HireMePage from './HireMePage';

const HireMe = () => {
	
	const [messagesAlert, setMessagesAlert] = useState({});
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

		const url = process.env.REACT_APP_BACKEND_URL;
		
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(data) 
		})
		.then(res => res.json())
		.then(res => {

			setMessagesAlert(res);
			setTimeout(() => setMessagesAlert({}), 2700);
		})
		.catch(err => console.log("err!!!!!!!!", err));
	}

	return (
		<HireMePage 
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			messagesAlert={messagesAlert}
		/>
	)
}

export default HireMe;