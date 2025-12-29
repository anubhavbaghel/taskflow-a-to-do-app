import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";




const Footer = () => {
    return (
        <div className="flex flex-col items-center py-2 px-4 fixed bottom-0 left-0 right-0 bg-white">
            <div className='flex items-center gap-2'>
                Made with <FaHeart className='text-red-600'/> by Anubhav
            </div>
            <div className='flex items-center gap-3'>
                Connect with me :
                <a href="https://www.linkedin.com/in/anubhav-baghel/" target="_blank"><FaLinkedin className='text-blue-600 text-xl' /></a>
                <a href="https://github.com/anubhavbaghel" target='_blank'><FaGithub className='text-[#1F2328] text-xl'/></a>
                <a href="mailto:code.anubhavbaghel@gmail.com" className='text-xl' target="_blank" ><SiGmail /></a>
            </div>
        </div>
    )
}

export default Footer