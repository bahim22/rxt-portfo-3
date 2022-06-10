import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp';
import {
    HtmlSharp,
    PlaylistAddCheckRounded,
    GitHub,
    DeveloperModeOutlined,
    CssTwoTone,
    PunchClock,
} from '@mui/icons-material';
import React from 'react';
import { Divider } from '@mui/material';

export const SkillInfo = [
    {
        Name: 'JavaScript',
        Description: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
        Skills: ['ES6', 'ES5', 'JSX', 'TypeScript', 'JSON'],
        Id: 0,
        Icon: <JavascriptSharpIcon className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />,
        Time: '2 years',
        Length: <PunchClock />,
        image: '/himaPropng.jpeg',
    },
    {
        Name: 'HTML5 and CSS3',
        Description: 'HTML5 is the fifth and current version of the HTML standard.',
        Icon: [<HtmlSharp key='1a' className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />, <CssTwoTone key='1b' />],
        Skills: ['HTML5', 'CSS3', 'Bootstrap', 'Material-UI', 'TailwindCss'],
        Id: 1,
        Time: '2 years',
        Length: <PunchClock />,
        image: '/crbnNxtBoil.png',
    },
    {
        Name: 'Shells',
        Description: 'HTML5 is the fifth and current version of the HTML standard.',
        Icon: <GitHub />,
        Skills: ['Bash', 'PowerShell'],
        Id: 2,
        Time: '2 years',
        Length: <PunchClock />,
        image: '/MapProject.png',
    },
    {
        Name: 'Python',
        Description: 'Python is an interpreted, high-level, general-purpose programming language',
        Skills: ['Django'],
        Icon: <DeveloperModeOutlined className='text-blue-300 w-6 h-6 flex-shrink-0 mr-4' />,
        Id: 3,
        Time: '2 years',
        Length: <PunchClock />,
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
                                <span className='title-font font-medium text-red-700'>{s.Name}</span>
                                <span className='text-gray-500'>
                                    {' '}
                                    {s.Time} {s.Length}{' '}
                                </span>
                                <span className='text-gray-500'> {s.Description}</span>
                            </div>
                            <div className='inline-flex'>
                                <span className='flex-grow flex flex-col pl-4'>{s.Skills}</span>
                            </div>
                            <Divider />
                            <div className='inline-flex'>
                                <PlaylistAddCheckRounded />
                                <img
                                    src={s.image}
                                    alt='gallery'
                                    title='Software'
                                    loading='lazy'
                                    // referrerPolicy=''
                                    width='100%'
                                    height='200'
                                    className='w-30 flex-shrink-0 object-cover object-center'
                                />
                                <img
                                    src={s.image}
                                    title='SoftwarePic2'
                                    loading='lazy'
                                    alt='software'
                                    className='w-40 flex-shrink-0 object-cover object-center'
                                />
                                <span className='flex-grow flex flex-col pl-4'>{s.Icon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillList;
