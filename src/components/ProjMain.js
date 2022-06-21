import { ProjectList } from '../ProjectList';
import React from 'react';
import Box from '@mui/material/Box';

export default function ProjMain() {
    return (
        <div id='progress' className='container'>
            <div className='flex-flex-wrap flex-widecard row'>
                {ProjectList.map((project) => (
                    <div className='col-md-4 col-auto' key={project.id}>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{project.title}</h5>
                                <p className='card-text'>{project.description}</p>
                                <a href={project.link} className='btn btn-primary'>
                                    GitHub Repo
                                </a>
                            </div>
                            <div className='card-footer text-lg text-transparent text-rose-900'>
                                <p>{project.subtitle}</p>
                            </div>
                            <Box sx={{ width: '100%', height: '100%' }}>
                                <img
                                    src={project.image}
                                    alt='gallery'
                                    // width='100%'
                                    // height='300'
                                    loading='lazy'
                                    title='gallery'
                                    className='min-w-fit max-w-fit min-h-fit max-h-full flex-shrink-0 object-cover object-center'
                                />
                            </Box>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
