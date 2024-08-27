import React from 'react'

import logoStock from '../../assets/logoStock.png'

import { links } from '../../constant/Constant'
import LinkItem from './LinkItem'

import { FaWindowClose, FaEyeSlash  } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

import { useLocation } from 'react-router-dom';


const Sidebar = ({ toggleMenu }) => {
  
  return (
    <div className='transition-all duration-300 '>
        <div className={`fixed top-0 left-0 z-40 w-64 h-screen pt-8 bg-white dark:bg-gray-800 border-r border-gray-200 sm:translate-x-0 transll text-black`}>
          <div className='h-full px-3 pb-4 overflow-y-auto'>

              <div className='flex justify-end sm:hidden dark:text-white pb-4'>
                <FaWindowClose className='mt-5 mr-5 cursor-pointer' fontSize='20px' onClick={toggleMenu}/>
              </div>

              <div className='flex items-center justify-center mb-5 dark:text-white'>
                  <img src={logoStock} width={32} height={32} className='rounded-full'/>
                  <h3 className='ml-1 font-medium'>GoStock</h3>
              </div>

              <div className='w-full bg-black rounded-2xl flex items-center justify-between p-4'>
                  <div className='text-white flex flex-col'>
                      <p className='text-[14px]'>Total Investment</p>

                      <div className='flex items-center gap-3 font-semibold text-[20px]'>
                          <span>$5380,90</span>

                          <FaEyeSlash />

                      </div>
                  </div>

                  <div className='text-green-500 flex items-center gap-1z'>
                      <span>+18,10%</span>
                      <FaArrowUpLong />

                  </div>
              </div>

              <ul className='space-y-2 font-medium mt-6 '>
                  {links.map((item, index) => {
                      return (
                          <LinkItem key={index} {...item} />
                      )
                  })}
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
