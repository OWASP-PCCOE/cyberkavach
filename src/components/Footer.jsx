import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className='bg-black h-auto w-screen  flex flex-col text-white'>
                <hr className='opacity-50' />
                <div className='md:flex md:flex-row flex flex-col '>
                    <div className=' w-full md:w-[100%] '>
                        <div className='flex justify-center md:justify-normal'>
                        <img src="owasp_white.png" className='h-[92px] w-[147px] md:h-[100px] md:w-[200px] md:ml-[33px] md:mt-3' alt="" />
                        </div>
                        <div className='flex list-none md:gap-[30px] mt-7 md:mt-16 md:ml-[50px] md:justify-normal justify-evenly  items-center '>
                            <li className='py-2 opacity-75 text-xl hover:opacity-90 hover:underline' style={{ fontFamily: 'NeueMachina' }}> <Link to="/" >Home</Link></li>
                            <li className='py-2 text-xl opacity-75 hover:opacity-90 hover:underline' style={{ fontFamily: 'NeueMachina' }}><Link to="/events">Events</Link></li>
                            <li className='py-2 text-xl opacity-75 hover:opacity-90 hover:underline' style={{ fontFamily: 'NeueMachina' }}><Link to="/team">Team</Link></li>
                        </div>
                        <div className='flex justify-evenly md:justify-normal mt-10 p-5 md:gap-12 md:ml-7'>
                            <img src="/instagram.png" className='h-9 w-9' alt="" />
                            <img src="/linkedin.png" className='h-9 w-9' alt="" />
                            <img src="/youtube.png" className='h-9 w-9' alt="" />
                            <img src="/twitter-1.png" className='h-9 w-9' alt="" />
                        </div>
                    </div>
                    <div className='p-7 text-[16px] opacity-40 m-5 border-2 neon-green rounded-2xl mt-8'>
                        <p style={{fontFamily:'Gilroy'}}>OWASP is a student chapter focuses on cybersecurity offering a platform  to explore and learn about various aspects of cybersecurity.</p>
                        <p className='hidden md:block'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat quos in, fuga itaque ad numquam maiores consequatur exercitationem qui vel quod sit minima dignissimos aliquid? Maiores corrupti aut reprehenderit, iste nostrum obcaecati animi! Suscipit, nesciunt quia. Ex neque itaque voluptatum veritatis voluptatibus, accusamus quia hic eos repellat. Laudantium dignissimos quia voluptates laboriosam, libero sit.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="./cyber-font-7.png" className=' md:mt-[-35px] ml-2 sm:ml-[0] md:ml-[37px] z-50' alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer
