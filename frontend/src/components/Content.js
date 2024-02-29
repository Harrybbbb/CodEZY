import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Content() {
    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Let's get groovy with our AI code generator! 🤖", "Let AI handle your SQL translation needs. 🔍"], 
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 50,
      loop: true,
      backDelay: 100
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
   <>
   <div className='container'> 
   <div className='content'>
    <div className='heading'> 
    <p>
   <span ref={el}></span></p>
   </div>  
   </div>
   
   <div className='abouts'>
    <div className='abouts_p'>
    <p>
    Your ultimate code wizard! Generate ✨, prettify 🌟, and translate SQL queries seamlessly. Elevate your coding game with style and precision! 🚀
    </p>
    </div>
   </div>
   </div>
   </>
  )
}
