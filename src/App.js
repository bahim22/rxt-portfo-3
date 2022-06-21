import React from 'react';
import './App.css';
// import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
// import Skills2, { Skills } from './components/Skills';
import { Software } from './components/Software';
// import {Software} from './components/Software';
// import ProjMain from './components/ProjMain.js';
// import SkillList from './SkillList';
import MenuBar from './components/Menu';
import FormPro from './Form';

import Copyright from './components/CopyrightFoot';
// import CardMain from './components/CardMain';
// import ContactForm from './ContactForm';

function App() {
    return (
        <>
            <MenuBar />
            <About />
            {/* <CardMain /> */}
            <Projects />
            {/* <ProjMain /> */}
            {/* <SkillList /> */}
            {/* <Skills /> */}
            <Software />
            {/* <Skills2 /> */}
            {/* <Software2 /> */}
            <FormPro />
            <Contact />
            <Copyright />
        </>
    );
}

export default App;
