import card from "/src/assets/images/himacard.png";
// import React from "react";
// have to make projects a module to import into projects component and then make certain props to import pictures and other assets
// props = {image, link, title, description};
 const ProjectList = [
	{
		title: 'Next.js Blog',
		id: 'nb',
		subtitle: 'DioBlog',
		description: 'React based JS website with custom styling and tool config.',
		image: 'assets/images/ismPic.webp',
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'Next.js Boilerplate',
		subtitle: 'Next-ded-boiler',
		description: 'React based JS website with custom styling and tool config.',
		image: {card},
		id: 'nt',
		// image: '../public/himacard.png',
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'Next.js TailwindCss App',
		subtitle: 'next-tail-22',
		id: 'ntw',
		description: 'React based JS website with custom styling and tool config.',
		image: './assets/images/ismHome.png',
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'React.js Boilerplate',
		subtitle: 'react-ded-boiler',
		id: 'rb',
		description: 'React based JS website with custom styling and tool config.',
		image: '../public/logo512.png',
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'React.js Azure Authorization',
		subtitle: 'auth-react-azure',
		id: 'raz',
		description: 'React based JS website with custom styling and tool config.',
		image: '../public/purp9.png',
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'MERN Stack',
		subtitle: 'gullo-db',
		id: 'mern1',
		description: 'React based JS website with custom styling and tool config.',
		image: './assets/images/himaPropng.png',
		link: 'https://github.com/bahim22/react-portfo2',
	},
	/*   {
    title: 'Mern FullStack Dashboard',
    subtitle: 'menan-ded',
    description: 'React based JS website with custom styling and tool config.',
    image: 'public/purp9.pngd',
    link: 'https://github.com/bahim22/react-portfo2',
  }, */
	{
		title: 'ISM Company Site',
		subtitle: 'ism',
		description: 'React based JS website with custom styling and tool config.',
		image: './assets/images/ismHome.png',
		link: 'https://github.com/bahim22/ism',
	},

	/* 	{
		title: 'Html, Css, JS Portfolio',
		subtitle: 'dioportfo',
		description: 'React based JS website with custom styling and tool config.',
		image: '/public/purp9.png',
		link: 'https://github.com/bahim22/dioportfo',
	}, */
]
export default ProjectList;

export const progressProjects = [
	{
		Athena: {
			title: 'Athena',
			id: 'be',
			subtitle: 'Athena',
			description: 'React based JS website with custom styling and tool config.',
			image: './assets/images/ismHome.png',
		},
	},
	{
		DedPy: {
			title: 'Ded-py',
			subtitle: 'Ded-py',
			description: 'React based JS website with custom styling and tool config.',
			image: './assets/images/ismHome.png',
		},
	}

]

export const futureProjects = [
	{
		title: 'Marketing and Comms for NPOs',
		Info: 'Fullstack Mern Web App',
	},
	{
		title: 'Mern Workout Scheduler',
		Info: 'AzureCosmosDB',
	},
	{
		title: 'Next.js Business Analytics',
		Info: 'Progressive Web App',
	},
]


//1. Edit: skills into object containing arrays for langauges, tools, frameworks, libs
//2. Edit: software: adjust keys and add better value pairs
//3. Edit: deploy all finished projects and get LH stats, Links and screenshots
