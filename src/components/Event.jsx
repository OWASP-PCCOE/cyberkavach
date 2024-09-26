import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Event(props) {
  const [isVisible, setIsVisible] = useState(false); 

  const backgroundStyle = {
    backgroundImage: `url('./bg-owasp.svg')`,
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

  // Toggle visibility of the paragraph
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  
  const movenext = () => {
    
  }
  return (
    <>
      <div style={backgroundStyle} className="flex flex-col min-h-screen overflow-hidden">
        <Navbar />

        <div>
          {/* new animation to be added */}
        </div>
        <div className="flex-grow flex flex-col items-center justify-between text-white h-[80vh] relative">
          {/* Image container with reduced size and negative Y translation */}
          <div className="mt-4 md:-translate-y-[60px]">
            <img
              className="h-[350px] w-[260px] md:h-[400px] md:w-[370px] rounded-xl"
              src="./8.png"
              alt="error"
            />
          </div>

          {/* Navigation Buttons centered */}
          <div className="flex flex-row justify-center  w-full space-x-4">
            <button
              style={{ fontFamily: 'Gilroy' }}
              className="pl-8 pr-8 bg-slate-100 text-black rounded-xl text-[18px]"
            >
              Move back
            </button>
            <button
              style={{ fontFamily: 'Gilroy', backgroundColor: '#FFCC00' }}
              className="p-3 pl-8 pr-8 text-black rounded-xl text-[18px] md:text-[30px]"
              onClick={movenext}
            >
              Amazing, Next
            </button>
          </div>

          {/* Register Button */}
          <div className="mt-4">
            <button
              style={{ fontFamily: 'Gilroy', ...registerButtonStyle }}
              className="p-3 rounded-xl pl-20 pr-20 text-white font-semibold md:text-[25px]"
            >
              Register
            </button>
          </div>

          {/* Sliding paragraph with transition */}
          <div
            className={`absolute bottom-[50px] md:bottom-[35px] transition-all duration-500 ease-out bg-gray-800 rounded-lg text-center p-4 z-10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}
            style={{ width: 'calc(100% - 40px)', maxWidth: '400px' }}
          >
            <p>{props.content}</p>
          </div>

          {/* Details Button adjusted to be visible within the viewport */}
          <div className="w-full flex justify-center mt-4 mb-2 z-20">
            <button
              onClick={handleToggle}
              className="p-2 pl-20 pr-20 rounded-[10px] text-[15px]"
              style={{ fontFamily: 'Gilroy', backgroundColor: '#222222' }}
            >
              <img src="./arrow-up.png" alt="arrow up" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;




