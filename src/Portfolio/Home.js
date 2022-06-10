import React from 'react';
import '../CSS/Home.css'
import afran from '../Images/Afran cartoon.png'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Home = () => {
    return (
        <div class="hero mt-10">
            <div class="hero-content flex-col lg:flex-row-reverse gap-6">
                <img src={afran} alt="" class="rounded-full bg-white shadow-2xl ml-64 lg:mx-10" />
                <div className='text-white text-align lg:ml-8'>
                    <p>
                        <Link to='/'><i class="fa-brands fa-facebook"></i></Link>
                        <Link to='/'><i class="fa-brands fa-github ml-2"></i></Link>
                        <Link to='/'><i class="fa-brands fa-linkedin ml-2"></i></Link>
                        <Link to='/'><i class="fa-brands fa-instagram-square ml-2"></i></Link>
                        <Link to='/'><i class="fa-brands fa-youtube ml-2"></i></Link>
                    </p>
                    <p className='text-xl'>Hello, I'M <span className='coral font-bold'>Afran</span></p>
                    <div style={{ fontSize: '40px' }} >
                        <Typed
                            strings={[
                                'MERN Stack Developer!! <i class="fa-brands fa-react"></i>',
                                'Front-end Developer!! <i class="fa-solid fa-laptop-code"></i>',
                                'JavaScript Developer!! <i class="fa-brands fa-js"></i>',
                                'Software Developer!! <i class="fa-brands fa-node-js"></i>'
                            ]}
                            typeSpeed={50}
                            backSpeed={70}
                            loop >
                        </Typed>
                    </div>

                    {/* <p>Knock of building applications with front and backend operations</p> */}
                    <p className='text-sm'>I'M Afran_Rafi. A highly skilled developer with strong confidence with quality and high performance web applications seeks the rules of Junior Software Developer at Javascript, React, Express JS and modern Javascript libraries.</p>
                    <div className='mt-4'>
                        <button className='bg-coral px-5 py-1 rounded font-bold'>Hire me <i class="fa-solid fa-user-graduate"></i></button>
                        <a href='Afran Resume.pdf' download><button className='bg-coral px-5 py-1 rounded font-bold ml-2'>Get Resume <i class="fa-solid fa-cloud-arrow-down"></i></button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;