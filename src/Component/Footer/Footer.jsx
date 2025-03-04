import React from 'react'
import {FaFacebook, FaInstagram , FaLinkedin}  from "react-icons/fa6" ;
const FooterLinks =[
    {
        title: "Home",
        link:"/#Home",
    },
    {
        title: "About",
        link:"/#About",
    },
    {
        title: "Contact",
        link:"/#Contact",
    },
    {
        title: "Blog",
        link:"/#Blog",
    },
]
const Footer = () => {
  return (
    <div className=' text-white '>
        <div className='bg-gradient-to-r from-primary to-secondary min-h-[400px]'>
            <div className="container grid md:grid-cols-3 pd-20 pt-5">
                
                {/* company details   */}
                <div className='py-8 px-4'>
                    <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive '>PERFUME WEBSITE</a>
                    <p className='pt-4'>
                        {" "} Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Unde error soluta, aliquid,
                          laudantium ratione ut illo, praesentium consequuntur quos rerum optio aut corrupti voluptate ipsa
                         laboriosam commodi vero cupiditate nobis.
                    </p>
                    <a href="#" className='inline-block text-secondary bg-red-100 py-2 px-4 mt-5 text-sm rounded-full'>vist our youtube channel</a>
                </div>

                {/* footer link */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                   
                    {/* first col link */}
                    <div className='py-8 px-4'>

                        <h1 className='text-xl font-semibold sm:text-left mb-3'>
                            footer link
                        </h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block hover:scale-105 duration-200'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>

                    {/* second col link */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>
                            quick link
                        </h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block
                                        hover:scale-105 duration-200'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                     {/* company address section */}
                     <div className='py-8 px-4 col-span-2 sm:text-left  sm:col-auto'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>
                            address
                        </h1>
                        <div >
                            <p className='mb-3'>noida,india</p>
                            <p>+9438856876</p>
                            {/* social */}
                            <div className='flex space-x-3 mt-6'>
                                <a href="#" >
                                    <FaFacebook className='text-3xl inline-block hover:scale-105 duration-200 '/>
                                </a>
                            
                            
                                <a href="#" >
                                    <FaInstagram className='text-3xl inline-block hover:scale-105 duration-200 '/>
                                </a>
                            
                            
                                <a href="#" >
                                    <FaLinkedin className='text-3xl inline-block hover:scale-105 duration-200 '/>
                                </a>
                            </div>
                        </div>
                    
                     </div>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default Footer
