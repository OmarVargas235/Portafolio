import React from 'react';
import { Link } from 'react-router-dom';

const CardWorks = ({ data }) => (
	
	<div className="col-12 col-sm-6 col-lg-4 mb-4">
		<div className="card py-5 px-4">	
			<div className={`card-bg-${data.id} card-bg`}></div>

			<div className="card-body">
				<p className="card-text text-center">{data.techonologies}</p>
				<h4 className="card-title">{data.name} App</h4>
				<div className="text-center">
					<Link 
						className="btn" 
						to={`/project-details/${data.name.toLowerCase()}`}
					>VIEW DETAILS</Link>
				</div>
			</div> 
		</div>
	</div>
)

export default CardWorks;