
import {Link} from 'react-router-dom'

import { useLocation } from 'react-router-dom';


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

function Navbar() {
    let location = useLocation();

    return ( 
        <div className='flex gap-8'>
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
     );
}

export default Navbar;