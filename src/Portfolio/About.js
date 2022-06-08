import React from 'react';
import '../CSS/About.css'
import afran from '../Images/Afran cartoon.png'
import react from '../Images/React.png'
import vue from '../Images/vue.png'
import js from '../Images/js.png'
import html from '../Images/html.png'
import css from '../Images/css.png'
import mongodb from '../Images/mongodb.png'
import node from '../Images/node.png'
import amazon from '../Images/amazon.png'
import typescript from '../Images/typescript.png'

const About = () => {
    return (
        <div className='text-white mt-20'>
            <h1 className='text-center text-xl'><span className='coral'>---</span>About Me<span className='coral'>---</span></h1>
            <div className='flex justify-center'>
                <hr className='w-12' />
            </div>
            <div className='flex justify-center mt-1'>
                <hr className='w-16' />
            </div>
            <div class="hero mt-10">
                <div class="hero-content flex-col lg:flex-row ml-12 gap-10">
                    <img src={afran} alt='' className='bg-gray-300 rounded-xl' />
                    <div className='ml-44 mr-20'>
                        <p>My name is Debashish D. Dev. I have completed my engineering on Computer Science in 2019.</p> <br />
                        <p className='text-justify'>I started my journey with wordpress. I used to read a lots of book. I wanted to be a writer. I had a wordpress blog and always wanted to make the blog more beautifull. Thats how I've jummped into Web Development.</p><br />

                        <button class="bg-coral px-5 py-1 rounded font-bold">Download Resume</button> <br /> <br />
                        <p>I love to work with those tech:-</p>
                        <div className='flex mt-2'>
                            <img src={react} alt="" />
                            <img className='ml-2' src={vue} alt="" />
                            <img className='ml-2' src={js} alt="" />
                            <img className='ml-2' src={html} alt="" />
                            <img className='ml-2' src={css} alt="" />
                            <img className='' src={mongodb} alt="" />
                            <img className='ml-2' src={node} alt="" />
                            {/* <img className='ml-2' src={amazon} alt="" />
                            <img className='ml-2' src={typescript} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;