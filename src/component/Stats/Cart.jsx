import React from 'react'

const Cart = ({ data, i }) => {
  return (
    <div className='flex flex-col px-4 py-3 w-full hover:bg-white transition-all duration-300 ease-in-out rounded-xl '>
        <div className='flex flex-row items-center justify-between'>
            <div className='flex items-center justify-center gap-2 text-black'>
                <img src={data.logo} width={23} className='rounded-full' />
                <span className='font-semibold text-black'>{data.title}</span>
            </div>

            <div>
                <img src={data.image} height={125} className='w-[100px] lg:w-[60px] xl:w-[125px]' />
            </div>
        </div>

        <div className='text-gray-400 dark:text-black'>
            <div className='flex items-center justify-between'>
                <span className=''>Total Shares</span>
                <span className='font-semibold text-black'>{data.totalshare}</span>
            </div>

            <div className='flex items-center justify-between'>
                <span>Total Shares</span>
                <span className={`font-semibold ${i === 2 ? 'text-green-500' : 'text-red-500'} `}>{data.totalreturn}</span>
            </div>
        </div>
    </div>
  )
}

export default Cart
