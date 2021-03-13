import React, { useState, useContext } from 'react';
import AboutMePage from './AboutMePage';
import { LanguageContext } from '../../context/LanguageContext';
import { useTranslate } from "react-translate";

const AboutMe = () => {
	
	const t = useTranslate("AboutMe");
	
	const { isEN } = useContext( LanguageContext );

	const [isSkills, setIsSkills] = useState(true);

	return (
		<AboutMePage
			isSkills={isSkills}
			setIsSkills={setIsSkills}
			isEN={isEN}
			translate={t}
		/>
	)
}

export default AboutMe;