// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { Link } from 'react-router-dom';

// function Event(props) {
//   const [isVisible, setIsVisible] = useState(false);

//   const backgroundStyle = {
//     backgroundImage: `url('./bg-owasp.svg')`,
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

//   // Toggle visibility of the paragraph
//   const handleToggle = () => {
//     setIsVisible(!isVisible);
//   };

//   const movenext = () => {
//     <Link to={{
//       pathname: '/events',
//       state: { content: 'hello everyone my name is sumit vijay pisal i study in pimpri chinchwad college of engineering in am from ozarde taluka wai district satara i completed my scholling from blossom childrens academy wai and after 10th i studied at disha academy wai i am currenty in pccoe 3rd year computer engineering branch' }
//     }}>
//     </Link>
//   }
//   return (
//     <>
//       <div style={backgroundStyle} className="flex flex-col min-h-screen overflow-hidden">
//         <Navbar />

//         <div>
//           {/* new animation to be added */}
//         </div>
//         <div className="flex-grow flex flex-col items-center justify-evenly text-white h-[80vh] relative">
//           {/* Image container with reduced size and negative Y translation */}
//           <div className="mt-4 md:-translate-y-[60px]">
//             <img
//               className="h-[350px] w-[260px] md:h-[400px] md:w-[370px] rounded-xl"
//               src="./8.png"
//               alt="error"
//             />
//           </div>

//           {/* Navigation Buttons centered */}
//           <div className="flex flex-row justify-center  w-full space-x-4">
//             <button
//               style={{ fontFamily: 'Gilroy' }}
//               className="pl-8 pr-8 bg-slate-100 text-black rounded-xl text-[18px]"
//             >
//               Move back
//             </button>
//             <button
//               style={{ fontFamily: 'Gilroy', backgroundColor: '#FFCC00' }}
//               className="p-3 pl-8 pr-8 text-black rounded-xl text-[18px] md:text-[30px]"
//               onClick={movenext}
//             >
//               Amazing, Next
//             </button>
//           </div>

//           {/* Register Button */}
//           <div className="mt-4">
//             <button
//               style={{ fontFamily: 'Gilroy', ...registerButtonStyle }}
//               className="p-3 rounded-xl pl-20 pr-20 text-white font-semibold md:text-[25px]"
//             >
//               Register
//             </button>
//           </div>

//           {/* Sliding paragraph with transition */}
//           <div
//             className={`absolute bottom-[95px] md:bottom-[35px] transition-all duration-500 ease-out bg-gray-800 rounded-lg text-center p-4 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
//               }`}
//             style={{ width: 'calc(100% - 40px)', maxWidth: '400px' }}
//           >
//             <p>{props.content}</p>
//           </div>

//           {/* Details Button adjusted to be visible within the viewport */}
//           <div className="w-full flex justify-center mt-2 mb-2 z-20">
//             <button
//               onClick={handleToggle}
//               className="p-2 pl-20 pr-20 rounded-[10px] text-[15px]"
//               style={{ fontFamily: 'Gilroy', backgroundColor: '#222222' }}
//             >
//               <img src="./arrow-up.png" alt="arrow up" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Event;

// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';

// function Event(props) {
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();

//   const backgroundStyle = {
//     backgroundImage: `url('./bg-owasp.svg')`,
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

//   // Toggle visibility of the paragraph
//   const handleToggle = () => {
//     setIsVisible(!isVisible);
//   };

//   const movenext = () => {
//     // Navigate to /events and pass content as state
//     navigate('/events', {
//       state: {
//         content: 'Hello everyone, my name is Sumit Vijay Pisal. I study in Pimpri Chinchwad College of Engineering. I am from Ozarde Taluka, Wai District, Satara. I completed my schooling from Blossom Children’s Academy, Wai, and after 10th I studied at Disha Academy, Wai. I am currently in PCCOE 3rd year Computer Engineering branch.'
//       }
//     });
//   };

