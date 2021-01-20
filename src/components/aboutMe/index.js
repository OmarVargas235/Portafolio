import React, { useState } from 'react';
import AboutMePage from './AboutMePage';

const AboutMe = () => {

	const [isSkills, setIsSkills] = useState(true);

	return (
		<AboutMePage 
			isSkills={isSkills}
			setIsSkills={setIsSkills}
		/>
	)
}

export default AboutMe;