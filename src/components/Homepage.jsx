// import React from 'react';
// import Navbar from './Navbar';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';


// gsap.registerPlugin(ScrollTrigger);

// function Homepage() {
//   const backgroundStyle = {
//     backgroundImage: `url('./bg-owasp.svg')`, // Update the path
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     minHeight: '100vh',
//     height: 'auto',
//   };

//   const registerButtonStyle = {
//     backgroundImage: `url(./button-img.webp)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   useGSAP(() => {
//     gsap.defaults({ ease: "none", duration: 2 });

//     const tl = gsap.timeline();
//     tl.from("#orange", {
//       xPercent: -100,
//     })
//       .from("#purple", {
//         xPercent: 100,
//       })
//       .from("#green", {
//         yPercent: -100,
//       });

//     ScrollTrigger.create({
//       animation: tl,
//       trigger: "#container",
//       start: "top top",
//       end: "+=3000",
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//     })
//   }, []);

//   return (
//     < >
//       <div style={backgroundStyle}>
//         <Navbar />
//       </div>

//       <div id="container" className='relative overflow-hidden h-screen w-screen' style={{backgroundColor:"#0C0C0C"}}>
//          {/* <img className='h-[200px] w-[180px] -translate-x-[67px] -translate-y-[63px] absolute z-50' src="./image.png " alt="" /> */}
//          {/* <img className='h-[200px] w-[180px] right-0 translate-x-[67px] -translate-y-[63px] absolute z-50' src="./image.png " alt="" /> */}
//         <img className='h-[435px] w-[370px] z-50 absolute bottom-0 pl-5 md:ml-[550px]' src="./pixelcut-export.png" alt="error" />
//         <div id='orange' className='absolute top-0 left-0 text-white text-5xl bg-black h-screen w-screen'>
//           <h1 className='md:text-[100px] text-[35px] pl-[96px] mt-5 ' style={{ fontFamily: 'NeueMachina' }}>CYBERSAFE<br/>CHECKPOINT</h1>
//            <div className='mt-[110px] p-8 rounded-2xl  ml-4 mr-4 md:w-[500px] md:ml-[108px] border-2 border-rose-500' style={{backgroundColor:'#24CFA6'}}>
//            <p  className='text-[25px] ' style={{fontFamily:'Gilroy'}}>"Think your device is secure? Let Cybersafe Checkpoint reveal the truth—protect your data before it's too late!"</p>
//            </div>
//           <div className='flex mt-[40px] md:block md:pl-[108px] justify-evenly'>
//             <h1 style={{ fontFamily: 'NeueMachina' }} className=' '>09-10-2024</h1>
//              <img style={registerButtonStyle} className='h-[45px] w-[45px] md:h-[60px] md:w-[180px] text-white rounded-xl' src="./icons8-arrow-50.png" alt="error" />
//           </div>
//         </div>
//         <div id='purple'  className='absolute top-0 left-0 text-white text-5xl bg-slate-950 h-screen w-screen'>
//         <h1 className='md:text-[100px] text-[35px] pl-[96px] mt-5 ' style={{ fontFamily: 'NeueMachina' }}>ADRISHYAM</h1>
//            <div className='mt-[143px] md:mt-[209px] p-5 rounded-2xl  ml-4 mr-4' style={{backgroundColor:'#24CFA6'}}>
//            <p  className='text-[25px] ' style={{fontFamily:'Gilroy'}}>"Think you can escape the ordinary? Step into Adrishyam, where your wits are your only way out! Can you break free before time runs out?"</p>
//            </div>
//           <div className='flex mt-[40px] justify-evenly'>
//             <h1 style={{ fontFamily: 'NeueMachina' }} className=' '>18-10-2024</h1>
//              <img style={registerButtonStyle} className='h-[45px] w-[45px] text-white rounded-xl' src="./icons8-arrow-50.png" alt="error" />
//           </div>
//         </div>
//         <div id='green' className='absolute top-0 left-0 text-white text-5xl bg-black h-screen w-screen'>Onkar</div>
//       </div>
//     </>
//   );
// }

