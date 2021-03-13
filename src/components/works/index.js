import React, { useContext } from 'react';
import WorksPage from './WorksPage';
import { LanguageContext } from '../../context/LanguageContext';
import { useTranslate } from "react-translate";

const Works = () => {

	const t = useTranslate("Works");	
	const { isEN } = useContext( LanguageContext );

	return (
		<WorksPage 
			isEN={isEN}
			translate={t}
		/>
	)
}

export default Works;