import {Link} from 'react-router-dom'

import Navbar from './Navbar'
import MobileNav from './MobileNav'

import { FaBarsStaggered } from "react-icons/fa6";


import logoStock from '../assets/logoStock.png'

import { useState } from 'react';

const Header = () => {

    const [isShow, setIsShow] = useState(false)

    const handleShow = () => {
        setIsShow(prev => !prev)
    }

  return (
    <div className='py-8 xl:py-12 text-white '>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex items-center justify-center gap-5'>
                    <img src={logoStock} width={43} height={43} className='rounded-full'/>

                    <Link to='/'>
                        <h1 className='text-4xl font-semibold'>
                            GoStock
                        </h1>
                    </Link>
                </div>



                {/* DESK TOP NAVBAR */}
                <div className='hidden xl:flex items-center gap-8'>

                    <Navbar/>

                    
                </div>

                {/* MOBILE NAV */}
                <div className='xl:hidden'>
                    <FaBarsStaggered onClick={() => handleShow()} />

                    {
                        isShow && <MobileNav handleShow={handleShow}/>
                    }
                </div>

                <div className='hidden xl:flex items-center justify-center gap-5'>
                    <button className='px-2 py-4 font-medium text-[16px]'>
                        <a href='/login'>Login</a>
                    </button>

                    <button className='px-4 py-2 font-semibold text-[16px] bg-[#3b3356] hover:bg-white hover:text-black rounded-full'>
                        <a href='/signup'>Sign up</a>
                    </button>
                </div>
            </div>
        </div>    
  )
}

export default Header
