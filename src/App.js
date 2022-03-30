import React from 'react'
import About from './components/About'
import './App.css'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Software from './components/Software'
import Navbar from './components/Navbar'
// import 'bootstrap/dist/css/bootstrap.css'
// import ContactForm from './components/ContactForm';
// import { ButtonForm } from './components/ButtonForm';

function App() {
	return (
		<main>
			<Navbar />
			<About />
			<Projects />
			<Skills />
			<Software />
			<Contact />
			{/* <ContactForm  /> */}
			{/* <ButtonForm  /> */}
		</main>
	)
}

export default App
