import React from 'react';
// import ContactForm from './ContactForm'

const info = {
    email: 'ab123@icloud.com',
    cellPhone: '411-111-1111',
};

const Contact = () => {
    return (
        <section id='contact' className='relative'>
            <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
                <div className='lg:w-1/2 bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-md shadow-teal-400'>
                    <iframe
                        // width='100%'
                        // height='100%'
                        width='100%'
                        height='300'
                        title='Dionysus Era Dev Location'
                        // className='absolute inset-0 block'
                        className='absolute inset-0'
                        referrerPolicy='origin-when-cross-origin'
                        loading='lazy'
                        style={{ filter: 'opacity(0.7)' }}
                        src='https://www.google.com/maps/embed/v1/place?q=dionysus+era&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
                    />
                </div>
                <div className='bg-gray-400 relative flex flex-wrap py-6 rounded shadow-md shadow-teal-400'>
                    <div className='lg:w-1/2 px-6'>
                        <h2 className='title-font font-semibold text-blue-500 tracking-widest text-xs'>Address</h2>
                        <p className='mt-1'>Pittsburgh, PA 15219</p>
                    </div>
                    <div className='lg:w-1/2 px-6 lg:mt-0'>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>Email</h2>
                        <a href='email' className='text-slate-500 leading-relaxed'>
                            {info.email}
                        </a>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>Phone Number</h2>
                        <p className='leading-snug'>{info.cellPhone}</p>
                        <a href='https://g.page/r/CXfswPHp0DDEEAE/review' className='text-slate-500 leading-relaxed'>
                            google review
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
