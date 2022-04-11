import { ChipIcon, BadgeCheckIcon } from '@heroicons/react/solid'
import React from 'react'
import { JavascriptSharpIcon, PythonIcon, Html5Icon, Css3Icon } from '@heroicons/react/outline'

const skillList = [
	{
		Name: 'JavaScript',
		component: <JavascriptSharpIcon className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />,
		id: 1,
	},
	{
		Name: 'Python',
		component: <PythonIcon className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />,
		id: 2,
	},
	{
		Name: 'HTML',
		component: <Html5Icon className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />,
		id: 3,
	},
	{
		Name: 'CSS',
		component: <Css3Icon className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />,
		id: 4,
	},
]
const Skills = () => {
	return (
		<section id='skills'>
			<div className='container px-5 py-10 mx-auto'>
				<div className='text-center mb-20'>
					<ChipIcon className='w-10 inline-block mb-4' />
					<h1 className='sm:text-4xl text-3xl font-medium title-font text-balck mb-4'>
						Skills &amp; Technologies
					</h1>
					<p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
						I am skilled in <strong>Bash, Powershell, Command Line</strong> and am advancing my skills in{' '}
						<strong>JavaScript, React, Node.js, Express, MongoDB, SQL, Git, Azure, AWS, Linux.</strong>.
					</p>
				</div>
				<div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb- -mx-2'>
					{skillList.map((s) => (
						<div key={s} className='p-2 sm:w-1/2 w-full'>
							<div className='bg-gray-800 rounded flex p-4 h-full items-center'>
								<BadgeCheckIcon className='text-blue-300 w-6 h-6 flex-shrinl-0 mr-4' />
								<span className='title-font font-medium text-red-700'>{s.Name}</span>
								<span className='text-gray-500'> {s.component}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills
