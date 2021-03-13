import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
	
	const [isEN, setIsEN] = useState(true);

	return (
		<LanguageContext.Provider value={{
			isEN,
			setIsEN,
		}}>
			{ children }
		</LanguageContext.Provider>
	)
}

export default LanguageContextProvider;