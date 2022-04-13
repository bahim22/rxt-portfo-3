import React from 'react';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Software from './components/Software';
import Navbar from './components/Navbar';
// import FormPro from './components/FormPro';

function App() {
	return (
		<main>
			<Navbar />
			<About />
			<Projects />
			<Skills />
			<Software />
			{/* <FormPro /> */}
			<Contact />
		</main>
	);
}

export default App;
