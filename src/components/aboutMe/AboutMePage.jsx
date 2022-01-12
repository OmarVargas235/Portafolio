import React from 'react';
import SkillsPage from './SkillsPage';
import EducationPage from './EducationPage';
import Me from '../../asset/images/me_me.jpg';

const AboutMePage = ({ isSkills, setIsSkills, isEN, translate }) => (
	
	<section className="abotMe" id="about">
		<div className="container pt-5">
			<div className="row py-5">
				<div className="col-12 col-md-6 d-flex align-items-center">
					<img src={Me} alt="me" className="img-fluid" />	
				</div>
				
				<div className="col-12 col-md-6 mt-4 mt-md-0 d-flex flex-column justify-content-center">	
					<h2 className="mb-4">{isEN ? translate('TITLE') : translate('TITULO')}</h2>
				
					<p>{isEN ? translate('DESCRIPTION') : translate('DESCRIPCION')}</p>
				
					<ul className="nav navbar-nav nav-pills mb-4 mt-0 my-md-4 d-flex flex-row">
						<li className="nav-item ml-0">
							<span 
								className={`nav-link pb-2 active ${!isEN && 'link-es'}`}
								data-toggle="pill"
								onClick={() => setIsSkills(true)}
							>{isEN ? translate('MAIN_SKILLS') : translate('HABILIDADES')}</span>
						</li>

						<li className="nav-item ml-4">
							<span 
								className={`nav-link pb-2 ${!isEN && 'link-es'}`}
								data-toggle="pill"
								onClick={() => setIsSkills(false)}
							>{isEN ? translate('EDUCATION') : translate('EDUCACION')}</span>
						</li>
					</ul>

					{ isSkills 
						? <SkillsPage isEN={isEN} translate={translate} /> 
						: <EducationPage />
					}
				</div>
			</div>
		</div>
	</section>
)

export default AboutMePage;