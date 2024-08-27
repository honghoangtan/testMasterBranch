
import monitor from '../assets/monitor.png'
import investApple from '../assets/investApple.png'


import { FaCheckCircle,FaStar  } from "react-icons/fa";


function Investment() {

  return (
    <div>
      <div>
        <StockWatchlist />
        <StockDetails />
      </div>
    </div>
  );
}

function StockWatchlist() {
  return (
    <div className='bg-white text-black w-full'>
        <div className='container mx-auto py-10'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-20'>
                <div className='order-2 sm:order-1'>
                    <img src={monitor} className='w-auto h-[450px]'/>
                </div>

                <div className='flex flex-col gap-5 order-1 sm:order-2'>
                    <h2 className='h2 max-w-[450px] text-[56px]'>
                        Easily monitor stock movements on  <span className="gradient-text">GoStock</span>
                    </h2>

                    <p className='text-[#afafaf] text-[18px] max-w-[360px] leading-7'>
                        Monitor the stocks you are after in real time and of course easily and accurately
                    </p>

                    <div className='text-[#afafaf] flex flex-col'>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle />
                            <span>Monitor stocks easily and accurately</span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <FaCheckCircle />
                            <span className='font-semibold'>Get regular reports on the shares you own</span>
                        </div>
                </div>

                    <div>
                        <button className='btn_dark_rounded'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

function StockDetails() {
  return (
    <div className='bg-white text-black'>
        <div className='container mx-auto py-10'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-20'>
                <div className='flex flex-col gap-5 order-1'>

                    <div>
                        <span className='px-4 py-2 bg-white border border-gray-200 rounded-full shadow-md font-semibold'>
                            GET A LOT OF INVESTMENT EASY
                        </span>
                    </div>

                    <h2 className='h2 max-w-[507px] text-[56px]'>
                        Awide variety of stocks from all over the world
                    </h2>

                    <div className='text-[#afafaf] flex items-center justify-center gap-3'>
                        <div className='flex items-center justify-center gap-3'>
                            <FaStar />
                            <span className='leading-5 font-semibold'>Monitor stocks easily and accurately</span>
                        </div>

                        <div className='flex items-center gap-3'>
                            <FaStar />
                            <span className='leading-5 font-semibold'>Get regular reports on the shares you own</span>
                        </div>
                    </div>
                </div>

                <div className='order-2'>
                    <img src={investApple} className='w-auto h-[450px]'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Investment;
