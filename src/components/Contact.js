import { Link, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
// require('dotenv').config();

const Contact = () => {
    // const GKEY = process.env.GMAP_KEY;
    // const GSRC = process.env.GMAP_SRC;
    return (
        <section id='map'>
            <div className='container px-5 py-10 mx-auto flex sm:flex-wrap flex-wrap'>
                <div className='sm:min-w-full lg:min-w-full bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-around shadow-md shadow-teal-400'>
                    <iframe
                        width='100%'
                        height='300'
                        // max-width='100%'
                        title='Dionysus Era Dev Location'
                        // className='inset-0'
                        referrerPolicy='origin-when-cross-origin'
                        loading='lazy'
                        // max-age='31536000'
                        style={{ filter: 'opacity(0.7)' }}
                        // src=`https://www.google.com/maps/embed/v1/place?q=Pittsburgh+PA&key=${GKEY}` || `${GSRC}`
                        src='https://www.google.com/maps/embed/v1/place?q=Pittsburgh+PA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
                    />
                </div>
                {/* <div className='sm:min-w-fit lg:min-w-full bg-gray-400 relative flex flex-wrap py-6 rounded shadow-md shadow-teal-400'> */}
                {/* <div className='lg:w-1/2 px-6'>
                        <h2 className='title-font font-semibold text-blue-500 tracking-widest text-xs'>Location: </h2>
                        <p className='mt-1'>Pittsburgh, PA 15219</p>
                    </div> */}
                <div className='sm:min-w-full lg:min-w-full bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-around shadow-md shadow-teal-400'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                        }}>
                        <Avatar
                            alt='Hima Avatar'
                            title='Hima Avatar'
                            src='/hima2.jpeg'
                            // src='/gravatar.png'
                            sx={{ width: 65, height: 65, marginRight: 2.75 }}
                        />
                    </Box>
                    {/* <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                        <Typography variant='body2' sx={{ color: 'common.white' }}>
                            Microsoft 365:
                        </Typography>
                        <br />
                        <Typography>
                            <Link href='https://forms.office.com/r/16Fh6afNmV'>
                                <strong>Feedback Form</strong>
                            </Link>
                        </Typography>
                    </Box> */}
                    <br />
                    <div id='form' className='lg:w-1/2 px-6 lg:mt-0'>
                        {/* <h4 className='title-font font-semibold text-white tracking-widest text-sm'>Email: </h4> */}
                        <Link
                            href='mailto:ibalde@dionysuseradev.onmicrosoft.com'
                            className='text-slate-500 leading-relaxed'>
                            <strong>Send Me an Email</strong>
                        </Link>
                        <br />
                        <Link href='https://forms.office.com/r/16Fh6afNmV' className='text-slate-500 leading-relaxed'>
                            <strong>Microsoft 365 Feedback Form</strong>
                        </Link>
                        <br />
                        {/* <h5 className='title-font font-semibold text-white tracking-widest text-sm'>
                            Send me an Email
                        </h5> */}
                        {/* <h5 className='title-font font-semibold text-white tracking-widest text-sm'>
                            <strong>Google Business Page: </strong>
                        </h5> */}
                        <Link href='https://linkedin.com/in/himabalde' className='text-slate-500 leading-relaxed '>
                            <strong>View my LinkedIn Profile</strong>
                        </Link>
                        <hr />
                        <br />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
