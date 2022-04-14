import { ChipIcon } from '@heroicons/react/solid';
import React from 'react';
import CssSharpIcon from '@mui/icons-material/CssSharp';
import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp';
// import PythonSharpIcon from '@mui/icons-material/PythonSharp'
import CodeIcon from '@mui/icons-material/Code';
import HtmlSharpIcon from '@mui/icons-material/HtmlSharp';
import SkillList from './SkillList';
import GitHubIcon from '@mui/icons-material/GitHub';

/* const SkillCompo = () => {
	return (
		<div className='flex flex-wrap justify-center'>
			<JavascriptSharpIcon />
			<PythonSharpIcon />
			<HtmlSharpIcon />
			<CssSharpIcon />
		</div>
	)
} */

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
					{/* {SkillInfo.map((s) => (
						<div key={s.id} className='p-2 sm:w-1/2 w-full'>
							<div className='bg-gray-800 rounded flex p-4 h-full items-center'>
								<BadgeCheckIcon className='text-blue-300 w-6 h-6 flex-shrinl-0 mr-4' />
								<span className='title-font font-medium text-red-700'>{s.Name}</span>
								<span className='text-gray-500'> {s.component}</span>
							</div>
						</div>
					))} */}
					<SkillList />
					<JavascriptSharpIcon />
					<CodeIcon />
					<HtmlSharpIcon />
					<GitHubIcon />
					<CssSharpIcon />
				</div>
			</div>
		</section>
	);
};

export default Skills;
