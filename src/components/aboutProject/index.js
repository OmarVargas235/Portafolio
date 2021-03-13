import React, { useContext } from 'react';
import AboutProjectsPage from './AboutProjectsPage';
import { LanguageContext } from '../../context/LanguageContext';
import { useTranslate } from "react-translate";

const AboutProjects = ({ data }) => {
	
	const t = useTranslate("AboutProjects");	
	const { isEN } = useContext( LanguageContext );

	return (
		<AboutProjectsPage 
			data={data}
			isEN={isEN}
			translate={t}
		/>
	)
}

export default AboutProjects;