import React from 'react';
import Card from '../../layaut/Card';
import { ReactComponent as Phone } from '../../asset/icons/phone.svg';
import { ReactComponent as Desktop } from '../../asset/icons/desktop.svg';
import { ReactComponent as Server } from '../../asset/icons/server.svg';

const MyServicePage = () => (
	
	<article className="myService">
		<div className="container py-5">
			<h2 className="mt-5 text-center">My Service</h2>
			<p className="text-center px-5">I have experience developing robust apps and websites for high-volume devices. I am proficient at building and maintaining professional relationships.</p>
			
			<div className="row mt-5 px-5 px-sm-0">
				<div className="col-sm-6 col-md-4 pl-md-0">
					<Card 
						Icon={Phone}
						title='Responsive web design'
						text='Build applications that adapt to different mobile and desktop devices.'
					/>
				</div>
				
				<div className="mt-4 mt-sm-0 col-sm-6 col-md-4">
					<Card 
						Icon={Desktop}
						title='Website Development'
						text='Build Websites, portfolios and ecommerce sites based on client requirements.'
					/>
				</div>
				
				<div className="mt-4 mt-md-0 pr-md-0 col-sm-6 col-md-4">
					<Card 
						Icon={Server}
						title='Backend Development'
						text='Development of backend services, Rest Apis, with variety of technologies.'
					/>
				</div>
			</div>
		</div>
	</article>
)

export default MyServicePage;