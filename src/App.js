import React from 'react'
import About from './components/About'
import './App.css'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Software from './components/Software'
import Navbar from './components/Navbar'
import CardMain from './components/CardMain'

function App() {
	return (
		<main>
			<Navbar />
			<About />
			<Projects />
			<Skills />
			<CardMain  />
			<Software />
			<Contact />
		</main>
	)
}

export default App
