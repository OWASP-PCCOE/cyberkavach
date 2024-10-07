import { motion } from 'framer-motion'
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Team() {

    const moveLink = (linkSocial) => {
        window.open(linkSocial, '_blank'); 
    }

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
            className="flex flex-col min-h-screen overflow-auto" // Adjusted container for scrolling
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}>

            <Navbar />

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

            <div id='container' className='min-h-screen'>
            <div id='Team' className='w-full flex flex-col justify-center items-center mt-2 mb-7'>
                    <div className='pb-7 text-[40px] md:text-[47px] text-white ml-4 md:ml-5' style={{ fontFamily: 'NeueMachina' }}>
                        <p><span className='text-green-400'>Team</span> </p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                    <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/hod-removebg-preview.png" className='h-[194px] w-[151px] md:h-[355px] md:w-[286px] mt-7 translate-x-2' alt="" />
                            <div className='flex flex-col justify-center items-center mt-4'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Dr. Sonali Patil</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>HOD</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/dr-sonali-d-patil-9413681b/?originalSubdomain=in')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px]  md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/shailesh-sir-5.png" className='translate-y-5' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Mr. Shailesh<br/>Galande</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Faculty Advisor</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/shailesh-galande-0567183b/?originalSubdomain=in')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
              <div id='lead' className='w-full flex flex-col justify-center items-center mt-2 mb-7 '>
                    <div className='pb-7 text-[40px] md:text-[47px] text-white ml-4 md:ml-6' style={{ fontFamily: 'NeueMachina' }}>
                        <p><span className='text-green-400 md:ml-1'>Lead</span> </p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                    <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-10 ml-2'>
                            <img src="team/Omkar-Photoroom (1).png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Omkar Pote</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Lead</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/omkar-pote-02a10822a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='directors' className='w-full flex flex-col justify-center items-center'>
                    <div className='pb-7 text-[32px] md:text-[47px] text-white ml-4 md:ml-0' style={{ fontFamily: 'NeueMachina' }}>
                        <p>Meet Our <span className='text-green-400'>Directors</span></p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green ml-[5px]'>
                            <img src="/team/Mrunal-removebg-preview (1).png" className='-translate-x-3 -translate-y-2' alt="" />
                            <div className='flex flex-col justify-center items-center mt-4'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Mrunal Chopade</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Management <br/>Director</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/mrunal-chopade-730a77259/?originalSubdomain=in')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px]  md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Asmita-removebg-preview (1).png" alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Asmita <br/>Mahamuni</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Marketing <br/>Director</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/asmita-mahamuni-076186287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px]  md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-[5px] md:mt-0 mt-[17px]'>
                            <img src="team/Deep-removebg-preview (1).png" alt="" />
                            <div className='flex flex-col justify-center items-center mt-4'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Deep Dhakate</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Security Director</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/deepdhakate/?originalSubdomain=in')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2 md:mt-0 mt-[17px]'>
                            <img src="team/Mrudula-removebg-preview (1).png" alt="" />
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Mrudula <br/>Khedkar</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Content Director</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/mrudula-khedkar-388a35259/?originalSubdomain=in')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='management-team' className='w-full flex flex-col justify-center items-center mt-16'>
                    <div className='pb-7 text-[35px] md:text-[47px] text-white ml-4 md:ml-0' style={{ fontFamily: 'NeueMachina' }}>
                        <p><span className='text-green-400'>Management</span> Team</p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green ml-[5px]'>
                            <img src="/team/Shivam-removebg-preview (1).png" className='' alt="" />
                            <div className='flex flex-col justify-center items-center mt-3'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Shivam Rai</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Management Head</p>
                                <div className='flex justify-center items-center mt-1 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/shivam-rai-b74819259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/Nyxoy77')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Janhavi-removebg-preview (1).png" alt="" />
                            <div className='flex flex-col justify-center items-center mt-2'>
                                <p className='text-white text-[20px]' style={{ fontFamily: 'NeueMachina' }}>Janhavi Pinjan</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Management Head</p>
                                <div className='flex justify-center items-center mt-2 '>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/janhavi-pinjan-909190258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/janhavi0007')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center mt-7'>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Khush.png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Khush Paliwal</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/khush-paliwal-83920b307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/Khush044')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Pranjal.png" alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Pranjal Lipne</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/pranjal-lipne-318655330?trk=contact-info')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/pranjallipne17')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2 md:mt-0 mt-7'>
                            <img src="team/Prithviraj.png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Prithviraj Mule</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/pruthviraj-mule-855772292/?originalSubdomain=in')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='marketing-team' className='w-full flex flex-col justify-center items-center mt-16'>
                    <div className='pb-7 text-[35px] md:text-[47px] text-white ml-4 md:ml-0' style={{ fontFamily: 'NeueMachina' }}>
                        <p><span className='text-green-400'>Marketing</span> Team</p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green ml-[5px]'>
                            <img src="/team/Vishwanath-removebg-preview (1).png" className='' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Vishwanath<br/>Uttarwar</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Marketing Head</p>
                                <div className='flex justify-center items-center mt-1'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('http://www.linkedin.com/in/vishwanath-uttarwar-97a66b259')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Zeeshan.png" alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Zeeshan<br/>Siddique</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Marketing Head</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/zeeshan-siddique-a1557a250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/Zeeshan19s')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center mt-7'>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-0 ml-2'>
                            <img src="team/Parth.png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center mt-4'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Parth Kalpande</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/parth-kalpande-aa4684297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Vaishnavi.png" alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Vaishnavi<br/>Bighot</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/vaishnavi-bighot-797597322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/VaishnaviBighot')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='security-team' className='w-full flex flex-col justify-center items-center mt-16'>
                    <div className='pb-7 text-[35px] md:text-[47px] text-white ml-4 md:ml-0' style={{ fontFamily: 'NeueMachina' }}>
                        <p><span className='text-green-400'>Security</span> Team</p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green ml-[5px]'>
                            <img src="/team/Nikhil-3.png" className='' alt="" />
                            <div className='flex flex-col justify-center items-center mt-1'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Nikhil Pattewar </p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Security Head</p>
                                <div className='flex justify-center items-center mt-1'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/nikhilpattewar')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/PATTEWARNIKHIL')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Aryan-removebg-preview (1).png" alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Aaryan Bhujang</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Security Head</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/aaryan-bhujang-437765282/')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center mt-7'>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-0 ml-2'>
                            <img src="team/Kanchan.png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Kanchan<br/>Shendage</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-[34px] ml-2'>
                            <img src="team/Rudraksh.png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Rudraksh<br/>Charhate</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('http://www.linkedin.com/in/rudraksh-charhate-972110289')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/iamRUDRAKSH')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2 mt-7 md:mt-0'>
                            <img src="team/Gargi.png" className='-translate-x-2' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Gargi<br/>Gogulwar</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BGXjwA8%2FWTw6WUfjIRsUPtw%3D%3D')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/GargiGogulwar')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id='ctf-team' className='w-full flex flex-col justify-center items-center mt-16'>
                    <div className='pb-7 text-[35px] md:text-[47px] text-white ml-4 md:ml-0' style={{ fontFamily: 'NeueMachina' }}>
                        <p><span className='text-green-400'>CTF</span> Team</p>
                    </div>
                 <div className='flex flex-wrap justify-center'>
                    <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Billy-removebg-preview (1).png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px]' style={{ fontFamily: 'NeueMachina' }}>Prathmesh<br/>Mulay</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>CTF Head</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/prathmesh-mulay-205142301/?originalSubdomain=in')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/tevil344')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                    </div>
                 </div>
                    <div className='flex flex-wrap justify-center mt-7'>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Omkar.png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center mt-1'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Omkar Kumbhar</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/omkar-kumbhar365/')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/omkark03')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Riya.png" alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px]' style={{ fontFamily: 'NeueMachina' }}>Riya Deshmukh</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/riya-deshmukh-333r/')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/RiyaDeshmukh3')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2 md:mt-0 mt-7'>
                            <img src="team/Siddhika.png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Siddhika<br/>Aglave</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/siddhika-aglave-2b3596292/')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/siddhikaglave')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='treasurer-web' className='w-full flex flex-col justify-center items-center mt-16'>
                    <div className='pb-7 text-[32px] md:text-[47px] text-white ml-4 md:ml-0 flex gap-[65px] md:gap-[245px]' style={{ fontFamily: 'NeueMachina' }}>
                        <p className='text-green-400'>Treasurer </p>
                        <p className='pr-7 md:pr-0 text-green-400'>Web</p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                    <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Nishant-removebg-preview (1).png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Nishant Bhakar</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Treasurer</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink()} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-14 ml-2'>
                            <img src="team/SumitPisal-removebg-preview (1).png" alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Sumit Pisal</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Web Head</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p onClick={() => moveLink('https://www.linkedin.com/in/sumit-pisal-02b51a259')}><img src="/linkedin.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p onClick={() => moveLink('https://github.com/SumitPisal')}><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='content-team' className='w-full flex flex-col justify-center items-center mt-16 mb-7'>
                    <div className='pb-7 text-[35px] md:text-[47px] text-white ml-4 md:ml-0' style={{ fontFamily: 'NeueMachina' }}>
                        <p><span className='text-green-400'>Content</span> Team</p>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                    <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Roshan-removebg-preview (1).png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center mt-3'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Roshan Yadav</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Content Head</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/roshan-yadav-2a2596259/?originalSubdomain=in')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Sumit-removebg-preview (1).png" alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Sumit Kumar <br/>Prasad</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Content Head</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center mt-7'>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Shivani.png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Shivanee <br/>Surajiwale</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('http://www.linkedin.com/in/shivaneesurajiwale')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/shivaneesurajiwale')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2'>
                            <img src="team/Kartik.png" alt="" />
                            <div className='flex flex-col justify-center items-center mt-3'>
                                <p className='text-white text-[20px]' style={{ fontFamily: 'NeueMachina' }}>Kartik Thakur</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/kartikthakur2004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/kartikt2004')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-auto w-[170px] md:w-[300px] rounded-[15px] neon-green md:ml-8 ml-2 md:mt-0 mt-7'>
                            <img src="team/Aabha.png" className='translate-x-1' alt="" />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-white text-[20px] ' style={{ fontFamily: 'NeueMachina' }}>Aabha<br/>Chaudhari</p>
                                <p className='text-white text-[18px] opacity-50 hover:opacity-90 ' style={{ fontFamily: 'NeueMachina' }}>Member</p>
                                <div className='flex justify-center items-center mt-2 mb-2'>
                                    <p><img src="/linkedin.png" onClick={() => moveLink('https://www.linkedin.com/in/aabha-chaudhari-21245b278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%]' alt="error" /></p>
                                    <p><img src="/github.png" onClick={() => moveLink('https://github.com/aabhachaudhari')} className='cursor-pointer h-[30px] w-[30px] opacity-[65%] ml-[30px]' alt="error" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <Footer/>         
        </motion.div>
    )
}

export default Team;

