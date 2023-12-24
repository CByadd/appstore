import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import slideData from "./Cdata";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


function Carosoul() {
  return (
    <div> <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation]}
    className='Swipe absolute'
  >
   
    {/* <SwiperSlide> 
        <div className='black'></div><div className='sl' >
   <div className='txt'>
   <h1 className=' head' >Free Fire</h1>
    <h2 className='genre' >Action</h2>
    <h3 className='size' >563 Mb</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide> */}
  
  {slideData.map((slide) => (
    <SwiperSlide>
         <Slide key={slide.id} slide={slide}/>
         </SwiperSlide>
        ))}      
    
  </Swiper></div> 
  )
}

export default Carosoul