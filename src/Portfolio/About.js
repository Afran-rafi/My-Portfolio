import React from 'react';
import '../CSS/About.css'
import afran from '../Images/Afran cartoon.png'
import react from '../Images/React.png'
import vue from '../Images/vue.svg'
import js from '../Images/js.svg'
import html from '../Images/html.svg'
import css from '../Images/css.svg'
import mongodb from '../Images/mongodb.svg'
import node from '../Images/node.svg'
import amazon from '../Images/amazon.svg'
import typescript from '../Images/typescript.svg'

const About = () => {
    return (
        <div className='text-white mt-20'>
            <h1 className='text-center text-xl'><span className='coral'>---</span>About Me<span className='coral'>---</span></h1>
            <div class="hero mt-10">
                <div class="hero-content flex-col lg:flex-row ml-12 gap-10">
                    <img src={afran} alt='' className='bg-gray-300 rounded-xl' />
                    <div className='ml-44 mr-20'>
                        <p>My name is Debashish D. Dev. I have completed my engineering on Computer Science in 2019.</p> <br />
                        <p className='text-justify'>I started my journey with wordpress. I used to read a lots of book. I wanted to be a writer. I had a wordpress blog and always wanted to make the blog more beautifull. Thats how I've jummped into Web Development.</p> <br />
                        <p>I want to make the internet minimal and easy to use. I am a mern full stack developer. I write poem in JavaScript.</p> <br />
                        <button class="bg-coral px-5 py-1 rounded font-bold">Download Resume</button> <br /> <br />
                        <p>I love to work with those tech:-</p>
                        <div className='flex'>
                            <img src={react} alt="" />
                            {/* <img src={vue} alt="" />
                            <img src={js} alt="" />
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={mongodb} alt="" />
                            <img src={node} alt="" />
                            <img src={amazon} alt="" />
                            <img src={typescript} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;