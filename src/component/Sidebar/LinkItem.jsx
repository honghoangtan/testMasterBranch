import React from 'react'

import { setUser } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'

const LinkItem = ({ href, icon: Icon, text, badge}) => {

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(setUser(null))
        localStorage.removeItem('user');
    }
  return (
    <li>
        <a 
            href={href}
            className='flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100'
        >
            <Icon className='mr-2'/>
            <span 
                className='flex-1 me-3'
                onClick={ href === '/login' && logOut}
            >{text}</span>

            { badge && 
                <span className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${badge.color}`}>
                    {badge.text}
                </span>
            }
        </a>
    </li>
  )
}

export default LinkItem
