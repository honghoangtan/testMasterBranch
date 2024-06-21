

import {Link} from 'react-router-dom'

import { useLocation } from 'react-router-dom';

import { FaWindowClose } from "react-icons/fa";



const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

function MobileNav({ handleShow }) {
    let location = useLocation();

    return ( 
        <div className='bg-black h-screen fixed top-0 right-0 w-[350px] transition-all duration-300'>

            <div className='flex justify-end'>
                <FaWindowClose className='mt-5 mr-5' fontSize='20px' onClick={handleShow} />
            </div>

            <div className='mt-20 mb-20 text-center text-2xl'>
                <Link to='/hello'>
                        <h1 className='text-4xl font-semibold'>
                            Draw
                            <span className='text-accent'>.</span>
                        </h1>
                </Link>
            </div>

            <div className='shadow-green-300 flex flex-col justify-center items-center gap-8 mt-8'>
                {
                    links.map((item, index) => {
                        return (
                            <Link 
                                to={item.path} 
                                key={index} 
                                className={`${item.path === location.pathname && 'text-accent xl:border-b-2 xl:border-accent'}
                                    capitalize font-medium hover:text-accent transition-all`}
                            >
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
     );
}

export default MobileNav;