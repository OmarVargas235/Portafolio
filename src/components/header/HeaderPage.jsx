import React from 'react';

const HeaderPage = ({ containerCarousel }) => (
	
	<header className="bg-header bg-header_app">
		<div className="container">
			<p className="welcome">WELCOME TO MY PORTFOLIO</p>
			<h1>
				Hi, I’m Omar

				<div 
					className="container-carousel d-flex flex-column justify-content-center" 
					id="carousel" 
					ref={containerCarousel}
				>
					<p>{`<Full stack Developer>`}</p>
					<p className="notActive">{`<Frontend Developer/>`}</p>
					<p className="notActive">{`<Backend Developer/>`}</p>
					<p className="notActive">{`</Full stack Developer>`}</p>
				</div>
			</h1>
			
		</div>
	</header>
)

export default HeaderPage;