import React, { useContext } from 'react';
import TechnologiesPage from './TechnologiesPage';
import { LanguageContext } from '../../context/LanguageContext';
import { useTranslate } from "react-translate";

const Technologies = () => {

	const t = useTranslate("Technologies");	
	const { isEN } = useContext( LanguageContext );

	return (
		<TechnologiesPage 
			isEN={isEN}
			translate={t}
		/>
	)
}

export default Technologies;