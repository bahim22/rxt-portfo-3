import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp';
import { HtmlSharp, PlaylistAddCheckRounded, CssSharp, GitHub, DeveloperModeOutlined } from '@mui/icons-material';
import React from 'react';
import { Divider } from '@mui/material';

export const SkillInfo = [
    {
        Name: 'JavaScript',
        Description: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
        Skills: ['ES6', 'ES5', 'JSX', 'TypeScript', 'JSON'],
        Id: 0,
        Icon: <GitHub />,
        Time: '2 years',
        image: '/himaPropng.jpeg',
    },
    {
        Name: 'HTML5 and CSS3',
        Description: 'HTML5 is the fifth and current version of the HTML standard.',
        Icon: <GitHub />,
        Skills: ['HTML5', 'CSS3', 'Bootstrap', 'Material-UI', 'TailwindCss'],
        Id: 1,
        Time: '2 years',
        image: '/crbnNxtBoil.png',
    },
    {
        Name: 'Shells',
        Description: 'HTML5 is the fifth and current version of the HTML standard.',
        Icon: <GitHub />,
        Skills: ['Bash', 'PowerShell'],
        Id: 2,
        Time: '2 years',
        image: '/logo678.png',
    },
    {
        Name: 'Python',
        Description: 'Python is an interpreted, high-level, general-purpose programming language',
        Skills: ['Django'],
        Icon: <GitHub />,
        Id: 3,
        Time: '1 year',
        image: '/himaPropng.jpeg',
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
                                <span className='text-gray-500'>
                                    {' '}
                                    {s.Skills} {s.Icon}
                                </span>
                                <HtmlSharp className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />
                                <CssSharp />
                            </div>
                            <PlaylistAddCheckRounded />
                            <DeveloperModeOutlined className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />
                            <img
                                src={s.image}
                                alt='gallery'
                                loading='lazy'
                                // referrerPolicy=''
                                width='100%'
                                height='200'
                                className='w-30 flex-shrink-0 object-cover object-center'
                            />
                            <Divider />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillList;
