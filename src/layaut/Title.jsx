import React from 'react';

const Title = ({ title, text }) => (
	
	<React.Fragment>
		<h2 className="mt-5 text-center">{title}</h2>
		<p className="text-center px-5">{text}</p>
	</React.Fragment>
)

export default Title;