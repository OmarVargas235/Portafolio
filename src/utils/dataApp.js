import sass from '../asset/images/sass.png';
import react from '../asset/images/react-Logo.png';
import css from '../asset/images/css-3.png';
import redux from '../asset/images/redux-Logo.png';
import boostrap from '../asset/images/bootstrap-Logo.png';
import styledComponent from '../asset/images/styled-component.png';

import cancha from '../asset/images/presentacion_1.png';
import exchange from '../asset/images/presentacion_2.png';
import pokemon from '../asset/images/presentacion_3.png';
import tatuluis from '../asset/images/presentacion_4.png';

// Imagenes de la cancha
import cancha_1 from '../asset/images/cancha_1.png';
import cancha_2 from '../asset/images/cancha_2.png';

// Exchange
import exchange_2 from '../asset/images/exchange_2.png';
import exchange_3 from '../asset/images/exchange_3.png';
import exchange_4 from '../asset/images/exchange_4.png';

// Pokemon
import pokemon_2 from '../asset/images/pokemon_2.png';
import pokemon_3 from '../asset/images/pokemon_3.png';
import pokemon_4 from '../asset/images/pokemon_4.png';

// Tatuluis
import tatuluis_2 from '../asset/images/tatuluis_2.png';
import tatuluis_3 from '../asset/images/tatuluis_3.png';
import tatuluis_4 from '../asset/images/tatuluis_4.png';

export const data = {
	'cancha': {
		description: 'soccer field made in react Js and sass',
		about: 'This application allows you to select 11 starting players and 2 substitutes, once they are on the field you can click on the x in the image and remove them.',
		technologiesUsed: [sass, react],
		gallery: [cancha, cancha_1, cancha_2],
		moreProjects: [{img: exchange, name: 'Exchange App', params: 'exchange'}, {img: tatuluis, name: 'Tatuluis App', params: 'tatuluis'}],
		url: 'https://eager-stonebraker-2b0f91.netlify.app/',
	},
	'exchange': {
		description: 'App to be able to look at the prices of the 20 cryptocurrencies with the highest value in the market',
		about: "Project to obtain the quotes of the most important cryptocurrencies through Coincap's REST API, It obtains 20 cryptocurrencies and can filter the search in intervals of 5 10 15 20, in addition to being able to see a graph with the update of the cryptocurrency in the last 24 hours.",
		technologiesUsed: [css, react, redux, boostrap],
		gallery: [exchange, exchange_2, exchange_3, exchange_4],
		moreProjects: [{img: cancha, name: 'Cancha App', params: 'cancha'}, {img: tatuluis, name: 'Tatuluis App', params: 'tatuluis'}, {img: pokemon, name: 'Pokemon App', params: 'pokemon'}],
		url: 'https://distracted-meitner-990b6a.netlify.app/',
	},
	'pokemon': {
		description: 'App that consumes the pokeApi api, in which you can search for a particular pokemon and see more details about it.',
		about: "You can see information about the pokemon, its statistics, its other evolutions, you can add it to a favorite so that you can keep it saved in your favorites section, you can filter a pokemon by its name and compare different pokemon and see its statistics.",
		technologiesUsed: [styledComponent, redux, boostrap],
		gallery: [pokemon, pokemon_2, pokemon_3, pokemon_4],
		moreProjects: [{img: cancha, name: 'Cancha App', params: 'cancha'}, {img: tatuluis, name: 'Tatuluis App', params: 'tatuluis'}, {img: exchange, name: 'Exchange App', params: 'exchange'}],
		url: 'https://practical-franklin-427457.netlify.app',
	},
	"tatuluis": {
		description: 'Website made for a tattoo business in cancun mexico.',
		about: "It contains the information of the tatuluis business in addition to some samples of his best tattoos and a map for the location of the premises.",
		technologiesUsed: [sass, react, boostrap],
		gallery: [tatuluis, tatuluis_2, tatuluis_3, tatuluis_4],
		moreProjects: [{img: cancha, name: 'Cancha App', params: 'cancha'},{img: exchange, name: 'Exchange App', params: 'exchange'}],
		url: 'https://naughty-lamarr-fef6b1.netlify.app/',
	}
};