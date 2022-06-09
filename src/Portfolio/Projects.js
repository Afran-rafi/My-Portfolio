import React from 'react';
import { Link } from 'react-router-dom';
import express from '../Images/Express.png'
import fruits from '../Images/Fruit.png'
import gym from '../Images/Gym.png'

const Projects = () => {
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
                <div class="card w-96 text-white shadow-md bg-gray-900 ml-2 mr-2 lg:ml-0 lg:mr-0">
                    <figure><img src={fruits} alt="Shoes" style={{ height: '200px' }} /></figure>
                    <div class="card-body">
                        <div className='flex gap-x-2 text-xl'>
                            <div className='tooltip' data-tip="Live Link">
                                <a href="https://assignment-11-5b872.web.app/" target='_blank' rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                            <div className='tooltip' data-tip="Source Code">
                                <a href="https://github.com/Afran-rafi/Fruits-Warehouse-Client" target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <h2 class="card-title coral">
                            Fruits Warehouse!
                            <div class="badge badge-secondary">MERN Stack</div>
                        </h2>
                        <p>Warehouse's application, where user can buy and seller can stock more product.</p>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline">React.Js</div>
                            <div class="badge badge-outline">Tailwind CSS</div>
                            <div class="badge badge-outline">Firebase</div>
                            <div class="badge badge-outline">Node.Js</div>
                            <div class="badge badge-outline">Mongodb</div>
                            <div class="badge badge-outline">Heroku</div>
                        </div>
                        {/* <div className='flex justify-center'>
                            <button className='w-32 bg-coral px-3 py-1 rounded font-bold text-white'>View Details</button>
                        </div> */}
                    </div>
                </div>
                <div class="card w-96 text-white shadow-md bg-gray-900 ml-2 mr-2 lg:ml-0 lg:mr-0">
                    <figure><img src={express} alt="Shoes" style={{ height: '200px' }} /></figure>
                    <div class="card-body">
                        <div className='flex gap-x-2 text-xl'>
                            <div className='tooltip' data-tip="Live Link">
                                <a href="https://assignment-12-cda50.web.app/" target='_blank' rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                            <div className='tooltip' data-tip="Source Code">
                                <a href="https://github.com/Afran-rafi/Car-Parts-Client" target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <h2 class="card-title coral">
                            Express Car Parts!
                            <div class="badge badge-secondary">MERN Stack</div>
                        </h2>
                        <p>A car parts selling application where user can easily buy car parts with few clicks</p>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline">React.Js</div>
                            <div class="badge badge-outline">Tailwind CSS</div>
                            <div class="badge badge-outline">Firebase</div>
                            <div class="badge badge-outline">Node.Js</div>
                            <div class="badge badge-outline">Mongodb</div>
                            <div class="badge badge-outline">Heroku</div>
                        </div>
                        {/* <div className='flex justify-center'>
                            <button className='w-32 bg-coral px-3 py-1 rounded font-bold text-white'>View Details</button>
                        </div> */}
                    </div>
                </div>
                <div class="card w-96 text-white shadow-md bg-gray-900 ml-2 mr-2 lg:ml-0 lg:mr-0">
                    <figure><img src={gym} alt="Shoes" style={{ height: '200px' }} /></figure>
                    <div class="card-body">
                        <div className='flex gap-x-2 text-xl'>
                            <div className='tooltip' data-tip="Live Link">
                                <a href="https://assignment-10-b0017.web.app/" target='_blank' rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                            <div className='tooltip' data-tip="Source Code">
                                <a href="https://github.com/Afran-rafi/Gym-Trainer" target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <h2 class="card-title coral">
                            Gym-Trainer!
                            <div class="badge badge-secondary">Landing Page</div>
                        </h2>
                        <p>gym trainer is the one-stop solution if you want to make fit yourself. where a trainer provide a gym service</p>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline">React.Js</div>
                            <div class="badge badge-outline">Tailwind CSS</div>
                            <div class="badge badge-outline">Firebase</div>
                            <div class="badge badge-outline">Node.Js</div>
                            <div class="badge badge-outline">Mongodb</div>
                            <div class="badge badge-outline">Heroku</div>
                        </div>
                        {/* <div className='flex justify-center'>
                            <button className='w-32 bg-coral px-3 py-1 rounded font-bold text-white'>View Details</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link to='/projects'><button className='bg-coral px-5 py-1 rounded font-bold text-white'>View All Project</button></Link>
            </div>
        </div>
    );
};

export default Projects;