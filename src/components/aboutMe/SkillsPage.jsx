import React from 'react';

const SkillsPage = ({ isEN, translate }) => (

	<article>
		<aside className="mb-3">
			<p className="mb-1">HTML, CSS, SASS, STYLED-COMPONENTS, BOOSTRAP. - Layout designer</p>
			<p>{isEN ? translate('LAYAUT') : translate('DISEÑO')}</p>
		</aside>

		<aside className="mb-3">
			<p className="mb-1">React - Frontend</p>
			<p>{isEN ? translate('SKILL_REACT') : translate('HABILIDAD_REACT')}</p>
		</aside>

		<aside>
			<p className="mb-1">Node, Mongo, Express. - Backend</p>
			<p>{isEN ? translate('SKILL_BACKEND') : translate('HABILIDAD_BACKEND')}</p>
		</aside>
	</article>
)

export default SkillsPage;