// export default Homepage;

//  start of the second one eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
// import React from 'react';
// import Navbar from './Navbar';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger);

// function Homepage() {
//   const backgroundStyle = {
//     backgroundImage: `url('./bg-owasp.svg')`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     minHeight: '100vh',
//     height: '100%',
//   };

//   const registerButtonStyle = {
//     backgroundImage: `url(./button-img.webp)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   useGSAP(() => {
//     gsap.defaults({ ease: "none", duration: 2 });

//     const tl = gsap.timeline();
//     tl.from("#orange", {
//       xPercent: -100,
//     })
//       .from("#purple", {
//         xPercent: 100,
//       })
//       .from("#green", {
//         yPercent: -100,
//       });

//     ScrollTrigger.create({
//       animation: tl,
//       trigger: "#container",
//       start: "top top",
//       end: "+=3000",
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//     });
//   }, []);

//   return (
//     <>
//       <div style={backgroundStyle}>
//         <Navbar />
//       </div>

//       <div
//         id="container"
//         className="relative overflow-hidden h-[100vh] w-screen"
//         style={{ backgroundColor: "#0C0C0C" }}
//       >
//         {/* Mobile optimization for images */}
//         <img
//           className="h-[435px] w-[370px] z-50 absolute bottom-0 pl-5 md:ml-[550px]"
//           src="./pixelcut-export.png"
//           alt="error"
//         />
//         <div
//           id="orange"
//           className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
//         >
//           <h1
//             className="md:text-[100px] text-[35px] pl-[96px] mt-5"
//             style={{ fontFamily: "NeueMachina" }}
//           >
//             CYBERSAFE
//             <br />
//             CHECKPOINT
//           </h1>
//           <div
//             className="mt-[110px] p-8 rounded-2xl ml-4 mr-4 md:w-[500px] md:ml-[108px] border-2 border-rose-500"
//             style={{ backgroundColor: "#24CFA6" }}
//           >
//             <p
//               className="text-[25px]"
//               style={{ fontFamily: "Gilroy" }}
//             >
//               "Think your device is secure? Let Cybersafe Checkpoint reveal the
//               truth—protect your data before it's too late!"
//             </p>
//           </div>
//           <div className="flex mt-[40px] md:block md:pl-[108px] justify-evenly">
//             <h1
//               style={{ fontFamily: "NeueMachina" }}
//             >
//               09-10-2024
//             </h1>
//             <img
//               style={registerButtonStyle}
//               className="h-[45px] w-[45px] md:h-[60px] md:w-[180px] text-white rounded-xl"
//               src="./icons8-arrow-50.png"
//               alt="error"
//             />
//           </div>
//         </div>
//         <div
//           id="purple"
//           className="absolute top-0 left-0 text-white text-5xl bg-slate-950 h-full w-screen"
//         >
//           <h1
//             className="md:text-[100px] text-[35px] pl-[96px] mt-5"
//             style={{ fontFamily: "NeueMachina" }}
//           >
//             ADRISHYAM
//           </h1>
//           <div
//             className="mt-[143px] md:mt-[209px] p-5 rounded-2xl ml-4 mr-4"
//             style={{ backgroundColor: "#24CFA6" }}
//           >
//             <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
//               "Think you can escape the ordinary? Step into Adrishyam, where
//               your wits are your only way out! Can you break free before time
//               runs out?"
//             </p>
//           </div>
//           <div className="flex mt-[40px] justify-evenly">
//             <h1 style={{ fontFamily: "NeueMachina" }}>18-10-2024</h1>
//             <img
//               style={registerButtonStyle}
//               className="h-[45px] w-[45px] text-white rounded-xl"
//               src="./icons8-arrow-50.png"
//               alt="error"
//             />
//           </div>
//         </div>
//         <div
//           id="green"
//           className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
//         >
//           Onkar
//         </div>
//       </div>
//     </>
//   );
// }

// export default Homepage;

// start of the third one
// import React from 'react';
// import Navbar from './Navbar';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger);

