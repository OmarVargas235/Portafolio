import React from 'react';

const HeaderPage = ({ containerCarousel, isEN, translate }) => (
	
	<header className={`${isEN ? 'bg-header' : 'bg-header-es'} bg-header_app`} id="home">
		<div className="container-md">
			<p className="welcome">{isEN ? translate('WELCOME') : translate('BIENVENIDO')}</p>
			<h1>
				{isEN ? translate('HI') : translate('HOLA')}

				<div 
					className="container-carousel d-flex flex-column justify-content-center" 
					id="carousel" 
					ref={containerCarousel}
				>
					<p>{`<${isEN ? translate('DEVELOPER') : translate('DESARROLLADOR')}>`}</p>
					<p className="notActive">{`<${isEN ? translate('DEVELOPER_FRONTEND') : translate('DESARROLLADOR_FRONTEND')}/>`}</p>
					<p className="notActive">{`<${isEN ? translate('DEVELOPER_BACKEND') : translate('DESARROLLADOR_BACKEND')}/>`}</p>
					<p className="notActive">{`</${isEN ? translate('DEVELOPER') : translate('DESARROLLADOR')}>`}</p>
				</div>
			</h1>
			
		</div>
	</header>
)

export default HeaderPage;