import React from 'react'
import appstore from '../../assets/appstore2.png'
import playstore from '../../assets/playstore.png'
import Image from '../../assets/pink-background3.jpeg';
const backgroundImage = {
  backgroundImage: `url(${Image})`,
  backgroundPosition: "center",
  backgroundRepeat:"no-repeat",
  backgroundSize: "100%",
  width:"100%",
  height:"100%",
};
const AppStore = () => {
  return (
    <>
      <div style={backgroundImage} className='py-14'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
            <div data-aos="fade-up"  className='space-y-6  mx-auto'>
                
                {/*content section  */}
                <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-cursive pl-3 '>
                  Coffee Cafe is available for Android and IOS
                </h1> 
               
                {/* logo section*/}
                <div className='flex justify-center sm:justify-start items-center'>
                  <a href="#">
                    <img src={appstore} alt="" 
                    className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                  </a>
                  <a href="#">
                    <img src={playstore} alt="" 
                      className='max-w-[120px] sm:max-w-[120px] md:max-w-[160px]'/>
                  </a>
                </div>
           
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppStore
