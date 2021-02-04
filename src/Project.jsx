import React from 'react';
import AboutProjects from './components/aboutProject/';

const Project = ({ title, data, history }) => (

	<main className="project">
		<header className="bg-header">
			<div className="container">
				<h1 className="text-center text-capitalize">{title}</h1>

				<p className="text-center">{data.description}</p>
			</div>
		</header>

		<AboutProjects 
			data={data}
		/>

		<section className="more_projects">
			<div className="container py-5 px-5">
				<h2 className="pb-4 text-center">More Projects</h2>

				<aside className="row mt-4 more_projects__container-card">
					{
						data.moreProjects.map((project, index) => (
							<div 
								className="col-12 col-sm-6 col-md-4 mb-3" 
								key={index} 
								onClick={() => history.push(`/project-details/${project.params}`)}
							>
								<div className="card py-4 px-3 btn">
									<img className="img-fluid" src={project.img} alt={project.name} />

									<div className="card-body px-3">
										<h5 className="text-light">{project.name}</h5>
									</div>
								</div>
							</div>
						))
					}
				</aside>
			</div>
		</section>
	</main>
);

export default Project;