//   return (
//     <>
//       <div style={backgroundStyle} className="flex flex-col min-h-screen overflow-hidden">
//         <Navbar />
//         <div>
//           {/* new animation to be added */}
//         </div>
//         <div className="flex-grow flex flex-col items-center justify-evenly text-white h-[80vh] relative">
//           {/* Image container with reduced size and negative Y translation */}
//           <div className="mt-4 md:-translate-y-[60px]">
//             <img
//               className="h-[350px] w-[260px] md:h-[400px] md:w-[370px] rounded-xl"
//               src="./8.png"
//               alt="error"
//             />
//           </div>
//           {/* Navigation Buttons centered */}
//           <div className="flex flex-row justify-center  w-full space-x-4">
//             <button
//               style={{ fontFamily: 'Gilroy' }}
//               className="pl-8 pr-8 bg-slate-100 text-black rounded-xl text-[18px]"
//             >
//               Move back
//             </button>
//             <button
//               style={{ fontFamily: 'Gilroy', backgroundColor: '#FFCC00' }}
//               className="p-3 pl-8 pr-8 text-black rounded-xl text-[18px] md:text-[30px]"
//               onClick={movenext}
//             >
//               Amazing, Next
//             </button>
//           </div>

//           {/* Register Button */}
//           <div className="mt-4">
//             <button
//               style={{ fontFamily: 'Gilroy', ...registerButtonStyle }}
//               className="p-3 rounded-xl pl-20 pr-20 text-white font-semibold md:text-[25px]"
//             >
//               Register
//             </button>
//           </div>

//           {/* Sliding paragraph with transition */}
//           <div
//             className={`absolute bottom-[95px] md:bottom-[50px] transition-all duration-500 ease-out bg-gray-800 rounded-lg text-center p-4 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
//               }`}
//             style={{ width: 'calc(100% - 40px)', maxWidth: '400px' }}
//           >
//             <p>{props.content}</p>
//           </div>

//           {/* Details Button adjusted to be visible within the viewport */}
//           <div className="w-full flex justify-center mt-2 mb-2 z-20">
//             <button
//               onClick={handleToggle}
//               className="p-2 pl-20 pr-20 rounded-[10px] text-[15px]"
//               style={{ fontFamily: 'Gilroy', backgroundColor: '#222222' }}
//             >
//               <img src="./arrow-up.png" alt="arrow up" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Event;
// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';
// import {motion} from 'framer-motion';

// function Event({ content, imageSrc, eventId, totalEvents }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();

//   const backgroundStyle = {
//     backgroundImage: `url('/bg-owasp.svg')`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     minHeight: '100vh',
//     height: 'auto',
//   };

//   const registerButtonStyle = {
//     backgroundImage: `url(/button-img.webp)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };

//   // Toggle visibility of the paragraph
//   const handleToggle = () => {
//     setIsVisible(!isVisible);
//   };

//   const movenext = () => {
//     // Navigate to the next event
//     if (eventId < totalEvents) {
//       navigate(`/events/${eventId + 1}`);
//     }
//   };

//   const moveback = () => {
//     // Navigate to the previous event
//     if (eventId > 1) {
//       navigate(`/events/${eventId - 1}`);
//     }
//   };

//   return (
    
//       <motion.div style={backgroundStyle} className="flex flex-col min-h-screen overflow-hidden"
         
//         initial={{opacity:0}}
//         animate={{opacity:1}}
//         exit={{opacity:0}}
//         >
//         <Navbar />
//         <div className="flex-grow flex flex-col items-center justify-evenly text-white h-[80vh] relative">
//           {/* Image container with reduced size and negative Y translation */}
//           <div className="mt-4 md:-translate-y-[60px]">
//             <img
//               className="h-[350px] w-[260px] md:h-[400px] md:w-[370px] rounded-xl"
//               src={imageSrc} // Dynamically use the image source
//               alt={`Event ${eventId}`}
//             />
//           </div>

//           {/* Navigation Buttons centered */}
//           <div className="flex flex-row justify-center  w-full space-x-4">
//             <button
//               onClick={moveback}
//               disabled={eventId === 1} // Disable if it's the first event
//               style={{ fontFamily: 'Gilroy' }}
//               className="pl-8 pr-8 bg-slate-100 text-black rounded-xl text-[18px]"
//             >
//               Move back
//             </button>
//             <button
//               onClick={movenext}
//               disabled={eventId === totalEvents} // Disable if it's the last event
//               style={{ fontFamily: 'Gilroy', backgroundColor: '#FFCC00' }}
//               className="p-3 pl-8 pr-8 text-black rounded-xl text-[18px] md:text-[30px]"
//             >
//               Amazing, Next
//             </button>
//           </div>

