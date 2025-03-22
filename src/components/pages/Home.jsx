/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Slider from '../Slider'
import img1 from '../../assets/build1.png'
import img2 from '../../assets/buld2.png'
import img3 from '../../assets/build3.png'
import img4 from '../../assets/build4.png'
import img5 from '../../assets/build5.png'

import ver1 from '../../assets/version1.png'
import ver2 from '../../assets/version0.png'

import green from '../../assets/green.png';
import vi from '../../assets/vi.png';
import pale from '../../assets/pale.png';

import { useState } from 'react'

import { FiPlus, FiMinus } from "react-icons/fi";
import { AnimatePresence,motion } from 'framer-motion'

import veca from '../../assets/veca.png'
import vecb from '../../assets/vecb.png'
import vecc from '../../assets/vecc.png'
import vecd from '../../assets/vecd.png'
import vece from '../../assets/vece.png'

const faqs = [
  {
    question: "What services does your architecture firm offer?",
    answer: "Our firm offers a comprehensive range of services including architectural design, urban planning, interior design, sustainable architecture consulting, 3D visualization, and project management from concept to completion."
  },
  {
    question: "How do you charge for your architectural services?",
    answer: "We typically charge based on a percentage of the total construction cost, ranging from 8-15% depending on project complexity. For smaller projects, we may offer hourly rates or fixed-fee packages. We provide detailed fee proposals after our initial consultation."
  },
  {
    question: "What is your design philosophy?",
    answer: "Our design philosophy centers on creating spaces that harmoniously blend functionality, aesthetics, and sustainability. We believe architecture should respond to both human needs and environmental context, while pushing boundaries of innovation and respecting cultural heritage."
  },
  {
    question: "How long does the typical architectural design process take?",
    answer: "The design process timeline varies by project scope. Residential projects typically take 3-6 months for design development, while commercial projects may require 6-12 months. Construction documentation and permitting add additional time. During our initial consultation, we'll provide a customized timeline for your specific project."
  },
  {
    question: "Do you specialize in any particular architectural style?",
    answer: "While we're versatile in various architectural styles, our portfolio showcases strength in contemporary sustainable design, adaptive reuse of historic structures, and biophilic architecture. We prioritize tailoring our approach to each client's vision rather than imposing a signature style."
  },
  {
    question: "What sustainability practices do you incorporate into your designs?",
    answer: "We integrate numerous sustainable practices including passive solar design, energy-efficient systems, water conservation strategies, locally-sourced and eco-friendly materials, green roofs, and smart home technology. Our firm includes LEED-certified professionals who can guide projects toward various sustainability certifications."
  }
];

