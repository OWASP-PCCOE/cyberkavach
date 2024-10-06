// import React from 'react'
// import { motion } from 'framer-motion'
// import Navbar from './Navbar';
// import Footer from './Footer';

// function Timeline() {

//     const backgroundStyle = {
//         backgroundImage: `url('/bg-owasp.svg')`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'fixed',
//         minHeight: '100vh',
//         height: 'auto',
//     };

//   return (
//      <motion.div
//             style={backgroundStyle}
//             className=" min-h-screen overflow-auto" 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 2 }}
//      >
//         <Navbar />

//        <div className='flex flex-col items-center '>
//        <div><img src="./cyber-font-9.png" className=' md:mt-[-35px] mt-[55px]  z-50' alt="" /></div>
//        <div className=' shadow-2xl shadow-blue-500 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px]  rounded-xl text-white border-2 flex flex-col items-center border-white'>
//             <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{fontFamily:'NeueMachina'}}>08 October</p>
//             <p className='text-5xl opacity-75 mt-12 mb-5 text-black font-bold' style={{fontFamily:'Gilroy'}}>INAUGURATION</p>
//         </div>

//         <div className='mt-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px]  rounded-xl text-white border-2 flex flex-col items-center border-white'>
//             <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{fontFamily:'NeueMachina'}}>09 October</p>
//             <p className='text-5xl opacity-75 mt-12 mb-5 text-black font-bold' style={{fontFamily:'Gilroy'}}>CYBERSAFE <br/> CHECKPOINT</p>
//         </div>

//         <div className='mt-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px]  rounded-xl text-white border-2 flex flex-col items-center border-white'>
//             <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{fontFamily:'NeueMachina'}}>08 October</p>
//             <p className='text-5xl opacity-75 mt-12 mb-5 text-black font-bold' style={{fontFamily:'Gilroy'}}>MOCK GRE</p>
//         </div>

//         <div className='mt-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px]  rounded-xl text-white border-2 flex flex-col items-center border-white'>
//             <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{fontFamily:'NeueMachina'}}>08 October</p>
//             <p className='text-5xl text-center opacity-75 mt-12 mb-5 text-black font-bold' style={{fontFamily:'Gilroy'}}>FACULTY SESSION</p>
//         </div>
//        </div>
//      </motion.div>
//   )
// }

// export default Timeline
import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar';
import Footer from './Footer';

function Timeline() {

    const backgroundStyle = {
        backgroundImage: `url('/bg-owasp.svg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        height: 'auto',
    };

    return (
        <motion.div
            style={backgroundStyle}
            className="min-h-screen overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <Navbar />

            <div className='flex flex-col items-center mb-10'>

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


                {/* Timeline Event 1 */}
                <div><img src="./cyber-font-9.png" className='md:mt-[-45px]  z-50' alt="" /></div>
                <div className='shadow-2xl shadow-blue-500 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>08 October</p>
                    <p className='text-5xl opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>INAUGURATION</p>
                </div>

                {/* Line connecting the events */}
                <div className='w-[4px]  bg-green-300 h-[110px] ml-auto mr-auto neon-lime' ></div>

                {/* Timeline Event 2 */}
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>09 October</p>
                    <p className='text-5xl opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>CYBERSAFE <br /> CHECKPOINT</p>
                </div>

                {/* Line connecting the events */}
                <div className='w-[4px]  bg-green-300 h-[110px] ml-auto mr-auto neon-lime' ></div>

                {/* Timeline Event 3 */}
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>14 October</p>
                    <p className='text-5xl text-center opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>FACULTY SESSION</p>
                </div>

                {/* Line connecting the events */}
                <div className='w-[4px]  bg-green-300 h-[110px] ml-auto mr-auto neon-lime'></div>

                {/* Timeline Event 4 */}
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>16 October</p>
                    <p className='text-5xl text-center opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>MOCK GRE</p>
                </div>
                <div className='w-[4px]  bg-green-300 h-[110px] ml-auto mr-auto neon-lime'></div>

                {/* Timeline Event 4 */}
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>18 October</p>
                    <p className='text-5xl text-center opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>ADRISHYAM</p>
                </div>

                <div className='w-[4px]  bg-green-300 h-[110px] ml-auto mr-auto neon-lime'></div>
                {/* Timeline Event 4 */}
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>21 October</p>
                    <p className='text-5xl text-center opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>MRIGAYA</p>
                </div>

                <div className='w-[4px]  bg-green-300 h-[110px] ml-auto mr-auto neon-lime'></div>
                {/* Timeline Event 4 */}
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>22 October</p>
                    <p className='text-5xl text-center opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>QUEST-CON</p>
                </div>

                <div className='w-[4px]  bg-green-300 h-[110px] ml-auto mr-auto neon-lime'></div>
                {/* Timeline Event 4 */}
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>23 October</p>
                    <p className='text-5xl text-center opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>DEV DEFENCE</p>
                </div>

                <div className='w-[4px]  bg-green-300 h-[110px] ml-auto mr-auto neon-lime'></div>
                {/* Timeline Event 4 */}
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>24 October</p>
                    <p className='text-5xl text-center opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>OFF CAMPUS</p>
                </div>

                <div className='w-[4px]  bg-green-300 h-[110px] ml-auto mr-auto neon-lime'></div>
                <div className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:w-[500px] w-[392px] rounded-xl text-white border-2 flex flex-col items-center border-white'>
                    <p className='bg-white text-3xl text-black border-2 mt-4 p-4 rounded-2xl neon-gray' style={{ fontFamily: 'NeueMachina' }}>25 October</p>
                    <p className='text-5xl text-center opacity-75 mt-12 mb-5 text-black font-bold' style={{ fontFamily: 'Gilroy' }}>VALEDICTORY</p>
                </div>
            </div>
            <Footer/>
        </motion.div>
    )
}

export default Timeline
