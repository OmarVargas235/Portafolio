import React from 'react';
import { ReactComponent as Phone } from '../../asset/icons/phone.svg';
import { ReactComponent as Desktop } from '../../asset/icons/desktop.svg';
import { ReactComponent as Server } from '../../asset/icons/server.svg';

const MyServicePage = () => (
	
	<article className="myService">
		<div className="container py-5">
			<h2 className="mt-5 text-center">My Service</h2>
			<p className="text-center px-5">I have experience developing robust apps and websites for high-volume devices. I am proficient at building and maintaining professional relationships.</p>
			
			<div className="row mt-5">
				<div className="col-4 pl-0">
					<div className="card p-lg-4">
						<Phone />
					
						<div className="card-body px-3">
							<h4 className="card-title">Responsive web design</h4>
							<p className="card-text">Build applications that adapt to different mobile and desktop devices.</p>
						</div> 
					</div>
				</div>
				
				<div className="col-4">
					<div className="card p-lg-4">
						<Desktop />
					
						<div className="card-body px-3">
					
							<h4 className="card-title">Website Development</h4>
							<p className="card-text">Build Websites, portfolios and ecommerce sites based on client requirements.</p>
						</div> 
					</div>
				</div>
				
				<div className="col-4 pr-0">
					<div className="card p-lg-4">
						<Server />
					
						<div className="card-body px-3">
					
							<h4 className="card-title">Backend Development</h4>
							<p className="card-text">Development of backend services, Rest Apis, with variety of technologies.</p>
						</div> 
					</div>
				</div>
			</div>
		</div>
	</article>
)

export default MyServicePage;