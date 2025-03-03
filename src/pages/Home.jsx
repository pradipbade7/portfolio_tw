import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Navbar from '../components/Navbar';
import MyProjects from '../components/MyProjects';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            {/* <MyProjects /> */}
            <Skills />
            <Experience />
            <Contact />
        </div>
    );
};

export default Home;