// import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp'

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
        Id: '1',
        Time: '2 years',
        image: '/img/himaPropng.png',
    },
    {
        Name: 'HTML5 and CSS3',
        // Icon: 'Html5Icon',
        Description: 'HTML5 is the fifth and current version of the HTML standard.',
        Skills: ['HTML5', 'CSS3', 'Bootstrap', 'Material-UI', 'TailwindCss'],
        Id: '2',
        Time: '2 years',
        image: '/img/himaPropng.png',
    },
    {
        Name: 'Python',
        // Icon: 'PythonIcon',
        Description: 'Python is an interpreted, high-level, general-purpose programming language',
        Skills: ['Django'],
        Id: '3',
        Time: '2 years',
        image: '/img/crbnNxtBoil.png',
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
                               
                                <span className='title-font font-medium text-red-700'>{s.Name}</span>
                                <span className='text-gray-500'> {s.Description}</span>
                                {/* <span className='text-gray-500'> {s.Skills.join(', ')}</span> */}
                            </div>
                            <img
                                src={s.image}
                                alt='gallery'
                                className='w-30 flex-shrink-0 object-cover object-center'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillList;
