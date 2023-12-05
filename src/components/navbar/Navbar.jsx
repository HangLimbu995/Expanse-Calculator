// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from 'src/context/UserContext';

const Navbar = () => {
    const { isLoggedIn } = useUser()
    console.log(isLoggedIn)

    let content = isLoggedIn ?
        <div className='flex justify-center align-center md:mr-[90px] gap-5' >
            <Link to='/about' className='text-[17px] text-white' >About</Link>
            <Link to='/services' className='text-[17px]  text-white font-semibold' >Services</Link>
            <Link to='/contact_us' className='text-[17px]  text-white font-semibold' >Contact Us</Link>
        </div>
        :
        <div className='flex justify-center align-center md:mr-[90px] gap-5' >
            <Link to='/signup' className='text-[17px] text-white' >Sign Up</Link>
            <Link to='/signin' className='text-[17px]  text-[#1674F4] font-semibold' >Sign In</Link>
        </div>


    return (
        <nav className="bg-gray-800 flex align-center justify-between p-3">
            <div className='flex align-center md:ml-[90px]' >
                <Link to='/' className='text-2xl text-white' >Logo</Link>
            </div>
            {content}

        </nav>
    );
};

export default Navbar;