// function Homepage() {
//   const backgroundStyle = {
//     backgroundImage: `url('./bg-owasp.svg')`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     minHeight: '100vh',
//     height: '100%',
//   };

//   const registerButtonStyle = {
//     backgroundImage: `url(./button-img.webp)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   useGSAP(() => {
//     gsap.defaults({ ease: "none", duration: 2 });

//     const tl = gsap.timeline();
//     tl.from("#orange", {
//       xPercent: -100,
//     })
//       .from("#purple", {
//         xPercent: 100,
//       })
//       .from("#green", {
//         yPercent: -100,
//       });

//     ScrollTrigger.create({
//       animation: tl,
//       trigger: "#container",
//       start: "top top",
//       end: "+=3000",
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//     });
//   }, []);

//   return (
//     <>
//       <div style={backgroundStyle}>
//         <Navbar />
//       </div>

//       <div
//         id="container"
//         className="relative overflow-hidden h-[100vh] w-screen"
//         style={{ backgroundColor: "#0C0C0C" }}
//       >
//         {/* Fix for image scaling in Safari and other devices */}
//         <img
//           className="absolute bottom-0 left-[50%] transform translate-x-[-50%] z-50 h-[250px]"
//           src="./pixelcut-export.png"
//           alt="error"
//           style={{
//             width: '100%',   // Set width to 100% to make it responsive
//             maxWidth: '370px',  // Restrict maximum width so it doesn't grow too large
//             objectFit: 'contain',  // Ensures it stays within the container without stretching
//           }}
//         />
//         <div
//           id="orange"
//           className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
//         >
//           <h1
//             className="md:text-[100px] text-[35px] pl-[96px] mt-5"
//             style={{ fontFamily: "NeueMachina" }}
//           >
//             CYBERSAFE
//             <br />
//             CHECKPOINT
//           </h1>
//           <div
//             className="mt-[110px] p-8 rounded-2xl ml-4 mr-4 md:w-[500px] md:ml-[108px] border-2 border-rose-500"
//             style={{ backgroundColor: "#24CFA6" }}
//           >
//             <p
//               className="text-[25px]"
//               style={{ fontFamily: "Gilroy" }}
//             >
//               "Think your device is secure? Let Cybersafe Checkpoint reveal the
//               truth—protect your data before it's too late!"
//             </p>
//           </div>
//           <div className="flex mt-[40px] md:block md:pl-[108px] justify-evenly">
//             <h1
//               style={{ fontFamily: "NeueMachina" }}
//             >
//               09-10-2024
//             </h1>
//             <img
//               style={registerButtonStyle}
//               className="h-[45px] w-[45px] md:h-[60px] md:w-[180px] text-white rounded-xl"
//               src="./icons8-arrow-50.png"
//               alt="error"
//             />
//           </div>
//         </div>
//         <div
//           id="purple"
//           className="absolute top-0 left-0 text-white text-5xl bg-slate-950 h-full w-screen"
//         >
//           <h1
//             className="md:text-[100px] text-[35px] pl-[96px] mt-5"
//             style={{ fontFamily: "NeueMachina" }}
//           >
//             ADRISHYAM
//           </h1>
//           <div
//             className="mt-[143px] md:mt-[209px] p-5 rounded-2xl ml-4 mr-4"
//             style={{ backgroundColor: "#24CFA6" }}
//           >
//             <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
//               "Think you can escape the ordinary? Step into Adrishyam, where
//               your wits are your only way out! Can you break free before time
//               runs out?"
//             </p>
//           </div>
//           <div className="flex mt-[40px] justify-evenly">
//             <h1 style={{ fontFamily: "NeueMachina" }}>18-10-2024</h1>
//             <img
//               style={registerButtonStyle}
//               className="h-[45px] w-[45px] text-white rounded-xl"
//               src="./icons8-arrow-50.png"
//               alt="error"
//             />
//           </div>
//         </div>
//         <div
//           id="green"
//           className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
//         >
//           Onkar
//         </div>
//       </div>
//     </>
//   );
// }

