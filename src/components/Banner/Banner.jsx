import React from 'react';
import './Banner.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import bannerone from "../../assets/banner1.jpg"
const Banner = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1},
    };
    const items = [
        

        <div className="item bannerthree" data-value="2">
            <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 py-5 lg:py-32 md:py-32'>
            <div className='lg:px-20 px-5 md:pl-10'>
            <h1 className='banner-heading py-3'>CARREPAIR</h1>
            
              
            <button className='text-sm bg-blue-900 banner-sub-title w-30 md:text-xl lg:text-5xl mb-5 font-semibold text-white cursor-text pl-3 pe-2'>THE BEST CAR REPAIR SERVICES</button>
         
          <p className='text-gray-300'>we provide allways best services for our client and always <br></br> try to achive client trust and satisfaction</p>
            </div>
            </div>
        </div>,
         <div className="item bannerone" data-value="2">
          <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 py-5 lg:py-32 md:py-32'>
            <div className='lg:px-20 px-5 md:pl-10'>
            <h1 className='banner-heading py-3'>CARREPAIR</h1>
            
              
            <button className='text-sm bg-blue-900 banner-sub-title w-30 md:text-xl lg:text-5xl mb-5 font-semibold text-white cursor-text pl-3 pe-2'>THE BEST CAR REPAIR SERVICES</button>
         
          <p className='text-gray-300'>we provide allways best services for our client and always <br></br> try to achive client trust and satisfaction</p>
            </div>
            </div>
     </div>
        , <div className="item bannertwo" data-value="2">
         <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 py-5 lg:py-32 md:py-32'>
            <div className='lg:px-20 px-5 md:pl-10'>
            <h1 className='banner-heading py-3'>CARREPAIR</h1>
            
              
            <button className='text-sm bg-blue-900 banner-sub-title w-30 md:text-xl lg:text-5xl mb-5 font-semibold text-white cursor-text pl-3 pe-2'>THE BEST CAR REPAIR SERVICES</button>
         
          <p className='text-gray-300'>we provide allways best services for our client and always <br></br> try to achive client trust and satisfaction</p>
            </div>
            </div>
    </div>

    ];
    const renderPrevButton = () => false;
    const renderNextButton = () => false;
    return (
        <div>
            <AliceCarousel
                mouseTracking
                items={items}
                autoPlay={true}
                button ={false}
                autoPlayInterval={3000} 
                disableButtonsControls={true}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
                
                responsive={responsive}
            />
        </div>
    );
};

export default Banner;