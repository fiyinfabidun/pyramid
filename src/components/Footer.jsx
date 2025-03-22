import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="footer py-20 relative bg-black z-100  m-auto #E5E5E524">
        <div className='footer-b w-full py-5'>


        <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] m-auto ">
            <div className="logo">
                <img src={logo} alt="" className='w-[70%]' />
                <p className='text-[#E6E6E6] font-light'>Architecture Studio</p>
            </div>

            <div className="links grid grid-cols-1 md:grid-cols-3">
                   <div className="head flex flex-col gap-4">
                    <h3 className='text-lg text-white font-bold py-4'>Services</h3>
                    <p className='text-sm font-light text-white'>Interior design</p>
                    <p className='text-sm font-light text-white'>Furniture design</p>
                    <p className='text-sm font-light text-white'>3D visualization</p>
                    <p className='text-sm font-light text-white'>Sketch plans</p>


                   </div>

                   <div className="head flex flex-col gap-4">
                    <h3 className='text-lg text-white font-bold py-4'>Company</h3>
                    <p className='text-sm font-light text-white'>Interior design</p>
                    <p className='text-sm font-light text-white'>Furniture design</p>
                    <p className='text-sm font-light text-white'>3D visualization</p>
                    <p className='text-sm font-light text-white'>Sketch plans</p>


                   </div>

                   <div className="head flex flex-col gap-4">
                    <h3 className='text-lg text-white font-bold py-4'>Studio</h3>
                    <p className='text-sm font-light text-white'>Interior design</p>
                    <p className='text-sm font-light text-white'>Furniture design</p>
                    <p className='text-sm font-light text-white'>3D visualization</p>
                    <p className='text-sm font-light text-white'>Sketch plans</p>


                   </div>
            </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 text-[#9F9F9F] font-thin w-[90%] m-auto pt-15">
               <p>©2025 Pyramids Studio, All rights reserved.</p>
               <div className="flex justify-between flex-wrap gap-4">
                  <p>Privacy Policy</p>
                  <p>Terms</p>
                  <p>Company</p>
                  <p>Contact us</p>
               </div>
               <div className="flex  flex-wrap justify-center gap-3">
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-gray-400 hover:text-blue-500 text-2xl transition-all" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-gray-400 hover:text-blue-400 text-2xl transition-all" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-gray-400 hover:text-pink-500 text-2xl transition-all" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="text-gray-400 hover:text-blue-600 text-2xl transition-all" />
      </a>
               </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer