import React from 'react';
import Title from '../../layaut/Title';
import { data } from '../../utils/dataTechnologies';

const TechnologiesPage = () => (
	
	<article className="technologies">
		<div className="container py-5">
			<Title 
				title='Frameworks and Technologies'
				text='These are some of the libraries, technologies and languages ​​that I have used in the projects that I have done.'
			/>
			
			<div className="grid-technologies mt-5">
				{
					data.map((technologies) => (
						<div className="text-center" key={technologies.id}>
							<img src={technologies.name} alt={technologies.name} className={technologies.class} />
						</div>
					))
				}
			</div>
		</div>
	</article>
)

export default TechnologiesPage;