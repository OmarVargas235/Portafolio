import React from 'react';
import Title from '../../layaut/Title';
import CardWorks from '../../layaut/CardWorks';
import { data } from '../../utils/dataWork';

const WorksPage = () => (
	
	<section className="myWorks" id="works">
		<div className="container pt-5 pb-2">
			<Title 
				title='My Recent Work'
				text='I am going to show the projects that I have done during this time. Some of them are personal others for some clients.'
			/>

			<div className="row container-cards">
				{
					data.map(card => (
						<CardWorks 
							key={card.id}
							data={card}
						/>
					))
				}
			</div>
		</div>
	</section>
)

export default WorksPage;