import React from 'react'

import dashboar from '../assets/dashboar.png'

import img1 from '../assets/img1.png'
import mandiri from '../assets/mandiri.jpg'
import visa from '../assets/visa.jpg'
import BCA from '../assets/BCA.jpg'
import BankAmerica from '../assets/BankAmerica.jpg'
import citizens from '../assets/citizens.jpg'

const DemoDashboar = () => {
  return (
    <div className='bg-[#f7f9fc] min-h-32 sm:min-h-44 lg:min-h-64'>
        <div className='container mx-auto relative'>
                <div className='relative rounded-3xl border border-gray-200 shadow-md'>
                    <img src={dashboar} className='absolute object-cover w-full h-auto rounded-3xl -top-16 sm:-top-40 lg:-top-48'/>
                </div>

                <div className='pt-44 sm:pt-60 lg:pt-80 flex items-center justify-center flex-wrap gap-5 pb-10'>
                    <img src={img1} width={170} height={170}/>
                    <img src={mandiri} width={170} height={170} className='text-red-500'/>
                    <img src={visa} width={170} height={170}/>
                    <img src={BCA} width={170} height={170}/>
                    <img src={BankAmerica} width={170} height={170}/>
                    <img src={citizens} width={170} height={170}/>
                </div>
        </div>  
    </div>
  )
}

export default DemoDashboar
