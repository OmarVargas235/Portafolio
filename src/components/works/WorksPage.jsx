import React from 'react';
import Title from '../../layaut/Title';
import CardWorks from '../../layaut/CardWorks';
import { data } from '../../utils/dataWork';

const WorksPage = ({ isEN, translate }) => (
	<section className="myWorks" id="works">
		<div className="container pt-5 pb-2">
			<Title 
				title={`${isEN ? translate('TITLE') : translate('TITULO')}`}
				text={`${isEN ? translate('DESCRIPTION') : translate('DESCRIPCION')}`}
			/>

			<div className="row container-cards">
				{
					data.map(card => (
						<CardWorks 
							key={card.id}
							data={card}
							isEN={isEN}
						/>
					))
				}
			</div>
		</div>
	</section>
)

export default WorksPage;