//           {/* Register Button */}
//           <div className="mt-4">
//             <button
//               style={{ fontFamily: 'Gilroy', ...registerButtonStyle }}
//               className="p-3 rounded-xl pl-20 pr-20 text-white font-semibold md:text-[25px]"
//             >
//               Register
//             </button>
//           </div>

//           {/* Sliding paragraph with transition */}
//           <div
//             className={`absolute bottom-[95px] md:bottom-[50px] transition-all duration-500 ease-out bg-gray-800 rounded-lg text-center p-4 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
//               }`}
//             style={{ width: 'calc(100% - 40px)', maxWidth: '400px' }}
//           >
//             <p>{content}</p> {/* Dynamically display the content */}
//           </div>

//           {/* Details Button adjusted to be visible within the viewport */}
//           <div className="w-full flex justify-center mt-2 mb-2 z-20">
//             <button
//               onClick={handleToggle}
//               className="p-2 pl-20 pr-20 rounded-[10px] text-[15px]"
//               style={{ fontFamily: 'Gilroy', backgroundColor: '#222222' }}
//             >
//               <img src="/arrow-up.png" alt="arrow up" />
//             </button>
//           </div>
//         </div>
//       </motion.div>
    
//   );
// }

// export default Event;

import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Event({ content, imageSrc, eventId, totalEvents }) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url('/bg-owasp.svg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    height: 'auto',
    '@media (max-width: 768px)': {
      backgroundAttachment: 'scroll', // For mobile devices
    },
  };

  const registerButtonStyle = {
    backgroundImage: `url(/button-img.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  // Adjusted button for Safari
  const arrowButtonStyle = {
    fontFamily: 'Gilroy',
    backgroundColor: '#222222',
    position: 'absolute',
    bottom: '80px', // Default position for non-Safari browsers
    zIndex: 20,
    '@supports (-webkit-backdrop-filter: none)': {
      bottom: '130px', // Slightly higher for Safari
    },
  };

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const movenext = () => {
    if (eventId < totalEvents) {
      navigate(`/events/${eventId + 1}`);
    }
  };

  const moveback = () => {
    if (eventId > 1) {
      navigate(`/events/${eventId - 1}`);
    }
  };

  return (
    <motion.div
      style={backgroundStyle}
      className="flex flex-col min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-evenly text-white h-[80vh] relative">
        <div className="mt-4 md:-translate-y-[60px]">
          <img
            className="h-[350px] w-[260px] md:h-[400px] md:w-[370px] rounded-xl"
            src={imageSrc}
            alt={`Event ${eventId}`}
          />
        </div>

        <div className="flex flex-row justify-center w-full space-x-4">
          <button
            onClick={moveback}
            disabled={eventId === 1}
            style={{ fontFamily: 'Gilroy' }}
            className="pl-8 pr-8 bg-slate-100 text-black rounded-xl text-[18px]"
          >
            Move back
          </button>
          <button
            onClick={movenext}
            disabled={eventId === totalEvents}
            style={{ fontFamily: 'Gilroy', backgroundColor: '#FFCC00' }}
            className="p-3 pl-8 pr-8 text-black rounded-xl text-[18px] md:text-[30px]"
          >
            Amazing, Next
          </button>
        </div>

        <div className="mt-4">
          <button
            style={{ fontFamily: 'Gilroy', ...registerButtonStyle }}
            className="p-3 rounded-xl pl-20 pr-20 text-white font-semibold md:text-[25px]"
          >
            Register
          </button>
        </div>

        <div
          className={`absolute bottom-[109px] md:bottom-[50px] transition-all duration-500 ease-out bg-gray-800 rounded-lg text-center p-4 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}
          style={{ width: 'calc(100% - 40px)', maxWidth: '400px' }}
        >
          <p>{content}</p>
        </div>

        <div className="w-full flex justify-center mt-2 mb-2 z-20">
          <button
            onClick={handleToggle}
            className="p-2 pl-20 pr-20 rounded-[10px] text-[15px]"
            style={arrowButtonStyle}
          >
            <img src="/arrow-up.png" alt="arrow up" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Event;





