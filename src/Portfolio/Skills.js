import ProgressBar from 'react-animated-progress-bar';
import React from 'react';
import '../CSS/Skills.css'

const Skills = () => {
    return (
        <div className='text-white mt-16 ' id='skills'>
            <h1 className='text-center text-xl'><span className='coral'>---</span>My Skills<span className='coral'>---</span></h1>
            <div className='flex justify-center'>
                <hr className='w-12' />
            </div>
            <div className='flex justify-center mt-1'>
                <hr className='w-16' />
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-x-14 lg:mx-20 mx-4 mt-10'>
                <div>
                    <h1 className=''>JavaScript</h1>
                    <div className='flex items-center'>
                        <progress class="progress progress-secondary w" value="85" max="100"></progress>
                        <p className='ml-4'>80%</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className=''>React.Js</h1>
                    <div className='flex items-center'>
                        <progress class="progress progress-secondary w" value="80" max="100"></progress>
                        <p className='ml-4'>80%</p>
                    </div>
                </div>
                <div>
                    <h1 className=''>Frameworks</h1>
                    <div className='flex items-center'>
                        <progress class="progress progress-secondary w" value="90" max="100"></progress>
                        <p className='ml-4'>90%</p>
                    </div>
                </div>
                <div>
                    <h1 className=''>Node.Js</h1>
                    <div className='flex items-center'>
                        <progress class="progress progress-secondary w" value="75" max="100"></progress>
                        <p className='ml-4'>75%</p>
                    </div>
                </div>
                <div>
                    <h1 className=''>Mongodb</h1>
                    <div className='flex items-center'>
                        <progress class="progress progress-secondary w" value="70" max="100"></progress>
                        <p className='ml-4'>70%</p>
                    </div>
                </div>
                <div>
                    <h1 className=''>React-Tailwind</h1>
                    <div className='flex items-center'>
                        <progress class="progress progress-secondary w" value="95" max="100"></progress>
                        <p className='ml-4'>95%</p>
                    </div>
                </div>
                <div>
                    <h1 className=''>HTML</h1>
                    <div className='flex items-center'>
                        <progress class="progress progress-secondary w" value="90" max="100"></progress>
                        <p className='ml-4'>90%</p>
                    </div>
                </div>
                <div>
                    <h1 className=''>CSS</h1>
                    <div className='flex items-center'>
                        <progress class="progress progress-secondary w" value="95" max="100"></progress>
                        <p className='ml-4'>95%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;