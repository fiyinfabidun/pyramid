import React from 'react'
import Navbar from '../Navbar'
import Slider from '../Slider'
import img1 from '../../assets/build1.png'
import img2 from '../../assets/buld2.png'



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

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[70%] p-10 gap-4">

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

            <div className="card p-3 bg-[#252525] rounded-[24px] flex flex-col gap-4">
              <div className="image ">
              <img src={img2} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                      <h3 className='text-[#EFEFEF]'>Turkey Modern Era</h3>
                      <p className='text-[#E4E4E4] text-xs'>©️2024 modem</p>
                </div>
                <button className="bg-[#2E2E2E] text-[#e4e4e4] p-[13px] text-xs">View Project</button>
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

    </>
  )
}

export default Home