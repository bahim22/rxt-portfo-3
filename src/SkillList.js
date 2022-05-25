import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp';

import React from 'react';

/* const SkillCompo = () => {
	return (
		<div className='flex flex-wrap justify-center'>
			<JavascriptSharpIcon />
			<GitHubIcon />
			<HtmlSharpIcon />
			<CssSharpIcon />
		</div>
	)
} */

export const SkillInfo = [
    {
        Name: 'JavaScript',
        // Icon: 'JavascriptSharpIcon',
        Description: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
        Skills: ['ES6', 'ES5', 'JSX', 'TypeScript', 'JSON'],
        Id: 0,
        Time: '2 years',
        image: '/himaPropng.png',
        icon: '/jsIcons.svg',
    },
    {
        Name: 'HTML5 and CSS3',
        // Icon: 'Html5Icon',
        Description: 'HTML5 is the fifth and current version of the HTML standard.',
        Skills: ['HTML5', 'CSS3', 'Bootstrap', 'Material-UI', 'TailwindCss'],
        Id: 1,
        Time: '2 years',
        image: '/himaPropng.png',
        icon: '/jsIcons.svg',
    },
    {
        Name: 'Shells',
        // Icon: 'Html5Icon',
        Description: 'HTML5 is the fifth and current version of the HTML standard.',
        Skills: ['Bash', 'PowerShell'],
        Id: 2,
        Time: '2 years',
        image: '/himaPropng.png',
        icon: '/gitBlck.png',
    },
    {
        Name: 'Python',
        // Icon: 'PythonIcon',
        Description: 'Python is an interpreted, high-level, general-purpose programming language',
        Skills: ['Django'],
        Id: 3,
        Time: '1 year',
        image: '/crbnNxtBoil.png',
        icon: '/pylc.svg',
    },
];

const SkillList = () => {
    return (
        <div>
            <div className='container px-5 py-10 mx-auto'>
                <div className='text-center mb-20'>
                    {SkillInfo.map((s) => (
                        <div key={s.Id} className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
                                <JavascriptSharpIcon className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />
                                <span className='title-font font-medium text-red-700'>{s.Name}</span>
                                <span className='text-gray-500'> {s.Description}</span>
                            </div>
                            <img
                                src={s.image}
                                alt='gallery'
                                className='w-30 flex-shrink-0 object-cover object-center'
                            />
                            <div>{s.icon} </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillList;
