import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
function Card(props) {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='box' data-aos="fade-up"> 
        <div className='innerBox1' style={{backgroundColor:`${props.value.color}`}}>
        </div>
        <div className='innerBox2'>
            <p>{props.value.color}</p>
            <p>{props.value.name}</p>
        </div>
    </div>
  )
}

export default Card
