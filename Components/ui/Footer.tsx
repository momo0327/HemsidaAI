'use client'

import React, { useState } from 'react';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

function Footer() {
  // State to handle form data
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  });

  // Handle form inputs

  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img 
                src="/footer-grid.svg" 
                alt="grid" 
                className='w-full h-full opacity-80'
            />
        </div>

        <div className='relative flex flex-col items-center pointer-events-none inset-0'>
            {/* Background Gradient */}
            <div className='absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,transparent_15%,blue)] dark:bg-black bg-white z-0'></div>

            {/* Content */}
            <h1 className='heading lg:max-w-[45vw] z-10'>
                Ready to change your <span className='text-blue-600'>digital</span>
                <br />
                work experience?
            </h1>
            
            <p className='text-white-200 md:mt-10 my-5 text-center z-10'>
                Fyll i uppgifterna för att gå med i väntelistan!
            </p>

            {/* Form Section */}
            <form className='w-full flex flex-col items-center z-10'>
                <div className='flex flex-col md:flex-col gap-4 w-[60%] max-w-lg m-8'>
                    {/* First Name Input */}
                    <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                    
                        placeholder="First Name"
                        className='
                        px-4 py-3 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-blue-600 w-full text-gray-800 bg-black'
                        required
                    />
                    {/* Email Input */}
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        placeholder="Email"
                        className='px-4 py-3 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-blue-600 w-full text-gray-800 bg-black'
                        required
                    />
                </div>
            </form>

            <a href="mailto:dina@example.com"> {/* Updated to 'mailto:' for proper email link */}
                <MagicButton
                    title='Request Invitation'
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'> copyright © 2024 </p>
            <div className='flex items-center md:gap-3 gap-6'>
                social media
            </div>
        </div>
    </footer>
  );
}

export default Footer;
