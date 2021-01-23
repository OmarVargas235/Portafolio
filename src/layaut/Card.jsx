import React from 'react';

const Card = ({ Icon, title, text }) => (
				
	<div className="card p-lg-4">
		<Icon />
	
		<div className="card-body px-3">
			<h4 className="card-title">{title}</h4>
			<p className="card-text">{text}</p>
		</div> 
	</div>
)

export default Card;