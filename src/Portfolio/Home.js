import React from 'react';
import '../CSS/Home.css'
import afran from '../Images/Afran cartoon.png'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Home = () => {
    return (
        <div class="hero mt-10">
            <div class="hero-content flex-col lg:flex-row-reverse gap-6">
                <img src={afran} alt="" class="rounded-full bg-white shadow-2xl ml-64" />
                <div className='text-white text-align'>
                    <p>
                        <Link to='/'><i class="fa-brands fa-facebook"></i></Link>
                        <Link to='/'><i class="fa-brands fa-github"></i></Link>
                        <Link to='/'><i class="fa-brands fa-linkedin"></i></Link>
                        <Link to='/'><i class="fa-brands fa-instagram-square"></i></Link>
                        <Link to='/'><i class="fa-brands fa-youtube"></i></Link>
                    </p>
                    <p className='text-xl'>Hello, I'M <span className='coral font-bold'>Afran</span></p>

                    <div style={{ fontSize: '40px' }} >
                        <Typed
                            strings={[
                                'MERN Stack Developer',
                                'Front-end Developer',
                                'JavaScript Developer']}
                            typeSpeed={50}
                            backSpeed={70}
                            loop >
                        </Typed>
                    </div>

                    <p>Knock of building applications with front and backend operations</p>
                    <div className='mt-4'>
                        <button className='bg-coral px-5 py-1 rounded font-bold'>Hire me</button>
                        <button className='bg-coral px-5 py-1 rounded font-bold ml-2'>Get Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;