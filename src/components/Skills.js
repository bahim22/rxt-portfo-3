import CssSharpIcon from '@mui/icons-material/CssSharp';
import JavascriptSharpIcon from '@mui/icons-material/JavascriptSharp';
import CodeIcon from '@mui/icons-material/Code';
import HtmlSharpIcon from '@mui/icons-material/HtmlSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
// import SkillList from '../SkillList';
import { progress } from '../Progress';
import React from 'react';
import { Container, Grid } from '@mui/material';
// import CardMain from './CardMain';

const Skills = () => {
    return (
        <>
            <section id='skills'>
                <div className='container px-5 py-10 mx-auto'>
                    <div className='text-center mb-20'>
                        <h1 className='sm:text-4xl text-3xl font-medium title-font text-black mb-4'>
                            Skills &amp; Technologies
                        </h1>
                        <CodeIcon />
                        <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
                            I am skilled in <strong>Bash, Powershell, Command Line</strong> and am advancing my skills
                            in{' '}
                        </p>
                        {/* <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                                <CardMain icon={<CssSharpIcon />} title='CSS' progress={progress.css} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <CardMain icon={<JavascriptSharpIcon />} title='Javascript' progress={progress.js} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <CardMain icon={<HtmlSharpIcon />} title='HTML' progress={progress.html} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <CardMain icon={<GitHubIcon />} title='GitHub' progress={progress.git} />
                            </Grid>
                        </Grid> */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className='flex flex-wrap -mx-2'>
                                    <ul>
                                        {/* // ! important add skillList component w/ in ul-> li and put all in a card */}
                                        <HtmlSharpIcon />
                                        <li>HTML, CSS, JavaScript</li>
                                        <JavascriptSharpIcon />
                                        <CssSharpIcon />
                                        <li>Reactjs and Nextjs</li>
                                        <li>Node.js and Express</li>
                                        <CodeIcon />
                                        <li>DBMS and ORM</li>
                                        <li> Git, Azure, AWS</li>
                                        <GitHubIcon />
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    {/* <CardMain /> */}
                    <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb- -mx-4'>
                        {progress.map((s) => (
                            <div key={s.id} className='p-2 sm:w-1/2 w-full'>
                                <div className='bg-gray-800 rounded flex p-4 h-full items-left'>
                                    <span className='title-font font-medium text-red-700'>{s.title}</span>
                                    {/* <span className='text-gray-500'> {s.subtitle}</span> */}
                                    <span className='text-gray-500'> {s.description}</span>
                                </div>
                                <Container>
                                    <img
                                        src={s.image}
                                        title={s.title}
                                        loading='lazy'
                                        width='100%'
                                        height='300'
                                        alt='progress'
                                        className='w-30 flex-shrink-0 object-cover object-center'
                                    />
                                </Container>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
