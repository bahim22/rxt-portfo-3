import React from 'react';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Software2 from './components/Software';
// import {Software} from './components/Software';
// import Navbar from './components/Navbar';
import ProjMain from './components/ProjMain.js';
import SkillList from './SkillList';
import MenuBar from './components/Menu';
import FormPro from './Form';

// import ContactForm from './ContactForm';

function App() {
    return (
        <main>
            {/* <Navbar /> */}
            <MenuBar />
            <About />
            <Projects />
            <ProjMain />
            <Software2 />
            <Skills />
            <SkillList />
            <FormPro />
            <Contact />
        </main>
    );
}

export default App;
