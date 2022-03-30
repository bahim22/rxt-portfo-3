import React from 'react';
// import { ArrowRightIcon } from '@heroicons/react/solid'

const Navbar = () => {
    return (
        <>
            {/*<header className="flex items-center h-5 sm:h-5 z-auto w-full">
          <div className="container mx-auto px-2 flex items-center justify-between">
            <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border1 md:border-red-700 flex flex-wrap items-center text-base justify-center'> || */}
            {/*<main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">*/}
            <nav className='font-sen text-blue-400 dark:text-white uppercase text-lg lg:flex items-center hidden'>
                {/* <a className='title-font font-medium text-white mb-4 md:mb-0'>Welcome  </a> */}
                <a href='#about' className='ml-3 text-l'>
                    Hima Balde
                </a>
                <br />
                <a href='#projects' className='py-2 px-6 flex hover:text-black'>
                    Projects
                </a>{' '}
                {''}
                <a href='#skills' className='py-2 px-6 flex hover:text-black'>
                    Skills
                </a>
                {''}
                <a href='#software' className='py-2 px-6 flex hover:text-black'>
                    {' '}
                    Software
                </a>
                {''}
                <a href='#contact' className='py-2 px-6 flex hover:text-black'>
                    {' '}
                    Available for Hire
                </a>
                <div className='container mx-auto px-auto flex flex-col justify-between items-center py-4'>
                    <h2 className='max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2'>
                        Dionysus Era Development | Design
                    </h2>
                </div>
            </nav>
            {/* </div> */}
            {/* // </header> */}
            {/* </main> */}
        </>
    );
};

export default Navbar;
/* <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">{/* </main>*/
