import React from 'react';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_skfyz4b', 'template_9nhj0jn', e.target, 'ob206FuK2vUJjsLFD')
            .then(res => {
                if (res) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Email Sent',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                e.target.reset();
            })
    }
    return (
        <div className='mt-16 text-white mb-10 bg-gray-900 p-6 lg:mx-16 mx-4 rounded-xl' id='contact'>
            <h1 className='text-center text-xl'><span className='coral'>---</span>Contact Me<span className='coral'>---</span></h1>
            <div className='flex justify-center'>
                <hr className='w-12' />
            </div>
            <div className='flex justify-center mt-1'>
                <hr className='w-16' />
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 mx-12'>
                <div className='lg:mt-10 lg:w-96'>
                    <h1 className='text-3xl text-center'>Get in Touch</h1>
                    <p className='text-center'>How can I help you!!</p>
                    <div className='lg:ml-20'>
                        <div className='flex items-center mt-12'>
                            <i class="fa-solid fa-address-book text-4xl"></i>
                            <h1 className='ml-4 text-xl'>Address:-</h1>
                        </div>
                        <p className='ml-14 text-sm'>Savar 1349 , Dhaka , Bangladesh</p>
                    </div>

                    <div className='lg:ml-20'>
                        <div className='flex items-center mt-2'>
                            <i class="fa-solid fa-envelope-open-text text-4xl"></i>
                            <h1 className='ml-4 text-xl'>Email:-</h1>
                        </div>
                        <p className='ml-14 text-sm'>webafranfahim@gmail.com</p>
                    </div>

                    <div className='lg:ml-20'>
                        <div className='flex items-center mt-2'>
                            <i class="fa-solid fa-phone-volume text-4xl"></i>
                            <h1 className='ml-4 text-xl'>Phone:-</h1>
                        </div>
                        <p className='ml-14 text-sm'>01795816961</p>
                    </div>

                    <div className='mt-8 text-center'>
                        <p className='text-3xl gap-20 '>
                            <Link to='/'><i class="fa-brands fa-facebook"></i></Link>
                            <Link to='/'><i class="fa-brands fa-github ml-2"></i></Link>
                            <Link to='/'><i class="fa-brands fa-linkedin ml-2 rounded-full"></i></Link>
                            <Link to='/'><i class="fa-brands fa-instagram-square ml-2"></i></Link>
                            <Link to='/'><i class="fa-brands fa-youtube ml-2"></i></Link>
                        </p>
                    </div>
                </div>

                <div className='lg:mt-6'>
                    <form onSubmit={sendEmail} className='text-center mt-8'>
                        <div className='flex gap-10'>
                            <input type="text" placeholder="Your Name" class="text-black input input-bordered input-info w-full max-w-xs" name='name' />
                            <input type="text" placeholder="Your Email" class="text-black input input-bordered input-info w-full max-w-xs" name='email' />
                        </div>
                        <div className='flex gap-10 mt-10'>
                            <input type="text" placeholder="Your Number" class="text-black input input-bordered input-info w-full max-w-xs" name='number' />
                            <input type="text" placeholder="Subject" class="text-black input input-bordered input-info w-full max-w-xs" name='subject' />
                        </div>
                        <textarea placeholder='Your message' className='text-black w-full h-28 mt-10 rounded-xl' name="message" id="" cols="30" rows="10"></textarea>
                        <button className='bg-coral px-5 py-1 rounded font-bold mt-10'>Send Me</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;