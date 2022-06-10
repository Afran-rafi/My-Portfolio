import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams()
    const [myWorks, setMyWorks] = useState({})

    useEffect(() => {
        fetch(`https://murmuring-springs-80634.herokuapp.com/allProjects/${id}`)
            .then(res => res.json())
            .then(data => setMyWorks(data))
    }, [myWorks])
    const { image1, image2, image3, name, Live, git, title, descrip, description1, description2, description3, description4, description5, technology, gitBackend } = myWorks

    return (
        <div className='text-white mb-16 lg:mx-12'>
            <h1 className='text-4xl coral text-center mt-16 lg:mx-12'>{name}</h1>
            <div className='grid grid-cols-2 gap-6 mt-10'>
                <figure><img src={image1} alt="Album" className='rounded-xl' /></figure>
                <div>
                    <div>
                        <img src={image2} alt="" className='rounded-xl' />
                    </div>
                    <div className='mt-6'>
                        <img src={image3} alt="" className='rounded-xl' />
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='mt-10'>
                    <p className='text-xl'>Projects Overview:-</p>
                    <p>{descrip}</p>
                    <div className='ml-6'>
                        <p><i class="fa-solid fa-angles-right"></i> {description1}</p>
                        <p><i class="fa-solid fa-angles-right"></i> {description2}</p>
                        <p><i class="fa-solid fa-angles-right"></i> {description3}</p>
                        <p><i class="fa-solid fa-angles-right"></i> {description4}</p>
                        <p><i class="fa-solid fa-angles-right"></i> {description5}</p>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-xl'>Used Technology:-</p>
                    <div class="card-actions justify-start mt-4">
                        <div class="badge badge-outline">React.Js</div>
                        <div class="badge badge-outline">Tailwind CSS</div>
                        <div class="badge badge-outline">Firebase</div>
                        <div class="badge badge-outline">Node.Js</div>
                        <div class="badge badge-outline">Mongodb</div>
                        <div class="badge badge-outline">Heroku</div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-xl'>Source Code:-</p>
                <div className='mt-4'>
                    <p>Live Link: {Live}</p>
                    <p>Git Client Link: {git}</p>
                    <p>Git Backend Link: {gitBackend}</p>
                </div>
            </div>
        </div>

    );
};

export default ProjectDetails;