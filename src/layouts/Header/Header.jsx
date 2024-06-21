import {Link} from 'react-router-dom'
import Navbar from '../../component/Navbar';
import MobileNav from '../../component/MobileNav';

import { useState } from 'react';

import { FaBarsStaggered } from "react-icons/fa6";


function Header() {

    const [isShow, setIsShow] = useState(false)

    const handleShow = () => {
        setIsShow(prev => !prev)
    }


    return ( 
        <div className='py-8 xl:py-12 text-white '>
            <div className='container mx-auto flex justify-between items-center'>
                {/* img */}

                <Link to='/hello'>
                    <h1 className='text-4xl font-semibold'>
                        Draw
                        <span className='text-accent'>.</span>
                    </h1>
                </Link>

                {/* DESK TOP NAVBAR */}
                <div className='hidden xl:flex items-center gap-8'>

                    <Navbar/>

                    <Link to='/contact' className='hidden xl:flex'>
                        <button className='bg-accent hover:bg-accent-hover text-primary px-3 rounded-lg
                            tracking-[2px]'>
                            Hire me
                        </button>
                    </Link>
                </div>

                {/* MOBILE NAV */}
                <div className='xl:hidden'>
                    <FaBarsStaggered onClick={() => handleShow()} />

                    {
                        isShow && <MobileNav handleShow={handleShow}/>
                    }
                </div>
            </div>
        </div>    
    );
}

export default Header;