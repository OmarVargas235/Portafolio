import sass from '../asset/images/sass.png';
import react from '../asset/images/react-Logo.png';
import css from '../asset/images/css-3.png';
import redux from '../asset/images/redux-Logo.png';
import boostrap from '../asset/images/bootstrap-Logo.png';
import styledComponent from '../asset/images/styled-component.png';
import node from '../asset/images/node-Logo.png';
import mongodb from '../asset/images/mongodb-Logo.png';

import cancha from '../asset/images/presentacion_1.png';
import exchange from '../asset/images/presentacion_2.png';
import pokemon from '../asset/images/presentacion_3.png';
import tatuluis from '../asset/images/presentacion_4.png';
import pizzeria from '../asset/images/presentacion_5.png';

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

// Pizzeria
import pizzeria_1 from '../asset/images/pizza_1.png';
import pizzeria_2 from '../asset/images/pizza_2.png';
import pizzeria_3 from '../asset/images/pizza_3.png';
import pizzeria_4 from '../asset/images/pizza_4.png';
import pizzeria_5 from '../asset/images/pizza_5.png';
import pizzeria_6 from '../asset/images/pizza_6.png';

export const dataEN = {
	'cancha': {
		description: 'soccer field made in react Js and sass',
		about: 'This application allows you to select 11 starting players and 2 substitutes, once they are on the field you can click on the x in the image and remove them.',
		technologiesUsed: [sass, react],
		gallery: [cancha, cancha_1, cancha_2],
		moreProjects: [{img: exchange, name: 'Exchange App', params: 'exchange'}, {img: tatuluis, name: 'Tatuluis App', params: 'tatuluis'}, {img: pizzeria, name: 'Pizzeria-App', params: 'pizzeria-app'}],
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
	},
	"pizzeria-app": {
		description: 'Pizzeria APP in which you can search for a specific pizzeria and see the types of pizzas they offer.',
		about: "In this application you have to register to be able to use it, once you are inside you can edit the name and surname as well as your photo and see more information about what the different pizzerias offer.",
		technologiesUsed: [styledComponent, react, boostrap, node, mongodb],
		gallery: [pizzeria, pizzeria_1, pizzeria_2, pizzeria_3, pizzeria_4, pizzeria_5, pizzeria_6],
		moreProjects: [{img: cancha, name: 'Cancha App', params: 'cancha'},{img: exchange, name: 'Exchange App', params: 'exchange'}],
		url: 'https://musing-edison-986c78.netlify.app',
	}
};

export const dataES = {
	'cancha': {
		description: 'Campo de fútbol hecho en react Js y sass.',
		about: 'Esta aplicación te permite seleccionar 11 jugadores titulares y 2 suplentes, una vez que están en el campo puedes hacer clic en la x de la imagen y eliminarlos.',
		technologiesUsed: [sass, react],
		gallery: [cancha, cancha_1, cancha_2],
		moreProjects: [{img: exchange, name: 'Exchange App', params: 'exchange'}, {img: tatuluis, name: 'Tatuluis App', params: 'tatuluis'},{img: pizzeria, name: 'Pizzeria-App', params: 'pizzeria-app'}],
		url: 'https://eager-stonebraker-2b0f91.netlify.app/',
	},
	'exchange': {
		description: 'App para poder mirar los precios de las 20 criptomonedas con mayor valor del mercado.',
		about: "Proyecto para obtener las cotizaciones de las criptomonedas más importantes a través de la API REST de Coincap, obtiene 20 criptomonedas y puede filtrar la búsqueda en intervalos de 5 10 15 20, además de poder ver un gráfico con la actualización de la criptomoneda en la última 24 horas.",
		technologiesUsed: [css, react, redux, boostrap],
		gallery: [exchange, exchange_2, exchange_3, exchange_4],
		moreProjects: [{img: cancha, name: 'Cancha App', params: 'cancha'}, {img: tatuluis, name: 'Tatuluis App', params: 'tatuluis'}, {img: pokemon, name: 'Pokemon App', params: 'pokemon'}],
		url: 'https://distracted-meitner-990b6a.netlify.app/',
	},
	'pokemon': {
		description: 'Aplicación que consume la api pokeApi, en la que puedes buscar un pokemon en particular y ver más detalles al respecto.',
		about: "Puedes ver información sobre el pokemon, sus estadísticas, sus otras evoluciones, puedes agregarlo a un favorito para que puedas mantenerlo guardado en tu sección de favoritos, puedes filtrar un pokemon por su nombre y comparar diferentes pokemon y ver sus estadísticas.",
		technologiesUsed: [styledComponent, redux, boostrap],
		gallery: [pokemon, pokemon_2, pokemon_3, pokemon_4],
		moreProjects: [{img: cancha, name: 'Cancha App', params: 'cancha'}, {img: tatuluis, name: 'Tatuluis App', params: 'tatuluis'}, {img: exchange, name: 'Exchange App', params: 'exchange'}],
		url: 'https://practical-franklin-427457.netlify.app',
	},
	"tatuluis": {
		description: 'Sitio web realizado para una empresa de tatuajes en cancun mexico.',
		about: "Contiene la información del negocio tatuluis además de algunas muestras de sus mejores tatuajes y un mapa de ubicación del local.",
		technologiesUsed: [sass, react, boostrap],
		gallery: [tatuluis, tatuluis_2, tatuluis_3, tatuluis_4],
		moreProjects: [{img: cancha, name: 'Cancha App', params: 'cancha'},{img: exchange, name: 'Exchange App', params: 'exchange'}],
		url: 'https://naughty-lamarr-fef6b1.netlify.app/',
	},
	"pizzeria-app": {
		description: 'APP Pizzeria en la que puedes buscar una pizzería en concreto y ver los tipos de pizzas que ofrecen.',
		about: "En esta aplicación tienes que registrarte para poder utilizarla, una vez dentro puedes editar el nombre y apellidos así como tu foto y ver más información de lo que ofrecen las diferentes pizzerías.",
		technologiesUsed: [styledComponent, react, boostrap, node, mongodb],
		gallery: [pizzeria, pizzeria_1, pizzeria_2, pizzeria_3, pizzeria_4, pizzeria_5, pizzeria_6],
		moreProjects: [{img: cancha, name: 'Cancha App', params: 'cancha'},{img: exchange, name: 'Exchange App', params: 'exchange'}],
		url: 'https://musing-edison-986c78.netlify.app',
	}
};