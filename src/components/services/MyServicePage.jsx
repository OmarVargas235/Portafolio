import React from 'react';
import Card from '../../layaut/Card';
import Title from '../../layaut/Title';
import { ReactComponent as Phone } from '../../asset/icons/phone.svg';
import { ReactComponent as Desktop } from '../../asset/icons/desktop.svg';
import { ReactComponent as Server } from '../../asset/icons/server.svg';

const MyServicePage = ({ isEN, translate }) => (
	
	<section className="myService" id="service">
		<div className="container py-5">
			<Title 
				title={`${isEN ? translate('MYSERVICE') : translate('MISERVICIOS')}`}
				text={`${isEN ? translate('DESCRIPTION') : translate('DESCRIPCION')}`}
			/>
						
			<div className="row mt-5 px-5 px-sm-0">
				<div className="col-sm-6 col-md-4 pl-md-0">
					<Card 
						Icon={Phone}
						title={`${isEN ? translate('CARD_TITLE_FIRST') : translate('TITULO_PRIMERA_TARGETA')}`}
						text={`${isEN ? translate('CARD_FIRST_TEXT') : translate('TEXTO_PRIMERA_TARJETA')}`}
					/>
				</div>
				
				<div className="mt-4 mt-sm-0 col-sm-6 col-md-4">
					<Card 
						Icon={Desktop}
						title={`${isEN ? translate('CARD_TITLE_SECOND') : translate('TITULO_SEGUNDA_TARGETA')}`}
						text={`${isEN ? translate('CARD_SECOND_TEXT') : translate('TEXTO_SEGUNDA_TARJETA')}`}
					/>
				</div>
				
				<div className="mt-4 mt-md-0 pr-md-0 col-sm-6 col-md-4">
					<Card 
						Icon={Server}
						title={`${isEN ? translate('CARD_TITLE_THIRD') : translate('TITULO_TERCERA_TARGETA')}`}
						text={`${isEN ? translate('CARD_THIRD_TEXT') : translate('TEXTO_TERCERA_TARJETA')}`}
					/>
				</div>
			</div>
		</div>
	</section>
)

export default MyServicePage;