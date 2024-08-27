import React from 'react'

import { empolyeesData } from '../../constant/Constant'
import Cart from './Cart'

const Stats = () => {
  return (
    <div className='flex flex-col gap-5'>

        <div className='mt-5'>
            <h2 className='h3 text-black dark:text-white'>My Portfolio</h2>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 h-full bg-white/50 rounded-2xl w-full px-2 py-3'>
            {
                empolyeesData.map((item, index) => {
                    return (
                        <Cart key={index} data={item} i={index}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Stats
