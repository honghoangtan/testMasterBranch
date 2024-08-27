import React from 'react'

import { GoDownload } from "react-icons/go";


const Hero = () => {
  return (
<div className='bg-main'>
        <div className='bg-grid h-[640px] xl:h-[840px] bg-repeat-y bg-center relative'>
            <div className="absolute inset-0 bg-opacity-75 backdrop-blur-sm"></div>

            <div className='container mx-auto relative z-10'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-center mt-[150px]'>
                        <h1 className='h2 max-w-[766px]'>
                            Easily invest in stocks and crypto in one  <span className="gradient-text">
                                GoStock platform
                            </span>
                        </h1>
                    </div>

                    <div className='mt-[32px] max-w-[547px] text-center opacity-75'>
                        <p className=''>
                            Get all conveniences of investing in stocks or cryptocurrencies in one
                            GoStock platform. Now you can use this app in desktop version
                        </p>
                    </div>

                    <div className='flex items-center justify-center gap-5 mt-[28px]'>
                        <button className='outline rounded-full px-5 py-2 font-semibold'>
                            How it work
                        </button>

                        <button className='bg-white hover:bg-[#3b3356] text-primary hover:text-white px-5 py-2 rounded-full
                                font-semibold flex items-center gap-2'>
                                Get app now
                                <GoDownload />

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
