import React, { useEffect, useState } from 'react';
import '../CSS/Projects.css'
import Project from './Project';

const Projects = () => {
    const [myWorks, setMyWorks] = useState([])
    useEffect(() => {
        fetch('https://murmuring-springs-80634.herokuapp.com/allProjects')
            .then(res => res.json())
            .then(data => setMyWorks(data))
    }, [])
    return (
        <div className='mt-16' id='project'>
            <h1 className='text-center text-white text-xl'><span className='coral text-sm'>---</span>My Projects<span className='coral'>---</span></h1>
            <div className='flex justify-center'>
                <hr className='w-12' />
            </div>
            <div className='flex justify-center mt-1'>
                <hr className='w-16' />
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 mt-10 lg:mx-20 lg:gap-x-10 gap-y-8'>
                {
                    myWorks.map(myWork => <Project
                        key={myWork._id}
                        myWork={myWork}>
                    </Project>)
                }
            </div>

            <div className='mt-10 flex justify-center text-white'>
                <button className='bg-coral px-5 py-1 rounded font-bold'>View All Projects</button>
            </div>
        </div>
    );
};

export default Projects;