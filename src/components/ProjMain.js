import { ProjectList } from '../ProjectList'
import React from 'react';
const ProjMain = () => {
    return (
        <div className='container'>
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjMain;
