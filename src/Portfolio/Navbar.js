import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../CSS/Navbar.css'
import logo from '../Images/logo.png'

const Navbar = ({ children }) => {

    const myItems = <>
        <li><HashLink className='rounded-md h-10 mr-4 font-bold css' smooth to='#home'>Home</HashLink></li>
        <li><HashLink className='rounded-md h-10 mr-4 font-bold css' smooth to='#about'>About</HashLink></li>
        <li><HashLink className='rounded-md h-10 mr-4 font-bold css' smooth to='#skills'>Skills</HashLink></li>
        <li><HashLink className='rounded-md h-10 mr-4 font-bold css' smooth to='#project'>Project</HashLink></li>
        <li><HashLink className='rounded-md h-10 mr-4 font-bold css' smooth to='#Blogs'>Blogs</HashLink></li>
        <li><HashLink className='rounded-md h-10 mr-4 font-bold css' smooth to='#contact'>Contact</HashLink></li>
    </>;

    return (
        <div class="drawer drawer-end" id='home'>
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar">
                    <div class="flex-1 px-2 mx-2 text-4xl text-white"><img src={logo} alt="" />fran_Rafi</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal text-white">
                            {myItems}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 text-white bg-primary">
                    {myItems}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;