// export default Homepage;

// next start

// import React from 'react';
// import Navbar from './Navbar';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger);

// function Homepage() {
//   const backgroundStyle = {
//     backgroundImage: `url('./bg-owasp.svg')`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     minHeight: '100vh',
//     height: '100%',
//   };

//   const registerButtonStyle = {
//     backgroundImage: `url(./button-img.webp)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   useGSAP(() => {
//     gsap.defaults({ ease: "none", duration: 2 });

//     const tl = gsap.timeline();
//     tl.from("#orange", {
//       xPercent: -100,
//     })
//       .from("#purple", {
//         xPercent: 100,
//       })
//       .from("#green", {
//         yPercent: -100,
//       });

//     ScrollTrigger.create({
//       animation: tl,
//       trigger: "#container",
//       start: "top top",
//       end: "+=3000",
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//     });
//   }, []);

//   return (
//     <>
//       <div style={backgroundStyle}>
//         <Navbar />
//       </div>

//       <div
//         id="container"
//         className="relative overflow-hidden h-[100vh] w-screen"
//         style={{ backgroundColor: "#0C0C0C" }}
//       >
//         {/* Fix for Safari: Apply specific height for Safari browsers */}
//         <img
//           className="absolute bottom-0 left-[50%] transform translate-x-[-50%] z-50"
//           src="./pixelcut-export.png"
//           alt="error"
//           style={{
//             width: '100%',   // Default width to make it responsive
//             maxWidth: '370px',  // Restrict maximum width
//             height: 'auto',   // Maintain aspect ratio
//             objectFit: 'contain',
//           }}
//         />
//         {/* Safari-specific height using CSS */}
//         <style>
//           {`
//             @supports (-webkit-touch-callout: none) {
//               img[src='./pixelcut-export.png'] {
//                 height: 250px !important; /* Safari-specific height */
//               }
//             }
//           `}
//         </style>

//         <div
//           id="orange"
//           className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
//         >
//           <h1
//             className="md:text-[100px] text-[35px] pl-[96px] mt-5"
//             style={{ fontFamily: "NeueMachina" }}
//           >
//             CYBERSAFE
//             <br />
//             CHECKPOINT
//           </h1>
//           <div
//             className="mt-[110px] p-8 rounded-2xl ml-4 mr-4 md:w-[500px] md:ml-[108px] border-2 border-rose-500"
//             style={{ backgroundColor: "#24CFA6" }}
//           >
//             <p
//               className="text-[25px]"
//               style={{ fontFamily: "Gilroy" }}
//             >
//               "Think your device is secure? Let Cybersafe Checkpoint reveal the
//               truth—protect your data before it's too late!"
//             </p>
//           </div>
//           <div className="flex mt-[40px] md:block md:pl-[108px] justify-evenly">
//             <h1
//               style={{ fontFamily: "NeueMachina" }}
//             >
//               09-10-2024
//             </h1>
//             <img
//               style={registerButtonStyle}
//               className="h-[45px] w-[45px] md:h-[60px] md:w-[180px] text-white rounded-xl"
//               src="./icons8-arrow-50.png"
//               alt="error"
//             />
//           </div>
//         </div>
//         <div
//           id="purple"
//           className="absolute top-0 left-0 text-white text-5xl bg-slate-950 h-full w-screen"
//         >
//           <h1
//             className="md:text-[100px] text-[35px] pl-[96px] mt-5"
//             style={{ fontFamily: "NeueMachina" }}
//           >
//             ADRISHYAM
//           </h1>
//           <div
//             className="mt-[143px] md:mt-[209px] p-5 rounded-2xl ml-4 mr-4"
//             style={{ backgroundColor: "#24CFA6" }}
//           >
//             <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
//               "Think you can escape the ordinary? Step into Adrishyam, where
//               your wits are your only way out! Can you break free before time
//               runs out?"
//             </p>
//           </div>
//           <div className="flex mt-[40px] justify-evenly">
//             <h1 style={{ fontFamily: "NeueMachina" }}>18-10-2024</h1>
//             <img
//               style={registerButtonStyle}
//               className="h-[45px] w-[45px] text-white rounded-xl"
//               src="./icons8-arrow-50.png"
//               alt="error"
//             />
//           </div>
//         </div>
//         <div
//           id="green"
//           className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
//         >
//           Onkar
//         </div>
//       </div>
//     </>
//   );
// }

