import React from 'react'

import applechstore from '../assets/applechstore.jpg'

const DownApp = () => {
  return (
    <div className='bg-white text-black py-10 w-full'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <span className='px-4 py-2 bg-white border border-gray-200 rounded-full shadow-md font-semibold'>
                    GET THE APP FOR FREE
                </span>

                <h2 className='h2 mx-auto text-center max-w-[640px]'>
                    Download the application and feel the ease of investing
                </h2>

                <p className='text-[#b5b5b5] mx-auto text-center max-w-[570px] leading-5'>
                    You can now use the GoStock application in the mobile version. You can get the app in the Appstore or Platstore. Download now and feel the convenience!
                </p>

                <div>
                    <img src={applechstore} width={400} height={400}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownApp
