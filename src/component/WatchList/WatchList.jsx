import React from 'react'
import { watchList } from '../../constant/Constant'
import Watch from './Watch'
import { FaPlus } from "react-icons/fa";

const WatchList = () => {
  return (
    <div className='bg-white dark:bg-gray-700 p-5 rounded-2xl flex flex-col gap-5 w-full xl:w-[360px]'>
        <div className='flex items-center justify-between text-black dark:text-white'>
            <h3 className='h3'>My Watchlist</h3>
            <FaPlus />
        </div>

        {watchList.map((item, index) => {
            return (
                <Watch key={index} watch={item} i={index}/>
            )
        })}


    </div>
  )
}

export default WatchList
