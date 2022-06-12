import { TerminalOutlined, VerifiedUserSharp } from '@mui/icons-material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Software2 = () => {
    return (
        <section id='software'>
            <div className='container px-5 py-10 mx-auto text-center'>
                <VerifiedUserSharp className='w-10 inline-block mb-4' />
                <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-12'>Software and Services</h1>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {softwareList.map((a) => (
                            <div className='p-4 md:w-1/2 w-full' key={a.id}>
                                {<TerminalOutlined className='block w-8 text-gray-100 mb-4' />}
                                <Grid item xs={6}>
                                    <Item>
                                        <h2 className='text-gray-100 text-sm uppercase'>{a.name}</h2>
                                        <span className='flex-grow flex flex-col pl-4'>{a.tools}</span>
                                    </Item>
                                    <Item>
                                        <h2 className='text-gray-100 text-sm uppercase'>{a.name}</h2>
                                        <span className='flex-grow flex flex-col pl-4'></span>
                                    </Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item>
                                        <img
                                            src={a.image}
                                            title='softwareInfo'
                                            alt='software'
                                            loading='lazy'
                                            className='w-40 flex-shrink-0 object-cover object-center'
                                        />
                                    </Item>
                                </Grid>
                            </div>
                        ))}
                    </Grid>
                </Box>
            </div>
        </section>
    );
};

export default Software2;

// const Software2 = () => {
//     return (
//         <section id='software'>
//             <div className='container px-5 py-10 mx-auto text-center'>
//                 <UsersIcon className='w-10 inline-block mb-4' />
//                 <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-12'>Software and Services</h1>
//                 <div className='flex flex-wrap m-4'>
//                     {softwareList.map((a) => (
//                         <div className='p-4 md:w-1/2 w-full' key={a.id}>
//                             <div className='h-full bg-gray-800 bg-opacity-40 p-8 rounded'>
//                                 {/* {<TerminalIcon className='block w-8 text-gray-100 mb-4' />} */}
//                                 <p className='leading-relaxed mb-6'>{a.tools}</p>
//                                 <h2 className='text-gray-100 text-sm uppercase'>{a.name}</h2>
//                                 <div className='img-fluid'>
//                                     <img
//                                         src={a.image}
//                                         title='softwareInfo'
//                                         alt='software'
//                                         loading='lazy'
//                                         className='w-40 flex-shrink-0 object-cover object-center'
//                                     />
//                                     <span className='flex-grow flex flex-col pl-4'></span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Software2;
