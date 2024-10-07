import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Event({ content, imageSrc, eventId, totalEvents, gFormLink }) {
  const [isVisible, setIsVisible] = useState(false);
  const [contentOpacity, setContentOpacity] = useState(1); // State for content opacity
  const navigate = useNavigate();
  const contentRef = useRef(null); // Reference for the sliding content
  const buttonRef = useRef(null); // Reference for the button

  const backgroundStyle = {
    backgroundImage: `url('/bg-owasp.svg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    height: 'auto',
  };

  const gForm  = (gLink) => {
    window.open(gLink, '_blank'); 
  }

  // Toggle visibility of the paragraph
  const handleToggle = () => {
    setIsVisible(!isVisible);
    // Change opacity based on visibility
    setContentOpacity(isVisible ? 1 : 0.3); 
  };

  const movenext = () => {
    // Navigate to the next event
    if (eventId < totalEvents) {
      navigate(`/events/${eventId + 1}`);
    }
  };

  const moveback = () => {
    // Navigate to the previous event
    if (eventId > 1) {
      navigate(`/events/${eventId - 1}`);
    }
  };

  // Hide content when clicking outside of it, but not on the button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contentRef.current && !contentRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsVisible(false);
        setContentOpacity(1); // Reset opacity when closing
      }
    };

    if (isVisible) {
      // Attach the event listener only when the content is visible
      document.addEventListener('click', handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or content visibility changes
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <motion.div
      style={backgroundStyle}
      className="flex flex-col min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Navbar />

      {/* Hide scrollbar */}
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
        `}
      </style>

      {/* Main Content Container with opacity */}
      <div className="flex-grow flex flex-col items-center justify-evenly text-white h-[80vh] relative -translate-y-[40px] md:-translate-y-[5px]">
        {/* Image container with reduced size and negative Y translation */}
        <div className="mt-4 md:-translate-y-[60px] -translate-y-[20px] rounded-xl neon-orange">
          <img
            className="h-[430px] w-[300px] md:h-[471px] md:w-[333px] rounded-xl object-cover"
            src={imageSrc} // Dynamically use the image source
            alt={`Event ${eventId}`}
            style={{ opacity: contentOpacity }} // Set opacity based on state
          />
        </div>

        {/* Navigation Buttons centered */}
        <div className="flex flex-row justify-center w-full space-x-4" style={{ opacity: contentOpacity }}>
          {/* Conditionally render Move Back button only if eventId > 1 */}
          {eventId > 1 && (
            <button
              onClick={moveback}
              style={{ fontFamily: 'Gilroy' }}
              className="pl-8 pr-8 bg-slate-300 text-black rounded-xl text-[18px] md:text-[25px]"
            >
              Move back
            </button>
          )}

          {/* Conditionally render Amazing, Next button only if eventId < totalEvents */}
          {eventId < totalEvents && (
            <button
              onClick={movenext}
              style={{ fontFamily: 'Gilroy' }}
              className="p-3 pl-8 pr-8 bg-slate-100 text-black rounded-xl text-[18px] md:text-[30px]"
            >
              Amazing, Next
            </button>
          )}
        </div>

        {/* Conditionally render the Register Button */}
        {eventId !== 8 && eventId !== 9 && eventId !== 1 && (
          <div className="mt-4 rounded-xl" style={{ opacity: contentOpacity }}>
            <button
              onClick={() => gForm(gFormLink)}
              style={{ fontFamily: 'Gilroy' }}
              className="p-3 rounded-xl pl-20 pr-20 border-2 neon-slate border-white text-white font-semibold md:text-[25px]"
            >
              Register
            </button>
          </div>
        )}

        {/* Sliding paragraph with transition */}
        <div id='slider'
          ref={contentRef} // Attach the reference to the sliding content
          className={`absolute bottom-[120px] md:bottom-[50px] transition-all duration-500 ease-out bg-gray-800 rounded-lg text-center p-4 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}
          style={{ width: 'calc(100% - 40px)', maxWidth: '400px', opacity: isVisible ? 1 : 0 }} // Set full opacity for the slider when visible
        >
          {content.map((line, index) => (
             <p key={index}>{line}</p>
           ))}
        </div>

        {/* Details Button adjusted to be visible within the viewport */}
        <div id='event-up' className="w-full flex justify-center mt-2 mb-8 z-20 md:mb-0">
          <button
            ref={buttonRef} // Attach the reference to the button
            onClick={handleToggle}
            className="p-2 pl-20 pr-20 rounded-[10px] text-[15px] border-2 border-rose-50 border-opacity-20"
            style={{ fontFamily: 'Gilroy', backgroundColor: '#222222', opacity: 1 }} // Keep button opacity full
          >
            {isVisible ? <img className='h-[30px] w-[30px]' src="/arrow-down.png" alt="error"/> : <img src="/arrow-up.png" alt="arrow up" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Event;











