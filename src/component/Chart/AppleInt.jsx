import React from 'react'

import logoApple from '../../assets/logoApple.png'
import ApexChart from './ApexChart'

const AppleInt = ({ darkMode }) => {
  return (
    <div className='bg-white dark:bg-gray-700 p-5 rounded-2xl flex-1'>
        <div className='flex items-center justify-between '>
            <div className='flex items-center gap-5'>
                <img src={logoApple} width={43} height={43} className='rounded-full' />

                <div className='flex flex-col justify-center'>
                    <h2 className='h3 text-black dark:text-white'>Apple inc</h2>
                    <span className='text-gray-300'>AAPL</span>
                </div>
            </div>

            <div className='flex flex-col justify-center'>
                <div className='relative'>
                    <span className='inline-flex items-center justify-center px-2 ml-0 xl ms-3 text-sm font-medium rounded-full bg-red-500 absolute text-[13px] lg:right-20 xl:right-24'>-1,10%</span>
                    <div className='h3 text-black text-right dark:text-white'>$150,70</div>
                </div>

                <span className='text-gray-300'>Last update at 14.30</span>
            </div>
        </div>

        <div className='border border-gray-200 m-5'></div>

        <ApexChart darkMode={darkMode}/>
    </div>
  )
}

export default AppleInt
