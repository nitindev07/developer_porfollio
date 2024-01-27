import React from 'react'
import {FaGithub, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'
import img from '../assets/Ellipse 32 (1).png'

const Hero = () => {
  return (
    <div className=''>
    <div className='flex w-full h-full'>
      {/* social */}
      <div className='hidden md:flex flex-1 items-end'>
            <div className='flex flex-col justify-center items-start gap-y-9'>
                <a className='social' href="/"><FaWhatsapp/></a>
                <a className='social' href="/"><FaLinkedinIn/></a>
                <a className='social' href="/"><FaGithub/></a>
            </div>
      </div>
      <div className='flex justify-center w-full items-center'>
        {/* body */}
        <div className='flex flex-col items-center justify-center '>
          {/* image */}
          <div>
            <img src={img} alt="" />
          </div>
          {/* text */}
          <div className='flex flex-col justify-center mt-5 text-center items-center'>
            <h5 className='text-2xl'>Hi. I’m Priyansh</h5>
            <h1 className='text-4xl sm:text-6xl font-semibold w-full max-w-[540px] leading-[1] mb-4 '>
            Creating a better world through impact.
            </h1>
          </div>
          <div className='text-lg md:text-2xl text-[#999999] text-center font-semibold mb-10'><p>a full stack developer | co-founder | Product manager </p></div>
          {/* btn */}
          <a className='btn' href='/'>
            Download CV
          </a>
        </div>
      </div>
      <div className='hidden md:flex flex-col items-center gap-y-7 justify-end'>
        <div className='origin-center rotate-90 text-sm font-semibold'>SCROLL</div>
        <div className='bg-white h-[200px] max-w-2 w-full rounded-full'></div>
      </div>
    </div>
    </div>
  )
}

export default Hero
