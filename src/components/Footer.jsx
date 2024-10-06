import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

    const goLink = (idSocial) => {
        window.open(idSocial, '_blank'); 
     }

    return (
        <>
            <div className='bg-black h-auto w-screen  flex flex-col text-white'>
                <hr className='opacity-50' />
                <div className='md:flex md:flex-row flex flex-col '>
                    <div className=' w-full md:w-[60%] '>
                        <div className='flex justify-center md:justify-normal'>
                        <img src="owasp_white.png" className='h-[92px] w-auto md:h-[100px] md:w-auto md:ml-[33px] md:mt-3' alt="" />
                        </div>
                        <div className='flex list-none md:gap-[30px] mt-7 md:mt-16 md:ml-[20px] md:justify-normal justify-evenly  items-center md:-translate-y-7'>
                            <li className='py-2 opacity-75 text-xl hover:opacity-90 hover:underline' style={{ fontFamily: 'NeueMachina' }}> <Link to="/" >Home</Link></li>
                            <li className='py-2 text-xl opacity-75 hover:opacity-90 hover:underline' style={{ fontFamily: 'NeueMachina' }}><Link to="/events">Events</Link></li>
                            <li className='py-2 text-xl opacity-75 hover:opacity-90 hover:underline' style={{ fontFamily: 'NeueMachina' }}><Link to="/team">Team</Link></li>
                            <li className='py-2 text-xl opacity-75 hover:opacity-90 hover:underline' style={{ fontFamily: 'NeueMachina' }}><Link to="/timeline">Timeline</Link></li>
                            
                        </div>
                        <div className='flex justify-evenly md:justify-normal mt-10  md:gap-12 md:ml-7 md:-translate-y-7'>
                            <img src="/instagram.png" onClick={() => goLink('https://www.instagram.com/pccoe_owasp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')} className='h-9 w-9 cursor-pointer' alt="" />
                            <img src="/linkedin.png" onClick={() => goLink('https://www.linkedin.com/in/pccoe-owasp/?originalSubdomain=in')} className='h-9 w-9 cursor-pointer' alt="" />
                            <img src="/youtube.png" onClick={() => goLink('https://www.youtube.com/@PCCOEOWASP')} className='h-9 w-9 cursor-pointer' alt="" />
                            <img src="/twitter-1.png" onClick={() => goLink('https://x.com/pccoe_owasp')} className='h-9 w-9 cursor-pointer' alt="" />
                        </div>
                    </div>
                    <div className='p-7 text-[16px] opacity-40  border-2 neon-green rounded-2xl mt-8'>
                        <p style={{fontFamily:'Gilroy'}}>OWASP is a student chapter focuses on cybersecurity offering a platform  to explore and learn about various aspects of cybersecurity.</p>
                        <div className='hidden md:block md:mt-4'>
                            <div className='flex '>
                                <img className='h-[25px] w-[25px]' src="/placeholder.png" alt="" />
                                <p className='ml-4'>Sector 26 , Pradhikaran Nigdi (Near Akurdi Railway Station) , 411044</p>
                            </div>
                            <div>
                                <h3 style={{fontFamily:'Neumachina'}} className='mt-4'>CYBERKAVACH</h3>
                            </div>
                            <div>
                                <p style={{fontFamily:'Gilroy'}} className='mt-4'>CyberKavach is a month-long cybersecurity event designed to promote awareness and skill-building in the field of cybersecurity. It features action-packed learning sessions, challenges, and competitions aimed at helping participants strengthen their knowledge and defenses against cyber threats.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="./cyber-font-7.png" className=' md:mt-[-35px]  md:ml-[37px] z-50' alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer
