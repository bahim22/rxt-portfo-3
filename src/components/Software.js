import { TerminalIcon, UsersIcon } from '@heroicons/react/solid';

import React from 'react';

const softwareList = [
    {
        name: 'Azure',
        tools: 'DevOps, SAAS, IAAS',
        image: '/himacard.png',
    },
    {
        name: 'GitHub',
        tools: 'Dev, hosting, collab, Version Control',
        image: '/himacard.png',
    },
    {
        name: 'Jira',
        tools: 'Dev, Planning, workflow, Kanban Board',
        image: '/himacard.png',
    },
    {
        name: 'Office 365',
        tools: 'office, excel, powerpoint, Planning, Admin',
        image: '/himacard.png',
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
                                {<TerminalIcon className='block w-8 text-gray-100 mb-4' />}
                                <p className='leading-relaxed mb-6'>{a.tools}</p>
                                <h2 className='text-gray-100 text-sm uppercase'>{a.name}</h2>
                                <div className='inline-flex'>
                                    <img
                                        src={a.image}
                                        alt='software'
                                        width='100%'
                                        height='200'
                                        className='w-40 flex-shrink-0 object-cover object-center'
                                    />
                                    <span className='flex-grow flex flex-col pl-4'></span>
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
