import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-16 px-4 py-10 mb-10'>
      <div className='flex justify-between items-center'>
        {/* email */}
        <div>
            <h2 className='p'>xuyz@gamil.com</h2>
        </div>
        {/* navbar */}
        <div>
            <ul className='flex items-center text-[16px] gap-16'>
                <a href='/' className ='p nav-link'>Home</a>
                <a href='#work' className='p  nav-link'>Work</a>
                <a href='#contact' className='p nav-link'>Contact</a>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
