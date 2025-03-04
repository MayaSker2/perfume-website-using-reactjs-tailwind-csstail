import React from 'react'
import Imf2 from  "../../assets/p0.png";
import Imf3 from  "../../assets/p13.png";
import Imf4 from  "../../assets/p11.png";

const ServicesData=[
    {
        id:1,
        img:Imf2,
        name:'Dior',
        despription:'vmslmv;lks kjnf;kjnkegrjna;k kjn;knargj',
        aosDelay:"100",
    },
    {
        id:2,
        img:Imf3,
        name:'Lacoste',
        despription:'vmslmv;lks kjnf;kjnkegrjna;k kjn;knargj',
        aosDelay:"100",
    },
    {
        id:3 ,
        img:Imf4,
        name:'Crystal',
        despription:'vmslmv;lks kjnf;kjnkegrjna;k kjn;knargj',
        aosDelay:"100",
    },
];

const Services = () => {
  return (
    <>
    <span id='Service'></span>
    <div className='py-10'>
      <div className='container'>
        {/*header title*/}
        <div  data-aos="fade-up"  
              className='text-center mb-20'>
            <h1 className='text-4xl font-bold font-cursive text-secondary'>
                Best Perfumes For You
            </h1>
        </div>

        {/*Services card Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2
                        md:grid-cols-3 gap-14 md:gap-5 place-items-center   '>
            {
                ServicesData.map((data, index) =>{
                       return(
                        <div
                            data-aos='fade-in'
                            data-aos-delay={data.aosDelay}
                            key={index} 
                            className='rounded-2xl text-secondary hover:bg-secondary hover:text-white shadow-xl duration-200 max-w-[300px] group relative'>
                           
                            {/*img content */}
                            <div className='h-[122px]'>
                                <img src={data.img} alt="" className='w-[100px] block mx-auto transform=translate-y-14 
                                 group-hover:scale-110  group-hover:rotate-6 duration-300 ' />
                            </div>

                            {/*Text content */}
                            <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>{data.name}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                                  {data.despription}
                                </p>
                            </div>         
                        </div> 
                       );
                })
            }
        </div>
        
        <div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Services
