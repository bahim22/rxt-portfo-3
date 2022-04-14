import card from '../../public/himacard.png';
import ism from '../../public/ismPic.webp';
import ism2 from '../../public/ismHome.png';
import bg7 from '../../public/bg7.jpg';
import bb from '../../public/bbman.png';
import mapPro from '../../public/MapProject.png';
import rocket from '../../public/icons/rocket.svg';

const ProjMain = () => {
	const ProjectList = [
	{
		title: 'Next.js Blog',
		id: 'nb',
		subtitle: 'DioBlog',
		description: 'React based JS website with custom styling and tool config.',
		image: { ism },
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'Next.js Boilerplate',
		id: 'nt',
		subtitle: 'Next-ded-boiler',
		description: 'React based JS website with custom styling and tool config.',
		image: { card },
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'Next.js TailwindCss App',
		subtitle: 'next-tail-22',
		id: 'ntw',
		description: 'Next.js App from Vercel Template to work on building larger Apps.',
		image: { bg7 },
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'React.js Boilerplate',
		subtitle: 'react-ded-boiler',
		id: 'rb',
		description: 'Reusable boilerplate skeleton for React.js projects.',
		image: { bb },
		link: 'https://github.com/bahim22/react-ded-boiler',
	},
	{
		title: 'React.js Azure Authorization',
		subtitle: 'auth-react-azure',
		id: 'raz',
		description: 'React App with TypeScript using Azure AD to authenticate users.',
		image: { mapPro },
		link: 'https://github.com/bahim22/auth-react-azure',
	},
	{
		title: 'MERN Stack',
		subtitle: 'gullo-db',
		id: 'mern1',
		description: 'React based JS website with custom styling and tool config.',
		image: { rocket },
		link: 'https://github.com/bahim22/react-portfo2',
	},
	{
		title: 'Inner Sity Market',
		subtitle: 'ism',
		id: 'ism',
		description: 'HTML, CSS, Bootstrap website for an advertising company.',
		// image: './../../public//images/ismHome.png',
		image: { ism2 },
		link: 'https://github.com/bahim22/ism',
	},
	];
	return (
		<div className="container">
			<div className="row">
				{ProjectList.map((project) => (
					<div className="col-md-4" key={project.id}>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{project.title}</h5>
								<p className="card-text">{project.description}</p>
								<a href={project.link} className="btn btn-primary">
									GitHub
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjMain;

export const projInfo =
	'I initially started developing Python Projects with Django.Then I transitioned to building websites with HTML and CSS3, eventually  implementing bootstrap packages with pre-built minified JavaScript for interactivity. I improved my vanilla JavaScript skills and learned ES6 and TypeScript and was able to start developing React.js and Next.js Web Apps. I was able to learn how to configure my toolchain and start building JAMstack Apps. I am currently building Full-Stack projects using multiple frameworks, libraries,and packages.';
