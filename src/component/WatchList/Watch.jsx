import React from 'react'

const Watch = ({ watch, i }) => {
  return (
    <div className='text-black flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <img src={watch.image} width={43} height={43} className='rounded-full'/>

            <div className='flex flex-col'>
                <h2 className='font-semibold h4 dark:text-white'>{watch.name}</h2>
                <span className='text-[14px] text-gray-300'>{watch.subName}</span>
            </div>
        </div>

        <div className='flex flex-col'>
            <h2 className='font-semibold text-[16px] dark:text-white'>{watch.totalShare}</h2>
            <span className={`font-medium text-[14px] ${i === 3 ? 'text-green-500' : 'text-red-500'}`}>{watch.totalReturn}</span>
        </div>
    </div>
  )
}

export default Watch