// export default Homepage;

import React from 'react';
import Navbar from './Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const backgroundStyle = {
    backgroundImage: `url('./bg-owasp.svg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Ensure it covers the whole screen
    height: '100%',
    backgroundColor: '#0C0C0C', // Fallback background color to avoid white space
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
    });
  }, []);

  return (
    <>
      {/* Background section */}
      <div style={backgroundStyle} className="bg-dark-primary"> 
        <Navbar />
      </div>

      <div
        id="container"
        className="relative overflow-hidden h-screen w-screen"
        style={{ backgroundColor: "#0C0C0C" }} // Ensure consistent background color
      >
        {/* Responsive image settings for Safari */}
        <img
          className="absolute bottom-0 left-[50%] transform translate-x-[-50%] z-50"
          src="./pixelcut-export.png"
          alt="error"
          style={{
            width: '100%',   // Default width to make it responsive
            maxWidth: '370px',  // Restrict maximum width
            height: 'auto',   // Maintain aspect ratio
            objectFit: 'contain',
          }}
        />

        {/* Safari-specific height */}
        <style>
          {`
            @supports (-webkit-touch-callout: none) {
              img[src='./pixelcut-export.png'] {
                height: 250px !important; /* Safari-specific height */
              }
            }

            /* Remove background-attachment: fixed for mobile */
            @media screen and (max-width: 768px) {
              div[style*="background-attachment: fixed"] {
                background-attachment: scroll !important;
              }
            }
          `}
        </style>

        <div
          id="orange"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[35px] pl-[96px] mt-5"
            style={{ fontFamily: "NeueMachina" }}
          >
            CYBERSAFE
            <br />
            CHECKPOINT
          </h1>
          <div
            className="mt-[110px] p-8 rounded-2xl ml-4 mr-4 md:w-[500px] md:ml-[108px] border-2 border-rose-500"
            style={{ backgroundColor: "#24CFA6" }}
          >
            <p
              className="text-[25px]"
              style={{ fontFamily: "Gilroy" }}
            >
              "Think your device is secure? Let Cybersafe Checkpoint reveal the
              truth—protect your data before it's too late!"
            </p>
          </div>
          <div className="flex mt-[40px] md:block md:pl-[108px] justify-evenly">
            <h1
              style={{ fontFamily: "NeueMachina" }}
            >
              09-10-2024
            </h1>
            <img
              style={registerButtonStyle}
              className="h-[45px] w-[45px] md:h-[60px] md:w-[180px] text-white rounded-xl"
              src="./icons8-arrow-50.png"
              alt="error"
            />
          </div>
        </div>
        <div
          id="purple"
          className="absolute top-0 left-0 text-white text-5xl bg-slate-950 h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[35px] pl-[96px] mt-5"
            style={{ fontFamily: "NeueMachina" }}
          >
            ADRISHYAM
          </h1>
          <div
            className="mt-[143px] md:mt-[209px] p-5 rounded-2xl ml-4 mr-4"
            style={{ backgroundColor: "#24CFA6" }}
          >
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
              "Think you can escape the ordinary? Step into Adrishyam, where
              your wits are your only way out! Can you break free before time
              runs out?"
            </p>
          </div>
          <div className="flex mt-[40px] justify-evenly">
            <h1 style={{ fontFamily: "NeueMachina" }}>18-10-2024</h1>
            <img
              style={registerButtonStyle}
              className="h-[45px] w-[45px] text-white rounded-xl"
              src="./icons8-arrow-50.png"
              alt="error"
            />
          </div>
        </div>
        <div
          id="green"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          Onkar
        </div>
      </div>
    </>
  );
}

export default Homepage;
