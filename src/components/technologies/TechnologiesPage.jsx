import React from 'react';
import Title from '../../layaut/Title';
import { data } from '../../utils/dataTechnologies';

const TechnologiesPage = ({ isEN, translate }) => (
	<section className="technologies">
		<div className="container py-5">
			<Title 
				title={`${isEN ? translate('TITLE') : translate('TITULO')}`}
				text={`${isEN ? translate('DESCRIPTION') : translate('DESCRIPCION')}`}
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
	</section>
)

export default TechnologiesPage;