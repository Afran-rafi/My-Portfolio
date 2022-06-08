import React from 'react';

const Contact = () => {
    return (
        <div className='mt-10 text-white mb-10'>
            <h1 className='text-center'><span className='coral'>---</span>Contact Us<span className='coral'>---</span></h1>
            <p className='text-center text-xl'>Stay Connect with us!!</p>
            <div className='flex justify-center'>
                <hr className='w-24' />
            </div>
            <div className='flex justify-center mt-1'>
                <hr className='w-32' />
            </div>
            <div className='flex justify-center items-center flex-col'>
                <form className='text-center mt-8'>
                    <input className='w-96 p-2 rounded-md' type="text" name="" id="" placeholder='Email Address' /> <br /> <br />
                    <input className='w-96 p-2 rounded-md' type="text" name="" id="" placeholder='subject' /> <br /> <br />
                    <textarea className='w-96 h-40 rounded-md p-2' name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea> <br /> <br />
                    <button className='bg-coral px-5 py-1 rounded font-bold ml-2'>Submit</button>
                </form>
            </div >
        </div>
    );
};

export default Contact;