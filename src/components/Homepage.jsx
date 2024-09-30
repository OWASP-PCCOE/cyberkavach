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

// import React from 'react';
// import Navbar from './Navbar';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import {motion} from 'framer-motion';


// gsap.registerPlugin(ScrollTrigger);

// function Homepage() {
//   const backgroundStyle = {
//     backgroundImage: `url('./bg-owasp.svg')`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     minHeight: '100vh', // Ensure it covers the whole screen
//     height: '100%',
//     backgroundColor: '#0C0C0C', // Fallback background color to avoid white space
//   };

//   const registerButtonStyle = {
//     backgroundImage: `url(./button-img.webp)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   useGSAP(() => {
//     gsap.defaults({ ease: "sine.inOut", duration: 3 });

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
//     <motion.div initial={{opacity:0}}
//     animate={{opacity:1}}
//     exit={{opacity:0}}
//     transition={{ duration: 2 }}> 
//       {/* Background section */}
//       <div style={backgroundStyle} className="bg-dark-primary"> 
//         <Navbar />
//       </div>
               
//       <div
//         id="container"
//         className="relative overflow-hidden h-screen w-screen"
//         style={{ backgroundColor: "#0C0C0C" }} // Ensure consistent background color
//       >
//         {/* Responsive image settings for Safari */}
//         <img
//           className=" md:hidden block absolute bottom-0 left-[50%] h-[350px] object-contain transform translate-x-[-50%] z-50 md:ml-[400px] md:h-[400px] md:w-[400px]"
//           src="./pixelcut-export.png"
//           alt="error"
//           style={{
//             // width: '100%',   // Default width to make it responsive
//             // maxWidth: '370px',  // Restrict maximum width
//             // height: '350px',   // Maintain aspect ratio
//             // objectFit: 'contain',
//           }}
//         />
//           <img
//           className="absolute bottom-0 left-[50%] h-[650px] object-contain transform hidden md:block z-50"
//           src="./pixelcut-export.png"
//           alt="error"
//           style={{
//             // width: '100%',   // Default width to make it responsive
//             // maxWidth: '370px',  // Restrict maximum width
//             // height: '350px',   // Maintain aspect ratio
//             // objectFit: 'contain',
//           }}
//         />
//         {/* Safari-specific height */}
//         <style>
//           {`
//             @supports (-webkit-touch-callout: none) {
//               img[src='./pixelcut-export.png'] {
//                 height: 250px !important; /* Safari-specific height */
//               }
//             }

//             /* Remove background-attachment: fixed for mobile */
//             @media screen and (max-width: 768px) {
//               div[style*="background-attachment: fixed"] {
//                 background-attachment: scroll !important;
//               }
//             }
//           `}
//         </style>

//         <div
//           id="orange"
//           className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
//         >
//           <h1
//             className="md:text-[100px] text-[40px] pl-[96px] mt-5 "
//             style={{ fontFamily: "NeueMachina" }}
//           >
//             CYBER<span className='text-green-400'>SAFE</span>
//             <br />
//             CHECKPOINT
//           </h1>
//           <div
//             className="mt-[50px] p-8 rounded-2xl ml-4 mr-4 md:w-[500px] md:ml-[108px] neon-rose"
//             // style={{ backgroundColor: "#24CFA6" }}
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
//             className="mt-[83px] md:mt-[209px] p-5 rounded-2xl ml-4 mr-4 neon-lime"
//             // style={{ backgroundColor: "#24CFA6" }}
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
//     </motion.div>
//   );
// }

// export default Homepage;