function Home() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                   <button className="bg-[#F19A21] py-[9px] px-[50px] rounded-[100px] text-white">
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

             <div className="grid note grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[70%] xl:w-[80%] lg:p-10 p-4 gap-4">

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
      <p className="text-lg  text-center  w-[80%] lg:w-[60%] m-auto text-[#d5d5d5]">
      Pyramid Architecture Studio is a trusted leader in architectural design, committed to long-term partnerships with clients and  startups. 
      </p>
      </div>

      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[80%] mt-8 gap-3 w-[90%] m-auto">
             <div className="card flex rounded-2xl bg-[#252525] flex-col">
              <div className="image-space flex justify-center items-center bg-[#2EF1AD0F] p-10">
              <img src={green} alt="" className='w-[50%]' />
              </div>
              <div className="text-[#d5d5d5] text-center p-6">
                <h2 className="text-lg">
                Modern Architecture Patterns
                </h2>
                  <p className="text-sm">
                  Explore modern architecture patterns that blend aesthetics with functionality, creating spaces that are both visually stunning and purpose-driven. We turn bold ideas into reality, delivering structures that stand the test of time.
                  </p>
              </div>
                 
             </div>

             <div className="card flex rounded-2xl bg-[#252525] flex-col">
              <div className="image-space flex justify-center items-center bg-[#acc7d9] p-10">
              <img src={pale} alt="" className='w-[50%]' />
              </div>
              <div className="text-[#d5d5d5] text-center p-6">
                <h2 className="text-lg">
                Flexible Financial Plannings
                </h2>
                  <p className="text-sm">
                  Maintain flexibility in your financial planning with customized solutions. Whether you’re editing, adding, or reallocating budgets, our approach ensures every project remains on track without compromising on quality.
                  </p>
              </div>
                 
             </div>

             <div className="card flex rounded-2xl bg-[#252525] flex-col">
              <div className="image-space flex justify-center items-center bg-[#d4c3d0] p-10">
              <img src={vi} alt="" className='w-[50%]' />
              </div>
              <div className="text-[#d5d5d5] text-center p-6">
                <h2 className="text-lg">
                Smart Resource Allocation
                </h2>
                  <p className="text-sm">
                  Allocate resources efficiently across every phase of your architectural project. Our strategic planning services empower you to manage spending limits and make informed decisions for maximum impact.
                  </p>
              </div>
                 
             </div>
      </div>
    </section>

    <section className="my-20 flex flex-col justify-center items-center  m-auto">
    <button className="rounded-[100px] bg-[#E79FE5] py-[5px] px-[18px] text-black text-xs flex self-center">Crafting Timeless Spaces</button>
      <div className="head">
      <h2 className="text-center text-[#F2F2F2] font-semibold text-3xl md:text-[48px]">Frequently Asked Questions<span>.</span></h2>
      </div>

      <div className="faq-sect lg:w-[60%] p-4 md:p-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-[#1A1A1A] px-6 md:px-10 py-3 mb-2.5 rounded-3xl  border-[0.5px] border-[#3C3C3C]">
          {/* Question Section */}
          <div 
            className="flex justify-between items-center cursor-pointer text-lg font-semibold text-white"
            onClick={() => toggleFAQ(index)}
          >
            <p>{faq.question}</p>
            {openIndex === index ? <FiMinus className="text-xl" /> : <FiPlus className="text-xl" />}
          </div>

          {/* Answer Section (Animated) */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-gray-400 mt-2"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
    </section>


    <section className="py-10 w-[90%] m-auto">
    <button className="rounded-[100px] bg-[#BAE79F] py-[5px] px-[18px] text-black text-xs flex self-start">Hear from people</button>
    <h2 className="text-start text-[#F2F2F2] font-semibold text-3xl md:text-6xl">Build Your Dream Space<span>.</span></h2>     

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[75%] py-10 m-auto">
    <div className="test-card bg-[#252525] p-4 flex flex-col gap-4 rounded-xl justify-between">
  <p className="text-sm lg:text-lg text-gray-400 text-start w-full">
    Pyramid Architecture Studio transformed our office into a masterpiece. The attention to detail was exceptional!
  </p>

  <div className="profile flex items-center gap-2">
    <div className="bg-blue-50 w-[56px] h-[56px] rounded-[50%] p-4"></div>
    <div className="flex flex-col">
      <h3 className="text-[#d5d5d5] font-semibold">John Carter</h3>
      <p className="text-sm text-[#d5d5d5] font-light">Manager, Arcane Tech</p>
    </div>
  </div>
</div>

<div className="test-card justify-between bg-[#252525] p-4 flex flex-col gap-4 rounded-xl">
  <p className="text-lg text-gray-400 text-start w-full">
    Working with Pyramid was a dream. They brought our vision to life seamlessly.
  </p>

  <div className="profile flex items-center gap-2">
    <div className="bg-green-50 w-[56px] h-[56px] rounded-[50%] p-4"></div>
    <div className="flex flex-col">
      <h3 className="text-[#d5d5d5] font-semibold">Sophia Reynolds</h3>
      <p className="text-sm text-[#d5d5d5] font-light">CEO, Urban Spaces</p>
    </div>
  </div>
</div>

<div className="test-card justify-between bg-[#252525] p-4 flex flex-col gap-4 rounded-xl">
  <p className="text-lg text-gray-400 text-start w-full">
    Their innovative approach turned our home into something truly unique. Highly recommended!
  </p>

  <div className="profile flex items-center gap-2">
    <div className="bg-yellow-50 w-[56px] h-[56px] rounded-[50%] p-4"></div>
    <div className="flex flex-col">
      <h3 className="text-[#d5d5d5] font-semibold">Elijah Brooks</h3>
      <p className="text-sm text-[#d5d5d5] font-light">Homeowner</p>
    </div>
  </div>
</div>

<div className="test-card justify-between bg-[#252525] p-4 flex flex-col gap-4 rounded-xl">
  <p className="text-lg text-gray-400 text-start w-full">
    I was impressed by their creativity and professionalism. Every detail was taken care of.
  </p>

  <div className="profile flex items-center gap-2">
    <div className="bg-purple-50 w-[56px] h-[56px] rounded-[50%] p-4"></div>
    <div className="flex flex-col">
      <h3 className="text-[#d5d5d5] font-semibold">Ava Mitchell</h3>
      <p className="text-sm text-[#d5d5d5] font-light">Designer, ArtScape</p>
    </div>
  </div>
</div>

<div className="test-card justify-between bg-[#252525] p-4 flex flex-col gap-4 rounded-xl">
  <p className="text-lg text-gray-400 text-start w-full">
    The team exceeded our expectations. The space they designed is both functional and stylish.
  </p>

  <div className="profile flex items-center gap-2">
    <div className="bg-red-50 w-[56px] h-[56px] rounded-[50%] p-4"></div>
    <div className="flex flex-col">
      <h3 className="text-[#d5d5d5] font-semibold">Daniel Foster</h3>
      <p className="text-sm text-[#d5d5d5] font-light">Director, Innovate Labs</p>
    </div>
  </div>
</div>
<div className="test-card bg-[#252525] p-4 flex flex-col gap-4 rounded-xl justify-between">
  <p className="text-lg text-gray-400 text-start w-full">
    Pyramid Architecture Studio transformed our office into a masterpiece. The attention to detail was exceptional!
  </p>

  <div className="profile flex items-center gap-2">
    <div className="bg-blue-50 w-[56px] h-[56px] rounded-[50%] p-4"></div>
    <div className="flex flex-col">
      <h3 className="text-[#d5d5d5] font-semibold">John Carter</h3>
      <p className="text-sm text-[#d5d5d5] font-light">Manager, Arcane Tech</p>
    </div>
  </div>
</div>

      </div> 
    </section>


    <section className="pt-10 relative bottom-0">
      <div className="image absolute w-full">
         <img src={veca} alt="" />
      </div>
      <div className="image absolute w-full ">
         <img src={vecb} alt="" />
      </div>
      <div className="image absolute w-full">
         <img src={vecd} alt="" />
      </div>
      <div className="image absolute w-full">
         <img src={vecc } alt="" />
      </div>
      <div className="image relative lg:top-[-200px] top-[-50px] w-full z-[-1]">
         <img src={vece} alt="" />
      </div>
    </section>
  <Footer/>


    </>
  )
}

export default Home