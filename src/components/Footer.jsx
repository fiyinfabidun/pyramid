import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <>
    <div className="footer p-20 relative bg-[#0B0E17] z-100  m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
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
                    <h3 className='text-lg text-white font-bold py-4'>Services</h3>
                    <p className='text-sm font-light text-white'>Interior design</p>
                    <p className='text-sm font-light text-white'>Furniture design</p>
                    <p className='text-sm font-light text-white'>3D visualization</p>
                    <p className='text-sm font-light text-white'>Sketch plans</p>


                   </div>

                   <div className="head flex flex-col gap-4">
                    <h3 className='text-lg text-white font-bold py-4'>Services</h3>
                    <p className='text-sm font-light text-white'>Interior design</p>
                    <p className='text-sm font-light text-white'>Furniture design</p>
                    <p className='text-sm font-light text-white'>3D visualization</p>
                    <p className='text-sm font-light text-white'>Sketch plans</p>


                   </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer