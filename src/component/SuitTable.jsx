
import logoFb from '../assets/logoFb.png'
import logoApple from '../assets/logoApple.png'
import logoMicro from '../assets/logoMicro.png'

import dropbox from '../assets/dropbox.png'
import airbnb from '../assets/airbnb.png'
import playstation from '../assets/playstation.jpg'
import shopify from '../assets/shopify.jpg'
import spotify from '../assets/spotify.png'
import logoGG from '../assets/logoGG.png'

import paypal from '../assets/paypal.jpg'

const SuitTable = () => {
  return (
    <div className='bg-white text-black py-10 w-full'>
        <div className='container mx-auto'>
            <div>
                <h2 className='h2 max-w-[600px] text-wrap'>
                  Find the most suitable stock for you to buy now
                </h2>

                

            <div className="relative overflow-x-auto bg-white border border-x-gray-200 rounded-2xl mt-10 py-5 px-7 shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr className='text-[#adadad] text-[16px] border-b'>
                            <th scope="col" className="px-6 py-3">
                                STOCK NAME
                            </th>
                            <th scope="col" className="px-6 py-3">
                                MARKET CAP
                            </th>
                            <th scope="col" className="px-6 py-3">
                                VOLUME
                            </th>
                            <th scope="col" className="px-6 py-3">
                                SUPPLY
                            </th>
                            <th scope="col" className="px-6 py-3">
                                TRADE
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ACTIVITIES
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b text-black font-semibold">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center'>
                                    <img src={logoFb} width={32} height={32} className='rounded-full'/>

                                    <div className='flex flex-col'>
                                        <span>META</span>
                                        <span className='text-[#adadad]'>Meta</span>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                $377,37 B
                            </td>
                            <td className="px-6 py-4">
                                $48 B
                            </td>
                            <td className="px-6 py-4">
                                $38,40 B
                            </td>
                            <td className="px-6 py-4 text-green-500">
                                67% Buy
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                31% Sell
                            </td>
                        </tr>
                        
                        <tr className="bg-white border-b text-black font-semibold">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center gap-3'>
                                    <img src={logoApple} width={32} height={32} className='rounded-full'/>

                                    <div className='flex flex-col'>
                                        <span>AAPL</span>
                                        <span className='text-[#adadad]'>Apple Inc</span>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                $430,65 B
                            </td>
                            <td className="px-6 py-4">
                                $56,32 B
                            </td>
                            <td className="px-6 py-4">
                                $49 B
                            </td>
                            <td className="px-6 py-4 text-green-500">
                                51% Buy
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                49% Sell
                            </td>
                        </tr>

                        <tr className="bg-white border-b text-black font-semibold">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center gap-3'>
                                    <img src={spotify} width={32} height={32} className='rounded-full'/>

                                    <div className='flex flex-col'>
                                        <span>SPOT</span>
                                        <span className='text-[#adadad]'>Spotify</span>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                $210,40 B
                            </td>
                            <td className="px-6 py-4">
                                $52,96 B
                            </td>
                            <td className="px-6 py-4">
                                $14,40 B
                            </td>
                            <td className="px-6 py-4 text-green-500">
                                56% Buy
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                44% Sell
                            </td>
                        </tr>

                        <tr className="bg-white border-b text-black font-semibold">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center gap-3'>
                                    <img src={logoMicro} width={32} height={32} className='rounded-full'/>

                                    <div className='flex flex-col'>
                                        <span>MICRO</span>
                                        <span className='text-[#adadad]'>Microsoft</span>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                $450,10 B
                            </td>
                            <td className="px-6 py-4">
                                $126,23 B
                            </td>
                            <td className="px-6 py-4">
                                $95,4 B
                            </td>
                            <td className="px-6 py-4 text-green-500">
                                71% Buy
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                69% Sell
                            </td>
                        </tr>

                        <tr className="bg-white border-b text-black font-semibold">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center gap-3'>
                                    <img src={airbnb} width={32} height={32} className='rounded-full'/>

                                    <div className='flex flex-col'>
                                        <span>ABNB</span>
                                        <span className='text-[#adadad]'>Airbnb</span>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                $120 B
                            </td>
                            <td className="px-6 py-4">
                                $19,54 B
                            </td>
                            <td className="px-6 py-4">
                                $8,09 B
                            </td>
                            <td className="px-6 py-4 text-green-500">
                                45% Buy
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                55% Sell
                            </td>
                        </tr>

                        <tr className="bg-white border-b text-black font-semibold">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center gap-3'>
                                    <img src={playstation} width={32} height={32} className='rounded-full'/>

                                    <div className='flex flex-col'>
                                        <span>SONY</span>
                                        <span className='text-[#adadad]'>Playstation</span>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                $430,65 B
                            </td>
                            <td className="px-6 py-4">
                                $56,32 B
                            </td>
                            <td className="px-6 py-4">
                                $49 B
                            </td>
                            <td className="px-6 py-4 text-green-500">
                                51% Buy
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                49% Sell
                            </td>
                        </tr>

                        <tr className="bg-white  text-black font-semibold">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className='flex items-center gap-3'>
                                    <img src={logoGG} width={32} height={32} className='rounded-full'/>

                                    <div className='flex flex-col'>
                                        <span>GG</span>
                                        <span className='text-[#adadad]'>Google</span>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                $264,65 B
                            </td>
                            <td className="px-6 py-4">
                                $57,56 B
                            </td>
                            <td className="px-6 py-4">
                                $45,77 B
                            </td>
                            <td className="px-6 py-4 text-green-500">
                                65% Buy
                            </td>
                            <td className="px-6 py-4 text-red-500">
                                31% Sell
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
        </div>
    </div>
  )
}

export default SuitTable
