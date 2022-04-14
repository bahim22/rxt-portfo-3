import React from 'react';
// import Hima from '../assets/hima.jpg';
import hima from 'assets/hima.jpg';

const About = () => {
	return (
		<section id='about'>
			<div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
				<div className='lg: flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
						{' '}
						Welcome to my portfolio{' '}
						<br className='hidden md:inline-block' />
					</h1>
					<h2 className='mb-8 leading-relaxed'>
						Custom Built with  React, Webpack, Babel, ESLint, Prettier and more!
					</h2>
					<p className='mb-8 leading-relaxed'>
						Website developer and designer. Currently building websites and web Apps using JAMstack and Fullstack tools. I research each step of the development process and take ideas from concept to production with a one man team.
					</p>
					<div className='flex justify-center'>
						<a
							href='#contact'
							className='inline-flex text-black bg-red-800 border-1 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-2xl'
						>
							Contact
						</a>{' '}
						<br />
						<a
							href='#projects'
							className='ml-4 inline-flex  bg-red-800 border-1 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-blue-400 rounded  text-black text-2xl'
						>
							Projects
						</a>
					</div>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<img className='object-cover object-center rounded' alt='hima b' src={hima} />
				</div>
			</div>
		</section>
	);
};

export default About;
