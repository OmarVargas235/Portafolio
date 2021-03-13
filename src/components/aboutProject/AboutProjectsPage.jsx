import React from 'react';
import Gallery from './container/gallery';

const AboutProjectsPage = ({ data, isEN, translate }) => (

	<section className="about">
		<div className="container py-5 px-5">
			<h2 className="pb-4">{isEN ? translate('ABOUT') : translate('SOBRE')}</h2>

			<p className="mt-4">{data.about}</p>

			<p>{isEN ? translate('DEMO') : translate('DEMOSTRACION')}
				<a 
					href={data.url} 
					target="_blank"
					rel="noopener noreferrer"
				>{isEN ? translate('SITE_PROJECT') : translate('SITIO_PROYECTO')}</a>
			</p>

			<aside className="mb-5">
				{
					data.technologiesUsed.map((technologies, index) => (
						<img 
							key={index}
							src={technologies} 
							alt="img" 
							className="img__technology-use mr-2 mt-1"
						/>
					))
				}
			</aside>
			
			<Gallery 
				data={data}
				isEN={isEN}
			/>
		</div>
	</section>
)

export default AboutProjectsPage;