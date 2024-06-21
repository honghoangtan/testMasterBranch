
import { motion } from 'framer-motion'
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa"

import Select from 'react-select';


const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        descripion: '(+88) 094 2425 585'
    },
    {
        icon: <FaEnvelope />,
        title: 'Emal',
        descripion: 'hoangtan181201@gmail.com'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        descripion: 'Code Coner, Tech Town 12313'
    }
]

function Contact() {

    return ( 
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}
            }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    {/* form */}
                    <div className='xl:w-[54%] order-2 xl:order-none'>
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-4xl text-accent'>Let's work together</h3>

                            <p className='text-white/60'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            {/* input */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <input 
                                    className='flex h-[48px] rounded-md border border-white/10 focus:outline-none focus:border-accent
                                        font-light bg-primary px-4 py-5 text-base placeholder:text-white/60'
                                    type='text' 
                                    placeholder='Firstname'
                                />
                                <input
                                    className='flex h-[48px] rounded-md border border-white/10 focus:outline-none focus:border-accent
                                    font-light bg-primary px-4 py-5 text-base placeholder:text-white/60' 
                                    type='text' 
                                    placeholder='Lastname'
                                />

                                <input 
                                    className='flex h-[48px] rounded-md border border-white/10 focus:outline-none focus:border-accent
                                        font-light bg-primary px-4 py-5 text-base placeholder:text-white/60'
                                    type='email' 
                                    placeholder='Email address'
                                />

                                <input 
                                    className='flex h-[48px] rounded-md border border-white/10 focus:outline-none focus:border-accent
                                        font-light bg-primary px-4 py-5 text-base placeholder:text-white/60'
                                    type='text' 
                                    placeholder='Phone number'
                                />
                            </div>

                            {/* select */}
                            <select
                                className="flex h-[48px] px-4 bg-primary placeholder:text-white/10 text-white/60 
                                    rounded-md border border-white/10 focus:border-accent outline-none"
                            >
                                <option selected>Select a service</option>
                                <option value="est">Web Development</option>
                                <option value="cst">UI/UX Design</option>
                                <option value="mst">Logo Design</option>
                            </select>

                            {/* textarea */}
                            <textarea 
                                className='flex h-[200px] min-h-[80px] w-full rounded-md border-white/10 bg-primary px-4 py-5
                                    text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1
                                    focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50'
                                placeholder='Type your message here.'
                            />

                            {/* btn */}
                            <button className='max-w-40 bg-accent rounded-full text-primary py-3 hover:bg-accent-hover'>Send message</button>
                        </form>
                    </div>

                    {/* info */}
                    <div className='flex-1 flex items-center xl:justify-end mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {
                                info.map((item, index) => {
                                    return (
                                        <li key={index} className='flex items-center gap-6'>
                                            <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                                                bg-[#27272c] text-accent rounded-md flex items-center justify-center'
                                            >
                                                <div className='text-[28px]'>{item.icon}</div>
                                            </div>

                                            <div className='flex-1'>
                                                <p className='text-white/60'>{item.title}</p>
                                                <h3 className='text-xl'>{item.descripion}</h3>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
     );
}

export default Contact;