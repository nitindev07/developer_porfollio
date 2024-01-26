import React from 'react'
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-black'>
    <div className='flex px-5 py-8 max-w-[1360px] w-full mx-auto justify-between items-center'>
      <h5 className='text-[13px]'>All right reversed, 2024</h5>
      <div className='flex gap-9 items-center text-gray-200 justify-center'>
        <MdOutlineWhatsapp size={30}/>
        <FaLinkedin  size={30}/>
        <FaTwitter size={30}/>
      </div>
    </div>
    </div>
  )
}

export default Footer
