import React from 'react';

const About = () => {
    return (
        <section id='about'>
            <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
                {/* <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>Dionysus Era</div> */}
                <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
                    Hima Balde Portfolio
                </h1>
                <h2 className='text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14'>
                    Dionysus Era Dev
                </h2>
                <div className='lg: flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    {/* <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
                        {' '}
                        Welcome!
                    </h1> */}
                    <br className='md:inline-block' />
                    <h2 className='mb-8 leading-relaxed '>
                        Custom Web App Built with React, Webpack, Babel, ESLint, Prettier and more!
                    </h2>
                    <p className='mb-8 leading-relaxed'>
                        Website developer and designer. Currently building websites and web Apps using JAMstack and{' '}
                        Fullstack tools. I research each step of the development process and take ideas from concept to{' '}
                        production. with a one man team.
                    </p>
                    {/* <div className='flex justify-center'>
                        <a
                            href='#contact'
                            className='inline-flex text-black bg-red-800 border-1 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-2xl'>
                            Contact
                        </a>{' '}
                        <br />
                        <a
                            href='#projects'
                            className='ml-4 inline-flex  bg-red-800 border-1 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-blue-400 rounded  text-black text-2xl'>
                            Projects
                        </a>
                    </div>*/}
                </div>
                <div className='lg:min-w-fit lg:w-fit md:w-1/2 w-5/6'>
                    <img
                        className='object-cover object-center rounded'
                        alt='hima b'
                        title='hima b'
                        loading='eager'
                        src='/hima2.jpeg'
                        // width='100%'
                        // height='300'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
