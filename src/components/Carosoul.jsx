import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


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
    <SwiperSlide> 
        <div className='black'></div><div className='sl'>
   <div className='txt'>
   <h1 className=' head' >Free Fire</h1>
    <h2 className='genre' >Action</h2>
    <h3 className='size' >563 Mb</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide>

    <SwiperSlide>
        <div className='sla'>
   <div className='txt'>
   <h1 className=' head' >PUBG PC</h1>
    <h2 className='genre' >Action * Shooting</h2>
    <h3 className='size' >27 GB</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide>
    <SwiperSlide>
        <div className='slb'>
   <div className='txt'>
   <h1 className=' head' >Call Of Duty Black OPS</h1>
    <h2 className='genre' >Action * Shooting</h2>
    <h3 className='size' >212 GB</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide>
    <SwiperSlide>  <div className='slc'>
   <div className='txt'>
   <h1 className=' head' >Fortnite</h1>
    <h2 className='genre' >Action * Shooting</h2>
    <h3 className='size' >149 GB</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide>
    <SwiperSlide>  <div className='sld'>
   <div className='txt'>
   <h1 className=' head' >Counter Strike</h1>
    <h2 className='genre' >Action * Shooting</h2>
    <h3 className='size' >15 GB</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide>
    <SwiperSlide>  <div className='sle'>
   <div className='txt'>
   <h1 className=' head' >Fifa</h1>
    <h2 className='genre' >Sports</h2>
    <h3 className='size' >24 GB</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide>
    <SwiperSlide>  <div className='slf'>
   <div className='txt'>
   <h1 className=' head' >Grand Theft Auto 5</h1>
    <h2 className='genre' >Action * Storyplay</h2>
    <h3 className='size' >89 GB</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide>
    <SwiperSlide>  <div className='slg'>
   <div className='txt'>
   <h1 className=' head' >God Of War</h1>
    <h2 className='genre' >Action * Storyplay</h2>
    <h3 className='size' >12 GB</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide>
    <SwiperSlide>  <div className='slh'>
   <div className='txt'>
   <h1 className=' head' >Last Of Us</h1>
    <h2 className='genre' >Survival</h2>
    <h3 className='size' >5.5 GB</h3>
    <p className='Ex'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti sint harum molestias voluptate facere? Voluptas quod a voluptatem reiciendis unde dolorem, nihil inventore nesciunt eveniet non veritatis necessitatibus distinctio.</p></div></div></SwiperSlide>
  </Swiper></div>
  )
}

export default Carosoul