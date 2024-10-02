import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  
  const bgSlider = {
    backgroundImage: `url('/bg-owasp.svg')`, // Update the path
    backgroundSize: 'cover',
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className='h-[100px] w-full flex justify-between bg-transparent'>
        <div className='w-[120px] md:w-[180px] -translate-y-4 md:-translate-y-9'>
          <img src="/owasp_white(2).png" alt="error" />
        </div>
        <div className='px-4 h-14 w-14 pt-4 text-white'>
          <img 
            src="/icons8-menu-bar-24.png" 
            alt="error" 
            className='filter-invert cursor-pointer' 
            onClick={toggleSidebar}
          />
        </div>
      </div>

      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40" 
          onClick={toggleSidebar} 
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-64 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}
          style={bgSlider} >
        <div className='p-4 text-white flex flex-col '>
       
          <div className='flex justify-between'>
            <h1 className='py-0 text-2xl 'style={{ fontFamily: 'NeueMachina' }}>Menu</h1>
          <button onClick={toggleSidebar} className="h-6 w-6 opacity-80 py-1">
              <img src="/icons8-close.svg" alt="" />
          </button>
          </div>
          <hr className='opacity-45'/>
          <ul className='mt-4'  >
            <li className='py-2 opacity-50 text-2xl hover:opacity-90' style={{ fontFamily: 'NeueMachina' }}> <Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li className='py-2 text-2xl opacity-50 hover:opacity-90' style={{ fontFamily: 'NeueMachina' }}><Link to="/events" onClick={toggleSidebar}>Events</Link></li>
            <li className='py-2 text-2xl opacity-50 hover:opacity-90' style={{ fontFamily: 'NeueMachina' }}><Link to="/team" onClick={toggleSidebar}>Team</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;



