import React from 'react'
import Navbar from '../Navbar'
import Slider from '../Slider'
import img1 from '../../assets/build1.png'
import img2 from '../../assets/buld2.png'
import img3 from '../../assets/build3.png'
import img4 from '../../assets/build4.png'
import img5 from '../../assets/build5.png'

import ver1 from '../../assets/version1.png'
import ver2 from '../../assets/version0.png'

import green from '../../assets/green.png';



function Home() {
  return (
    <>
    <section className="hero-section bg-bg h-screen flex flex-col justify-center items-center ">
    <Navbar/>
        <div className="maxed">
             
              <div className="hero-text flex flex-col justify-center gap-4  items-center h-fit ">
                   <button className="rounded-[100px] bg-[#84EEA7] py-[5px] px-[18px] text-black text-xs flex self-center">
                   Designing Spaces, Crafting Futures.
                   </button>
                   <h2 className="text-center text-[#F2F2F2] font-semibold text-3xl md:text-6xl">
                   Build Your Dream Space<span>.</span>
                   </h2>
                   <h4 className="text-sm lg:w-[60%] text-center text-body-white">
                   At Pyramids Architecture Studio, we turn your vision into reality with expert planning and innovative design. Let us create a beautiful, functional space for you.
                   </h4>
                   <button className="bg-[#F19A21] py-[9px] px-[50px] rounded text-white">
                    Hire Us
                   </button>
                   <Slider className='mt-4'/>
              </div>
        </div>
    </section>
    


    <section>
    <div className="bg-bg flex flex-col justify-center items-center py-8">
            <div className="rounded-[100px] bg-[#E8EE84] px-[18px] py-[5px] text-xs">
            Where Vision Meets Craft
            </div>
            <h2 className="text-center text-[#F2F2F2] font-semibold text-3xl md:text-6xl">
            Featured work<span>.</span>
                   </h2>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[70%] xl:w-[80%] lg:p-10 p-4 gap-4">

            <div className="card p-3 bg-[#252525] rounded-[24px] flex flex-col gap-4">
              <div className="image ">
              <img src={img1} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                      <h3 className='text-[#EFEFEF]'>Turkey Modern Era</h3>
                      <p className='text-[#E4E4E4] text-xs'>©️2024 modem</p>
                </div>
                <button className="bg-[#2E2E2E] text-[#e4e4e4] p-[13px] text-xs rounded-3xl">View Project</button>
              </div>
            </div>

            <div className="card p-3 bg-[#252525] rounded-[24px] flex flex-col gap-4">
              <div className="image ">
              <img src={img2} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                      <h3 className='text-[#EFEFEF]'>Turkey Modern Era</h3>
                      <p className='text-[#E4E4E4] text-xs'>©️2024 modem</p>
                </div>
                <button className="bg-[#2E2E2E] text-[#e4e4e4] p-[13px] text-xs rounded-3xl">View Project</button>
              </div>
            </div>

            <div className="card p-3 bg-[#252525] rounded-[24px] flex flex-col gap-4">
              <div className="image ">
              <img src={img3} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                      <h3 className='text-[#EFEFEF]'>Turkey Modern Era</h3>
                      <p className='text-[#E4E4E4] text-xs'>©️2024 modem</p>
                </div>
                <button className="bg-[#2E2E2E] text-[#e4e4e4] p-[13px] text-xs rounded-3xl">View Project</button>
              </div>
            </div>

            <div className="card p-3 bg-[#252525] rounded-[24px] flex flex-col gap-4">
              <div className="image ">
              <img src={img4} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                      <h3 className='text-[#EFEFEF]'>Turkey Modern Era</h3>
                      <p className='text-[#E4E4E4] text-xs'>©️2024 modem</p>
                </div>
                <button className="bg-[#2E2E2E] text-[#e4e4e4] p-[13px] text-xs rounded-3xl">View Project</button>
              </div>
            </div>

            <div className="card p-3 bg-[#252525] rounded-[24px] flex flex-col gap-4">
              <div className="image ">
              <img src={img5} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                      <h3 className='text-[#EFEFEF]'>Turkey Modern Era</h3>
                      <p className='text-[#E4E4E4] text-xs'>©️2024 modem</p>
                </div>
                <button className="bg-[#2E2E2E] text-[#e4e4e4] p-[13px] text-xs rounded-3xl">View Project</button>
              </div>
            </div>

            <div className="card p-3 bg-[#252525] rounded-[24px] flex flex-col gap-4">
              <div className="image ">
              <img src={img1} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                      <h3 className='text-[#EFEFEF]'>Turkey Modern Era</h3>
                      <p className='text-[#E4E4E4] text-xs'>©️2024 modem</p>
                </div>
                <button className="bg-[#2E2E2E] text-[#e4e4e4] p-[13px] text-xs">View Project</button>
              </div>
            </div>


              </div>      
    </div>
    </section>

    <section className='my-20'>
      <div className="w-[90%] m-auto">
           <button className="rounded-[100px] bg-[#84D0EE] py-[5px] px-[18px] text-black text-xs flex self-center">Where Every Detail Matters</button>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text flex flex-col gap-5">
                  <h2 className="text-start text-[#F2F2F2] font-semibold text-3xl md:text-[48px]">
                  Our Studio<span>.</span>
                   </h2>
                   <p className='text-[#d5d5d5] text-lg lg:text-xl lg:w-[80%] lg:leading-[32px]'>
                   Pyramid Architecture Studio is dedicated to creating beautiful, functional spaces that reflect your unique vision. Our team of experienced professionals is committed to delivering excellence in every project.
                   Our team is composed of talented architects, designers, and project managers who bring a wealth of experience and expertise to every project. 
                   </p>
                  </div>

                  <div className="flex images gap-3.5 flex-wrap md:flex-nowrap justify-center items-center">
                       <img src={ver1} alt=""  className='md:w-[50%]'/>
                       <img src={ver2} alt="" className='md:w-[50%] md:relative md:top-[60px]' />
                  </div>
           </div>
      </div>
    </section>


    <section className="my-25 flex flex-col items-center justify-center gap-4 ">
    <button className="rounded-[100px] bg-[#BAE79F] py-[5px] px-[18px] text-black text-xs flex self-center">What we offer.</button>
      <div className="head">
      <h2 className="text-center text-[#F2F2F2] font-semibold text-3xl md:text-[48px]">Why Pyramid Studio<span>?</span></h2>
      <p className="text-lg  text-center w-[60%] m-auto text-[#d5d5d5]">
      Pyramid Architecture Studio is a trusted leader in architectural design, committed to long-term partnerships with clients and  startups. 
      </p>
      </div>

      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             <div className="card flex rounded-2xl bg-[#252525]">
              <div className="image-space">
              <img src={green} alt="" />
              </div>
                 
             </div>
      </div>
    </section>

    </>
  )
}

export default Home