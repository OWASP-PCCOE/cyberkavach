import React from 'react';
import Navbar from './Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const backgroundStyle = {
    backgroundImage: `url('./bg-owasp.svg')`, // Update the path
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    height: 'auto',
  };

  const registerButtonStyle = {
    backgroundImage: `url(./button-img.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  useGSAP(() => {
    gsap.defaults({ ease: "none", duration: 2 });

    const tl = gsap.timeline();
    tl.from("#orange", {
      xPercent: -100,
    })
      .from("#purple", {
        xPercent: 100,
      })
      .from("#green", {
        yPercent: -100,
      });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#container",
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    })
  }, []);

  return (
    < >
      <div style={backgroundStyle}>
        <Navbar />
      </div>

      <div id="container" className='relative overflow-hidden h-screen w-screen' style={{backgroundColor:"#0C0C0C"}}>
         {/* <img className='h-[200px] w-[180px] -translate-x-[67px] -translate-y-[63px] absolute z-50' src="./image.png " alt="" /> */}
         {/* <img className='h-[200px] w-[180px] right-0 translate-x-[67px] -translate-y-[63px] absolute z-50' src="./image.png " alt="" /> */}
        <img className='h-[435px] w-[370px] z-50 absolute bottom-0 pl-5 md:ml-[550px]' src="./pixelcut-export.png" alt="error" />
        <div id='orange' className='absolute top-0 left-0 text-white text-5xl bg-black h-screen w-screen'>
          <h1 className='md:text-[100px] text-[35px] pl-[96px] mt-5 ' style={{ fontFamily: 'NeueMachina' }}>CYBERSAFE<br/>CHECKPOINT</h1>
           <div className='mt-[110px] p-8 rounded-2xl  ml-4 mr-4 md:w-[500px] md:ml-[108px] border-2 border-rose-500' style={{backgroundColor:'#24CFA6'}}>
           <p  className='text-[25px] ' style={{fontFamily:'Gilroy'}}>"Think your device is secure? Let Cybersafe Checkpoint reveal the truth—protect your data before it's too late!"</p>
           </div>
          <div className='flex mt-[40px] md:block md:pl-[108px] justify-evenly'>
            <h1 style={{ fontFamily: 'NeueMachina' }} className=' '>09-10-2024</h1>
             <img style={registerButtonStyle} className='h-[45px] w-[45px] md:h-[60px] md:w-[180px] text-white rounded-xl' src="./icons8-arrow-50.png" alt="error" />
          </div>
        </div>
        <div id='purple'  className='absolute top-0 left-0 text-white text-5xl bg-slate-950 h-screen w-screen'>
        <h1 className='md:text-[100px] text-[35px] pl-[96px] mt-5 ' style={{ fontFamily: 'NeueMachina' }}>ADRISHYAM</h1>
           <div className='mt-[143px] md:mt-[209px] p-5 rounded-2xl  ml-4 mr-4' style={{backgroundColor:'#24CFA6'}}>
           <p  className='text-[25px] ' style={{fontFamily:'Gilroy'}}>"Think you can escape the ordinary? Step into Adrishyam, where your wits are your only way out! Can you break free before time runs out?"</p>
           </div>
          <div className='flex mt-[40px] justify-evenly'>
            <h1 style={{ fontFamily: 'NeueMachina' }} className=' '>18-10-2024</h1>
             <img style={registerButtonStyle} className='h-[45px] w-[45px] text-white rounded-xl' src="./icons8-arrow-50.png" alt="error" />
          </div>
        </div>
        <div id='green' className='absolute top-0 left-0 text-white text-5xl bg-black h-screen w-screen'>Onkar</div>
      </div>
    </>
  );
}

export default Homepage;
