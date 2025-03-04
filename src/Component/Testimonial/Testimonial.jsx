import React from 'react'
import  Slider from "react-slick";
import face1 from "../../assets/face1.png";
import face2 from "../../assets/face2.png";
import face3 from "../../assets/face3.png";
import face4 from "../../assets/face4.png";
import face5 from "../../assets/face5.png";
import face6 from "../../assets/face6.png";
const TestimonialData= [
    {
        id:1,
        name:"bbbb",
        text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dicta nemo est fugit blanditiis soluta eum doloribus minus sunt quidem voluptas sit delectus! Delectus possimus in, vitae tempore explicabo impedit?",
        img:face1
    },
    {
        id:2,
        name:"bbbb",
        text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dicta nemo est fugit blanditiis soluta eum doloribus minus sunt quidem voluptas sit delectus! Delectus possimus in, vitae tempore explicabo impedit?",
        img:face2
    },
    {
        id:3,
        name:"bbbb",
        text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dicta nemo est fugit blanditiis soluta eum doloribus minus sunt quidem voluptas sit delectus! Delectus possimus in, vitae tempore explicabo impedit?",
        img:face3
    },
    {
        id:4,
        name:"bbbb",
        text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dicta nemo est fugit blanditiis soluta eum doloribus minus sunt quidem voluptas sit delectus! Delectus possimus in, vitae tempore explicabo impedit?",
        img:face4
    },
    {
        id:5,
        name:"bbbb",
        text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dicta nemo est fugit blanditiis soluta eum doloribus minus sunt quidem voluptas sit delectus! Delectus possimus in, vitae tempore explicabo impedit?",
        img:face5
    },
    {
        id:6,
        name:"bbbb",
        text:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, dicta nemo est fugit blanditiis soluta eum doloribus minus sunt quidem voluptas sit delectus! Delectus possimus in, vitae tempore explicabo impedit?",
        img:face6
    },
]
const Testimonial = () => {
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocused: true, 
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    initialSlide:1,
                },
            },
        ]
      };
  return (
    <div children className='py-14 mb-10'>
      <div data-aos="fade-up"  className="container">
       
        {/* header section */}
        <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold font-cursive  text-secondary '>
                Testimonials
            </h1>
        </div>
        
        {/*testimonial cards section*/}
        <div data-aos="zoom-in" >
            <Slider {...settings}>
                {
                    TestimonialData.map((data,index ) => {
                        return (
                            <div className='my-6' key={data.id}>
                                <div className='flex flex-col gap-4 shadow-lg bg-red-100 relative py-8 px-6 mx-4 rounded-xl'>
                                   
                                    {/* image section  */}
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className='rounded-full w-20 h-20 ' />
                                    </div>

                                    {/* content section */}
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xl text-gray-500'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/70 font-cursive'>
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'> ,,</p>

                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
