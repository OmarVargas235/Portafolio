import React from 'react';
import Gallery from './container/gallery';

const AboutProjectsPage = ({ data, title }) => (

	<section className="about">
		<div className="container py-5 px-5">
			<h2 className="pb-4">About</h2>

			<p className="mt-4">{data.about}</p>

			<p>For more information go to: 
				<a 
					href={data.url} 
					target="_blank"
					rel="noopener noreferrer"
				>Project site</a>
			</p>

			<aside className="mb-5">
				{
					data.technologiesUsed.map((technologies, index) => (
						<img 
							key={index}
							src={technologies} 
							alt="img" 
							className="img__technology-use mr-2"
						/>
					))
				}
			</aside>
			
			<Gallery 
				data={data}
				title={title}
			/>
		</div>
	</section>
)

export default AboutProjectsPage;