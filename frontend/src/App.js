import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import About from './components/About';
import Content from './components/Content';
import { useRef } from 'react'
import Scroll from './components/Scroll.json';
import Lottie from 'lottie-react';
import Inputs from './components/Inputs';

const style = {
  height: 250,
};


function App() {
  const mainRef = useRef();
  return (
    <>
    <Navbar/>
    <Content/>
    <div className='scroll'>
        <button onClick={() =>{
          mainRef.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>
        <Lottie animationData={Scroll} style={style}></Lottie></button>
     </div>

    <div ref={mainRef} className='main_content' id='Main'>
      <Inputs/>
    </div>
    <div className='footer'>
      <div className='left_footer'>
        <p>©All rights reserved|developed by <a href="https://harsh09.tiiny.site/">Harsh Birla</a></p>
      </div>
    </div>
    <Routes>
   <Route path="/About" element={<About/>} />
  </Routes>
    </>
  );
}

export default App;
