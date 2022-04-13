import React from 'react';
import { TerminalIcon, UsersIcon } from '@heroicons/react/solid';
import bg7 from '../../public/bg7.jpg';
import carbon1 from '../../public/carbon.1.png';
import logo180 from '../../public/logo180.png';
import logo5 from '../../public/logo512.png';
export const softwareList = [
	{
		name: 'Azure',
		tools: 'DevOps, SAAS, IAAS',
		image: { carbon1 },
	},
	{
		name: 'GitHub',
		tools: 'Dev, hosting, collab, Version Control',
		image: { logo5 },
	},
	{
		name: 'Jira',
		tools: 'Dev, Planning, workflow, Kanban Board',
		image: { logo180 },
	},
	{
		name: 'Office 365',
		tools: 'office, excel, powerpoint, Planning, Admin',
		images: { bg7 },
	},
];
const Software = () => {
	return (
		<section id='software'>
			<div className='container px-5 py-10 mx-auto text-center'>
				<UsersIcon className='w-10 inline-block mb-4' />
				<h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-12'>Software and Services</h1>
				<div className='flex flex-wrap m-4'>
					{softwareList.map((a) => (
						<div className='p-4 md:w-1/2 w-full' key={a.id}>
							<div className='h-full bg-gray-800 bg-opacity-40 p-8 rounded'>
								{<TerminalIcon className='block w-8 text-gray-500 mb-4' />}
								<p className='leading-relaxed mb-6'>{a.tools}</p>
								<div className='inline-flex items-center'>
									<img
										src={a.image}
										alt='software'
										className='w-12 rounded-full flex-shrink-0 object-cover object-center'
									/>
									<span className='flex-grow flex flex-col pl-4'>
										<span className='text-gray-500 text-sm uppercase'>{a.name}</span>
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Software;
