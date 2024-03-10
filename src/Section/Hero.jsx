import React, { useEffect } from 'react'
import bgimage from "../assets/herobanner.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      dealy: 100,
    })
  }, [])

  return (
    <section id='home' className='w-full bg-black flex justify-between items-center text-white px-10 py-20 bg-cover bg-center' style={{ backgroundImage: `url(${bgimage})` }}>
      <div className='flex flex-col justify-center item-center lg:items-start gap-8 w-full lg:w-2/3 pl-10 pr-2 lg:pl-32 lg:pr-10 '>
        <div data-aos='slide-right' id='box-circle' className='bg-green-500 p-12 rounded-full flex justify-center items-center flex-col gap-4 w-60 mt-6'>
          <h1 className='text-black font-bold text-6xl'>40%</h1>
          <h1 className='text-black font-bold text-xl text-center '>BUSINEES<br></br>LUNCH</h1>
        </div>
        <h1 data-aos='zoom-in-up' className='text-2xl font-semibold'>NEW RESTAURANTS</h1>
        <h1 data-aos='zoom-in' className='text-5xl lg:text-6xl font-bold text:center lg:text-start '>Where every ingredirnts <br></br> tells a story</h1>
        <button data-aos='zoom-in-up' className='bg-orange-500 px-8 py-4 rounded-full hover:bg-green-500 hover:text-black font-bold mt-5'>READ MORE</button>
      </div>
    </section>
  )
}

export default Hero