import React from 'react'
import Nperfume from "../../assets/p5.png";
import { TbPerfume } from "react-icons/tb";

const Menus =[
    {
        id:1,
        name: "Home",
        link:"/#Home"
    },
    {
        id:2,
        name: "Service",
        link:"/#Service"
    },
    {
        id:1,
        name: "About",
        link:"/#About"
    },
]
const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary text-white'>
      <div className=' container py-3'>
        <div className='flex justify-between items-center gap-4'>

            {/* logo section */}
            <div className=''>
                <a href="#" className='font-bold flex items-center gap-2 justify-center sm:text-3xl font-cursive  tracking-wider  '>
                    <img src={Nperfume} alt="perfume" className='w-14'/>
                    PERFUMES WEBSITE
                </a>
            </div>

            {/* list section */}
            <div 
             data-aos="fade-down"  data-aos-once="true" data-aos-delay="300"
             className='flex justify-between items-center gap-4 '>
              <ul className='hidden sm:flex items-center gap-4'>
                 { Menus.map((data,index)=>(
                  <li key={index}>
                    <a href={data.link}
                     className=' inline-block text-xl py-4 px-4 text-white hover:text-white duration-200'>
                      {data.name}

                    </a>
                  </li>
                 ))} 
              </ul>
              <button className='bg-pink-100   text-secondary px-4 py-2 rounded-full 
              hover:scale-105 duration-200 flex items-center gap-3'>
                Order 
                <TbPerfume  className='text-xl curser-pointer text-secondary' />
              </button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
