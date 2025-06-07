import React from 'react'
import { FaFacebookSquare,FaTelegram,FaLinkedinIn,FaInstagram, } from 'react-icons/fa'





function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className=' flex flex-col items-center justify-center'>
          <div className='flex space-x-4'>
            <a href="https://www.facebook.com/maurya.lucky.7?mibextid=ZbWKwL"target='-blank' >
                        <FaFacebookSquare className='text-2xl cursor-pointer'  /></a>
            <a href="https://www.instagram.com/smart_lucky9341/profilecard/?igsh=MXU2MmI4dzcwcXl3OQ=="target='_blank'><FaInstagram  className='text-2xl cursor-pointer'/></a>
            <a href="https://www.linkedin.com/in/neeraj-maurya-0a183b304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"target='_blank'><FaLinkedinIn className='text-2xl cursor-pointer' /></a>
            <a href="http://t.me/MAURYA_Ji1"target='_blank'><FaTelegram  className='text-2xl cursor-pointer'/></a>
          </div>
          <div className='mt-8 border-t border-gray-700 pt-8  flax-col items-center '>
            <p className='text-sm'>
              &copy;2024 Your Company. All rights reserved.
            </p>
            <p className='text-sm'> and Supportive Partner &#9829; Manish Singh</p>
          </div>
        </div>
      </div>
    </footer>
    </>
   
  )
}

export default Footer
