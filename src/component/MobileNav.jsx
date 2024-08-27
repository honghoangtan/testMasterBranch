

import {Link} from 'react-router-dom'

import { useLocation } from 'react-router-dom';

import { FaWindowClose } from "react-icons/fa";

import logoStock from '../assets/logoStock.png'



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
        name: 'product',
        path: '/product'
    },
    {
        name: 'about us',
        path: '/aboutus'
    },
    {
        name: 'login',
        path: '/login'
    },
    {
        name: 'Signup',
        path: '/Signup'
    },
    // {
    //     name: 'contact',
    //     path: '/contact'
    // },
]

function MobileNav({ handleShow }) {
    let location = useLocation();

    return ( 
        <div className='bg-black h-screen fixed top-0 right-0 w-[350px] transition-all duration-300 z-50'>

            <div className='flex justify-end'>
                <FaWindowClose className='mt-5 mr-5' fontSize='20px' onClick={handleShow} />
            </div>

            <div className='mt-20 mb-20 text-center text-2xl flex items-center justify-center gap-3'>
                <img src={logoStock} width={43} height={43} className='rounded-full'/>

                <Link to='/'>
                    <h1 className='text-4xl font-semibold'>
                        GoStock
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