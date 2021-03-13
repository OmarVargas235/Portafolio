import React, { useContext } from 'react';
import MyServicePage from './MyServicePage';
import { LanguageContext } from '../../context/LanguageContext';
import { useTranslate } from "react-translate";

const MyService = () => {

	const t = useTranslate("MyService");	
	const { isEN } = useContext( LanguageContext );

	return (
		<MyServicePage 
			isEN={isEN}
			translate={t}
		/>
	)
}

export default MyService;