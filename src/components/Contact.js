import { Link } from '@mui/material';
import React from 'react';
// import ContactForm from './ContactForm'

// const info = {
//     email: 'Hima Email',
// };

const Contact = () => {
    return (
        <section id='contact' className='relative'>
            <div className='container px-5 py-10 mx-auto flex sm:flex-wrap flex-wrap'>
                <div className='sm:min-w-fit lg:min-w-full bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-around fixed shadow-md shadow-teal-400'>
                    <iframe
                        width='100%'
                        height='300'
                        max-width='100%'
                        title='Dionysus Era Dev Location'
                        className='absolute inset-0'
                        referrerPolicy='origin-when-cross-origin'
                        loading='lazy'
                        max-age='31536000'
                        style={{ filter: 'opacity(0.7)' }}
                        src='https://www.google.com/maps/embed/v1/place?q=dionysus+era&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
                    />
                </div>
                <div className='sm:min-w-fit lg:min-w-full bg-gray-400 relative flex flex-wrap py-6 rounded shadow-md shadow-teal-400'>
                    <div className='lg:w-1/2 px-6'>
                        <h2 className='title-font font-semibold text-blue-500 tracking-widest text-xs'>Location: </h2>
                        <p className='mt-1'>Pittsburgh, PA 15219</p>
                    </div>
                    <div className='lg:w-1/2 px-6 lg:mt-0'>
                        <h2 className='title-font font-semibold text-white tracking-widest text-sm'>Email: </h2>
                        <Link
                            href='mailto:ibalde@dionysuseradev.onmicrosoft.com'
                            className='text-slate-500 leading-relaxed'>
                            <h2 className='title-font font-semibold text-white tracking-widest text-sm'>
                                <strong>Hima</strong>
                            </h2>
                        </Link>
                        <Link
                            href='https://g.page/r/CXfswPHp0DDEEAE/review'
                            className='text-slate-500 leading-relaxed '>
                            <h2 className='title-font font-semibold text-white tracking-widest text-sm'>
                                <strong>Google Review</strong>
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
