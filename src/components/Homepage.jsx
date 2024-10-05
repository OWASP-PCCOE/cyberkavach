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
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

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
      })
      .from("#seven", {
        yPercent: 100,
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
   
  const navigate = useNavigate(); 
  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`); 
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      style={{ overflowY: 'scroll'}} // Ensure proper scroll handling
      
    >

      {/* Background section */}
      <div style={backgroundStyle} className="bg-dark-primary">
        {/* className="bg-dark-primary" */}
        <Navbar />

        <div className='flex flex-col justify-center items-center'>
        <div><img src="./homepage-logo.jpeg" className=' md:w-[500px]  md:h-[500px]  z-50' alt="" /></div>
        <div><img src="./cyber-font-7.png" className=' md:mt-[-35px] mt-[55px] sm:ml-[0] md:ml-[37px] z-50' alt="" /></div>
        </div>
        {/* md:-translate-y-[30px] */}
      </div>
      <div
        id="container"
        className="relative overflow-hidden h-screen w-screen"
        style={{ backgroundColor: "#0C0C0C" }} // Ensure consistent background color
      >
        
        <div >
            <div style={{ fontFamily: "Gilroy" }} className='text-white  md:w-[450px] neon-green rounded-xl md:ml-[150px] md:mt-[210px] p-8 mt-[60px] m-6'>
              <p className='md:text-3xl text-[20px] '>"Stay ahead in the game of cybersecurity! Check out the CyberKavach event timeline and mark your calendar for a month of action-packed learning and challenges!"</p> 
                <div style={{ fontFamily: 'NeueMachina' }} className='text-white opacity-50 text-[18px] hover:opacity-90  align-baseline'>Scroll Down smoothly</div>
            </div>
          
            

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
        </div>

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

            @media screen and (min-width: 431px) and (min-device-width: 320px) {
            .homepage-logo {
              height: 360px;
              width: 360px;
              margin-left: 80px; /* Adjusted margin for Android devices */
            }
          }
           @media screen and (max-width: 430px) and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
            .homepage-logo {
             height: 300px;
             width: 300px;
             margin-left: 52px; /* Keep the same as your current value */
             }
            } 
          `}
        </style>

        <div
          id="one"
          className="absolute top-0 left-0 text-white text-5xl h-full w-screen bg-black"

        >
          <h1
            className="md:text-[100px] text-[37px] md:pl-[94px] mt-5 text-center md:text-left "
            style={{ fontFamily: "NeueMachina" }}
          >
            CYBER<span className="text-green-400">SAFE</span>
            <br />
            CHECKPOINT
          </h1>
          <div
            className="md:mt-[50px] mt-[31px] p-8 rounded-2xl ml-4 mr-4 md:w-[500px] md:ml-[108px] neon-rose"
          >
            <p className="text-[23px] md:text-[27px]" style={{ fontFamily: "Gilroy" }}>
              "Think your device is secure? Let Cybersafe Checkpoint reveal the
              truth—protect your data before it's too late!"
            </p>
          </div>
          <div className="flex flex-row md:mt-[26px] mt-[26px] md:w-[600px] md:pl-[37px] justify-evenly">
            <p className='text-[37px]' style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>09</span>-10-2024</p>
            <button onClick={() => handleEventClick(1)} > <img src="/pngwing.com.png" className='rounded-xl p-2 h-[34px] w-[36px] border-2  border-rose-300' alt="" /></button>
          </div>
        </div>

        <div
          id="two"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[39px]  md:pl-[110px] mt-5 text-yellow-200 text-center md:text-left "
            style={{ fontFamily: "NeueMachina" }}
          >
            FACULTY<br />SESSION
          </h1>
          <div className="mt-[37px] md:mt-[80px] p-5 rounded-2xl ml-4 mr-4 neon-blue md:w-[500px] md:ml-[108px]">
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
              "Empower Your Digital Defense: Join Us for an Exclusive Faculty Cybersecurity Session!"
            </p>
          </div>
          <div className="flex flex-row mt-[26px] md:w-[600px] md:pl-[37px] justify-evenly">
            <h1 className='text-[37px]' style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>14</span>-10-2024</h1>
            <button onClick={() => handleEventClick(2)}> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[34px] w-[36px] border-2  border-rose-300' alt="" /></button>
          </div>
        </div>

        <div
          id="three"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[48px] md:pl-[101px]  mt-5 text-center md:text-left "
            style={{ fontFamily: "NeueMachina" }}
          >
            MOCK <span className="text-orange-400">GRE</span>
          </h1>
          <div
            className="mt-[44px] md:mt-[92px] p-8 rounded-2xl ml-4 mr-4 md:w-[500px] md:ml-[108px] neon-yellow"
          >
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
              "Crack the GRE Code: Test Your Skills and Step Closer to Your Dream University!"
            </p>
          </div>
          <div className="flex flex-row mt-[26px] md:w-[600px] md:pl-[37px] justify-evenly">
            <h1 className='text-[37px]' style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>16</span>-10-2024</h1>
            <button onClick={() => handleEventClick(3)}> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[34px] w-[36px] border-2  border-rose-300' alt="" /></button>
          </div>
        </div>

        <div
          id="four"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[46px] mt-5  md:pl-[90px] text-red-400 text-center md:text-left"
            style={{ fontFamily: "NeueMachina" }}
          >
            ADRISHYAM
          </h1>
          <div className="mt-[33px] md:mt-[80px] p-5 rounded-2xl ml-4  mr-4 neon-lime md:w-[500px] md:ml-[84px]">
            <p className="text-[23px]" style={{ fontFamily: "Gilroy" }}>
              "Think you can escape the ordinary? Step into Adrishyam, where
              your wits are your only way out! Can you break free before time
              runs out?"
            </p>
          </div>
          <div className="flex flex-row mt-[26px] md:w-[600px] md:pl-[11px] justify-evenly">
            <h1 className='text-[37px]' style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>18</span>-10-2024</h1>
            <button onClick={() => handleEventClick(4)}> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[34px] w-[36px] border-2  border-rose-300' alt="" /></button>
          </div>
        </div>



        <div
          id="five"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[46px] mt-5 md:pl-[90px] text-green-100 text-center md:text-left"
            style={{ fontFamily: "NeueMachina" }}
          >
            MRIGAYA
          </h1>
          <div className="mt-[40px] md:mt-[80px] p-5 rounded-2xl ml-4 mr-4 neon-purple md:w-[500px] md:ml-[84px]">
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
              "Think you can escape the ordinary? Step into Adrishyam, where
              your wits are your only way out! Can you break free before time
              runs out?"
            </p>
          </div>
          <div className="flex flex-row mt-[26px] md:w-[600px] md:pl-[37px] justify-evenly">
            <h1 className='text-[37px]' style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>21</span>-10-2024</h1>
            <button onClick={() => handleEventClick(5)}> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[34px] w-[36px] border-2  border-rose-300' alt="" /></button>
          </div>
        </div>
        <div
          id="six"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[46px]  mt-5 md:pl-[90px] text-emerald-400 text-center md:text-left"
            style={{ fontFamily: "NeueMachina" }}
          >
            QUEST-CON
          </h1>
          <div className="mt-[50px] md:mt-[80px] p-5 rounded-2xl ml-4 mr-4 neon-indigo  md:w-[500px] md:ml-[84px]">
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
              "Embark on the Ultimate Cyber Challenge: Unravel Mysteries at QUEST-CON!"
            </p>
          </div>
          <div className="flex flex-row mt-[26px] md:w-[600px] md:pl-[11px] justify-evenly">
            <h1 className='text-[37px]' style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>22</span>-10-2024</h1>
            <button onClick={() => handleEventClick(6)}> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[34px] w-[36px] border-2  border-rose-300' alt="" /></button>
          </div>
        </div>
        <div
          id="seven"
          className="absolute top-0 left-0 text-white text-5xl bg-black h-full w-screen"
        >
          <h1
            className="md:text-[100px] text-[40px] mt-5 md:pl-[90px] text-emerald-400 text-center md:text-left"
            style={{ fontFamily: "NeueMachina" }}
          >
            WEB-DEV<br />SESSION
          </h1>
          <div className="mt-[37px] md:mt-[80px] p-5 rounded-2xl ml-4 mr-4 neon-indigo   md:w-[500px] md:ml-[84px]">
            <p className="text-[25px]" style={{ fontFamily: "Gilroy" }}>
              "Embark on the Ultimate Cyber Challenge: Unravel Mysteries at QUEST-CON!"
            </p>
          </div>
          <div className="flex flex-row mt-[26px] md:w-[600px] md:pl-[11px] justify-evenly">
            <h1 className='text-[37px]' style={{ fontFamily: "NeueMachina" }}><span className='text-green-500'>22</span>-10-2024</h1>
            <button onClick={() => handleEventClick(6)}> <img src="/pngwing.com.png" className='rounded-xl p-2 h-[34px] w-[36px] border-2  border-rose-300' alt="" /></button>
          </div>
        </div>
      </div>
      <div id='sponsors' className='h-screen w-screen '>
        <div className='text-white text-[47px] text-center' style={{ fontFamily: "NeueMachina" }}>Our <span className='text-green-400'>Esteemed</span> <br /> Sponsors</div>
        <div className='flex flex-col h-auto mt-[25px] items-center'>

          <img src="/raaga.png" className='h-[120px] w-[127px] ml-[18px] md:ml-[6px] mt-4 p-5 neon-lime rounded-xl ' alt="error" />


          <div className='flex mt-[32px] ml-[46px] p-5 neon-lime rounded-xl mr-[31px] md:w-[500px] md:items-center justify-center'>
            <img src="/wetnjoy.png" className='h-[120px] w-[127px] mt-4 ml-[8px] ' alt="error" />
            <img src="/belgiumwaffle.png" className='h-[120px] w-[127px] mt-4 ml-[7px] md:ml-[63px]' alt="error" />
 
          </div>

          <div className='flex mt-[32px] ml-[46px] p-5 neon-lime rounded-xl mr-[31px] md:w-[500px] md:items-center justify-center'>
            <img src="/backbencherscafe.png" className='h-[120px] w-[127px] mt-4' alt="error" />
            <img src="/attenction.png" className='h-[120px] w-[127px] mt-4 ml-[12px] md:ml-[63px]' alt="error" />
          </div>

        </div>
      </div>
      {/* <Footer/> */}
      
    </motion.div>
  );
}

export default Homepage;
