import React from 'react';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;