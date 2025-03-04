import React from 'react'
import Hperfume from  "../../assets/p10.png";
const Home = () => {
  return (
    <>
      <span id='Home'></span>
      <div className='min-h-[550px] sm:min-h-[600px]  bg-red-100 flex justify-center items-center'>
        <div className='container pd-8 sm:pd-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>

              {/* text content section*/ }

                  <div className='order-2 sm:order-1 flex flex-col justify-center gap-6'>
                      
                      <h1 data-aos="fade-down"  data-aos-once="true" className=' text-primary text-5xl sm:text-6xl lg:text-7xl font-blod'>
                          
                          We serve the richest{""} 
                        <span data-aos="zoom-out" data-aos-delay="300" className='text-rose-700 font-cursive'> Perfume {" "}</span> 
                          in the city

                      </h1>

                      <div  data-aos="fade-up"   data-aos-delay="500" data-aos-offset="0">
                          <button className='bg-gradient-to-r   from-primary to-secondary border-2 border-primary 
                          rounded-full px-4 py-2 text-white hover:scale-105 duration-200'>
                              Perfume and Code
                          </button>
                      </div>

                  </div>




              {/* img  section*/ }

              <div data-aos="zoom-in"  data-aos-duration="300"
              className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
                  <img src={Hperfume} alt="Hperfume" className='w-[300px] sm:w-[450px]  sm:scale-110 mx-auto ' />
                  
                  <div data-aos="fade-left" className=' bg-gradient-to-r   from-primary to-secondary text-white border-2 border-primary 
                          rounded-xl absolute top-10 left-10 p-3 '>
                    <h1>Hey Coder</h1>
                  </div>

                  <div data-aos="fade-right" className='bg-gradient-to-r   from-primary to-secondary  text-white border-2 border-primary 
                          rounded-xl absolute bottom-10 right-10 p-3 '>
                    <h1>Best Perfume</h1>
                  </div>
              </div>

          </div>
        </div>
    </div>
    </>
  )
}

export default Home
