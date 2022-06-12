import { ProjectList } from '../ProjectList';
import React from 'react';

const ProjMain = () => {
    return (
        <div id='progress' className='container'>
            <div className='row'>
                {ProjectList.map((project) => (
                    <div className='col-md-4' key={project.id}>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{project.title}</h5>
                                <p className='card-text'>{project.description}</p>
                                <a href={project.link} className='btn btn-primary'>
                                    GitHub
                                </a>
                                <img
                                    src={project.image}
                                    alt='gallery'
                                    width='100%'
                                    height='300'
                                    loading='lazy'
                                    title='gallery'
                                    className='w-40 flex-shrink-0 object-cover object-center'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjMain;
