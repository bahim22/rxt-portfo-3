import React from 'react';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Software from './components/Software';
import Navbar from './components/Navbar';
import ProjMain from './components/ProjMain.js'
import SkillList from './SkillList'
// import FormPro from './FormPro';
// import ContactForm from './ContactForm';

function App() {
	return (
		<main>
			<Navbar />
			<About />
			<Projects />
            <ProjMain />
			<Skills />
			<Software />
            <SkillList />
			{/* <FormPro /> */}
            {/* <ContactForm /> */}
			<Contact />
		</main>
	)
}

export default App;
