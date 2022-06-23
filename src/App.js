import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import MenuBar from './components/Menu';
import FormPro from './Form';
import Copyright from './components/CopyrightFoot';
// import Skills2  from './components/Skills';
// import Software2  from './components/Software';
// import { Software } from './components/Software';
// import ProjMain from './components/ProjMain.js';
// import SkillList from './SkillList';
// import CardMain from './components/CardMain';
// import ContactForm from './ContactForm';

function App() {
    return (
        <>
            <MenuBar />
            <About />
            <Projects />
            <Contact />
            <FormPro />
            <Copyright />
        </>
    );
}

export default App;
