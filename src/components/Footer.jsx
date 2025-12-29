import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="flex flex-col items-center py-2 px-4 sticky bottom-0 bg-white">
            <div className='flex items-center gap-2'>
                Made with <FaHeart className='text-red-600'/> by Anubhav
            </div>
            <div className='flex items-center gap-3'>
                Connect with me :
                <a href="https://www.linkedin.com/in/anubhav-baghel/" target="_blank"><FaLinkedin className='text-blue-600 text-xl' /></a>
                <a href="https://github.com/anubhavbaghel" target='_blank'><FaGithub className='text-[#1F2328] text-xl'/></a>
            </div>
        </div>
    )
}

export default Footer