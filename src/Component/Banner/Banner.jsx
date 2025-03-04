import React from 'react'
import bannerimg from "../../assets/p8.png";
import {GrSecure} from "react-icons/gr";
import { GiDelicatePerfume } from "react-icons/gi";
import { LuBlend } from "react-icons/lu";


const Banner = () => {
  return (
    <div>
        <span id='About'></span>
        <div  className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
            <div  className='grid grid-cols-1 sm:grid-cols-2 gap-6 '>

                {/*Img Section*/}
                <div  data-aos="zoom-in" >
                    <img src={bannerimg} alt="" className='max-w-[450px] w-full mx-auto  drop-shadow-xl '/>
                </div>

                {/*Text Content Section*/}
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1  data-aos="fade-down"  className='text-3xl sm:text-4xl font-bold font-cursive  text-secondary'>
                        Premium Creed Aventus Perfume
                    </h1>
                            
                    <p  data-aos="fade-up"  className='text-xl text-gray-500 tracking-wide leading-5'>
                        A sophisticated blend of fruity and woody notes, featuring pineapple, bergamot, black currant, and oakmoss.
                    </p>

                    <div className='grid grid-cols-2 gap-6'>
                                <div className='space-y-5'>
                                
                                    <div  data-aos="fade-up" className='flex items-center gap-3'>
                                        <GrSecure className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100' />
                                        <span>Premium Perfume</span>
                                    </div> 
                                
                                    <div data-aos="fade-up" data-aos-duration="300"  className='flex items-center gap-3'>
                                        <GiDelicatePerfume className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100' />
                                        <span>A fresh fragrance</span>
                                    </div> 
                                    
                                
                                    <div data-aos="fade-up" data-aos-duration="500"  className='flex items-center gap-3'>
                                        <LuBlend className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100' />
                                        <span>A seductive blend</span>
                                    </div> 
                                </div>

                                <div data-aos="slide-left"   className='border-l-4 border-primart/50 pl-6 space-y-3'>
                                    <h1 className='text-2xl font-semibold font-cursive'>Creed Aventus Lover</h1>
                                    <p className='text-gray-500 text-sm'> {" "} Lorem ipsum dolor sit amet 
                                        consectetur adipisicing elit. Dolores possimus earum eaque, soluta expedita 
                                        quis itaque quidem provident ut dicta autem reiciendis ex assumenda, atque tempore 
                                        magnam perspiciatis laudantium cumque.</p>
                                </div>
                            </div>
                    
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
