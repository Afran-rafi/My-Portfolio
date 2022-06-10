import React from 'react';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';


const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;