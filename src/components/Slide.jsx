import React,{useState} from 'react'
import slideData from './Cdata';
import "./styles/Slide.css"

const Slide = ({ slide }) => {
  console.log('imagePath:', slideData.bg);
    return (
        <div className='slm' style={{ backgroundImage: `url(${slide.bg})` }}>
      <div className="txt">
       <h1 className='head' >{slide.head}</h1>
    <h2 className='genre' >{slide.genre}</h2>
    <h3 className='size' >{slide.size}</h3>
    <p className='Ex'> {slide.ex}</p>
        
       
      </div>
        </div>
      
    );
  };
export default Slide;