import React from 'react';
import Navbar from './Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {motion} from 'framer-motion';

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
    gsap.defaults({ ease: "sine.inOut", duration: 3 });

    const tl = gsap.timeline();
      tl.from("#one", {
        xPercent: -100,
      })
      .from("#two", {
        xPercent: 100,
      })
      .from("#three", {
        yPercent: -100,
      })
      .from("#four", {
        xPercent: -100,
      })
      .from("#five", {
        xPercent: 100,
      })
      .from("#six", {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      style={{ overflowY: 'scroll' }} // Ensure proper scroll handling
    >

      {/* Background section */}
      <div style={backgroundStyle}  className="bg-dark-primary">
      {/* className="bg-dark-primary" */}
        <Navbar />
        <div><img src="homepage-logo.jpeg" className='h-[400px] w-[400px] md:ml-[553px] ml-2' alt="" /></div>
         {/* <div><img src="cyber-font-7.png" className='md:pl-[267px] md:mt-0 mt-[55px] z-50' alt="" /></div> */}
      </div>
      <div
        id="container"
        className="relative overflow-hidden h-screen w-screen"
        style={{ backgroundColor: "#0C0C0C" }} // Ensure consistent background color
      >
        {/* Responsive image settings for Safari */}
        <img
          className="md:hidden block absolute bottom-0 left-[50%] h-[350px] object-contain transform translate-x-[-50%] z-50 md:ml-[400px] md:h-[400px] md:w-[400px]"
          src="./pixelcut-export.png"
          alt="error"
        />
        <img
          className="absolute bottom-0 left-[50%] h-[650px] object-contain transform hidden md:block z-50"
          src="./pixelcut-export.png"
          alt="error"
        />

        <style>
          {`
            /* Hide scrollbars for WebKit browsers (Chrome, Safari) */
            ::-webkit-scrollbar {
              display: none;
            }

            /* Hide scrollbar for Firefox */
            body {
              scrollbar-width: none; /* For Firefox */
              -ms-overflow-style: none; /* For Internet Explorer and Edge */
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
          id="one"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[40px] md:pl-[94px] pl-[79px] mt-5 "
            style={{ fontFamily: "NeueMachina" }}
          >
            CYBER<span className="text-green-400">SAFE</span>
            <br />
            CHECKPOINT
          </h1>
          <div
            className="mt-[50px] p-8 rounded-2xl ml-4 mr-4 md:w-[500px] md:ml-[108px] neon-rose"
          >
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
              "Think your device is secure? Let Cybersafe Checkpoint reveal the
              truth—protect your data before it's too late!"
            </p>
          </div>
          <div className="flex flex-row mt-[40px] md:block md:pl-[108px] justify-evenly">
            <h1 style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>09</span>-10-2024</h1>
            <button className=''> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[40px] w-[40px] border-2 md:mt-6 border-rose-300' alt="" /></button>
          </div>
        </div>
            
        <div
          id="two"
          className="absolute top-0 left-0 text-white text-5xl bg-slate-950 h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[46px] pl-[96px] mt-5 text-yellow-200"
            style={{ fontFamily: "NeueMachina" }}
          >
            FACULTY<br/>SESSION
          </h1>
          <div className="mt-[50px] md:mt-[209px] p-5 rounded-2xl ml-4 mr-4 neon-blue">
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
            "Empower Your Digital Defense: Join Us for an Exclusive Faculty Cybersecurity Session!"
            </p>
          </div>
          <div className="flex mt-[40px] justify-evenly">
            <h1 style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>14</span>-10-2024</h1>
            <button className=''> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[40px] w-[40px] border-2 md:mt-6 border-rose-300' alt="" /></button>
          </div>
        </div>

        <div
          id="three"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[48px] md:pl-[94px] pl-[79px] mt-5 "
            style={{ fontFamily: "NeueMachina" }}
          >
            MOCK <span className="text-rose-400">GRE</span>
          </h1>
          <div
            className="mt-[92px] p-8 rounded-2xl ml-4 mr-4 md:w-[500px] md:ml-[108px] neon-yellow"
          >
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
            "Crack the GRE Code: Test Your Skills and Step Closer to Your Dream University!"
            </p>
          </div>
          <div className="flex flex-row mt-[40px] md:block md:pl-[108px] justify-evenly">
            <h1 style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>16</span>-10-2024</h1>
            <button className=''> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[40px] w-[40px] border-2 md:mt-6 border-rose-300' alt="" /></button>
          </div>
        </div>

        <div
          id="four"
          className="absolute top-0 left-0 text-white text-5xl bg-slate-950 h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[46px] pl-[79px] mt-5 text-red-400"
            style={{ fontFamily: "NeueMachina" }}
          >
            ADRISHYAM
          </h1>
          <div className="mt-[83px] md:mt-[209px] p-5 rounded-2xl ml-4 mr-4 neon-lime">
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
              "Think you can escape the ordinary? Step into Adrishyam, where
              your wits are your only way out! Can you break free before time
              runs out?"
            </p>
          </div>
          <div className="flex mt-[40px] justify-evenly">
            <h1 style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>18</span>-10-2024</h1>
            <button className=''> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[40px] w-[40px] border-2 md:mt-6 border-rose-300' alt="" /></button>
          </div>
        </div>


     
        <div
          id="five"
          className="absolute top-0 left-0 text-white text-5xl bg-slate-950 h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[46px] pl-[96px] mt-5 text-green-100"
            style={{ fontFamily: "NeueMachina" }}
          >
             MRIGAYA
          </h1>
          <div className="mt-[40px] md:mt-[209px] p-5 rounded-2xl ml-4 mr-4 neon-lime">
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
              "Think you can escape the ordinary? Step into Adrishyam, where
              your wits are your only way out! Can you break free before time
              runs out?"
            </p>
          </div>
          <div className="flex mt-[40px] justify-evenly">
            <h1 style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>21</span>-10-2024</h1>
            <button className=''> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[40px] w-[40px] border-2 md:mt-6 border-rose-300' alt="" /></button>
          </div>
        </div>
        <div
          id="six"
          className="absolute top-0 left-0 text-white text-5xl bg-slate-950 h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[46px] pl-[70px] mt-5 text-emerald-400"
            style={{ fontFamily: "NeueMachina" }}
          >
            QUEST-CON<br/>
          </h1>
          <div className="mt-[50px] md:mt-[209px] p-5 rounded-2xl ml-4 mr-4 neon-blue">
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
            "Embark on the Ultimate Cyber Challenge: Unravel Mysteries at QUEST-CON!"
            </p>
          </div>
          <div className="flex mt-[40px] justify-evenly">
            <h1 style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>22</span>-10-2024</h1>
            <button className=''> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[40px] w-[40px] border-2 md:mt-6 border-rose-300' alt="" /></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;
