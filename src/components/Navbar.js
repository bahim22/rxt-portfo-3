// import { ArrowRightIcon } from '@heroicons/react/solid'
import React from 'react';
const Navbar = () => {
    return (
        <>
            {/*<header className="flex items-center h-5 sm:h-5 z-auto w-full">*/}
            {/* <main className='dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen'> */}
            <div className='container mx-auto px-2 flex items-left justify-between'>
                <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border1 md:border-red-700 flex flex-wrap items-left text-base justify-around'>
                    <nav className='font-sen text-black dark:text-white uppercase text-lg lg:flex items-left'>
                        {/* <a className='title-font font-medium text-white mb-4 md:mb-0'>Welcome  </a> */}
                        <a href='#about' className='ml-3 text-l text-black'>
                            Hima Balde
                        </a>
                        <br />
                        <a href='#projects' className='py-2 px-6 flex-wrap text-black hover:text-black'>
                            Projects
                        </a>{' '}
                        {''}
                        <a href='#skills' className='py-2 px-6 flex text-black hover:text-orange'>
                            Skills
                        </a>
                        {''}
                        <a href='#software' className='py-2 px-6 flex text-black hover:text-orange'>
                            {' '}
                            Software
                        </a>
                        {''}
                        <a href='#contact' className='py-2 px-6 flex text-black hover:text-orange'>
                            {' '}
                            Available for Hire
                        </a>
                    </nav>
                    <div className='container mx-auto px-auto flex flex-col justify-between items-left py-4'>
                        <h2 className='max-w-3xl text-4xl md:text-3xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2'>
                            Dionysus Era Development | Design
                        </h2>
                    </div>
                </nav>
            </div>
            {/* // </header> */}
            {/* </main> */}
        </>
    );
};

export default Navbar;
/* <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">{/* </main>*/
