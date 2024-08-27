import { CiMail } from "react-icons/ci";
import { PiBellRinging } from "react-icons/pi";

import { GoChevronDown } from "react-icons/go";

import { FaBarsStaggered } from "react-icons/fa6";

import { FaSun, FaMoon  } from "react-icons/fa";


import user from '../../assets/user.jpg'

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { useEffect } from "react";


const HeaderDashboar = ({ toggleMenu, toggleDarkMode, darkMode }) => {

  const dispatch = useDispatch();

  const userRedux = useSelector((store) => store.app.user)
  // const username = userRedux ? userRedux.split('@')[0] : [];
  let trimmedStr = userRedux ? userRedux.slice(0, -1) : '';
  const username = trimmedStr.split('@')[0]

  console.log('username out',username);
  

  useEffect(() => {
    if (userRedux) {
      localStorage.setItem('user', userRedux);
    }
  }, [userRedux])

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser && !userRedux) {
      dispatch(setUser(savedUser));
    }

    console.log('username: ', username);
    
  }, [dispatch, userRedux]);
  
  return (
    <div>
      <div className=' bg-white px-2 sm:px-4 py-6 sm:ml-64 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'>
          <div className='flex items-center justify-between'>
            <div className="flex items-center justify-center gap-5">
              <div 
                className="block sm:hidden text-gray-500 p-2 rounded-lg focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700
                  dark:text-gray-400 dark:focus:ring-gray-600"
              >
                <FaBarsStaggered 
                  className="w-5 h-5 cursor-pointer"
                  onClick={toggleMenu }
                />
              </div>

            </div>
              <form className="max-w-md flex-1 mx-auto w-full sm:w-auto">   
                  <div className="relative w-full lg:w-[380px]">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input type="search" id="default-search" className="block w-full p-[12px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none" placeholder="Pres '*'to search for various stocks" required />
                  </div>
              </form>

            <div className='flex items-center justify-center sm:w-auto'>
                <div className="px-[5px]">
                  <button 
                    className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2"
                    onClick={toggleDarkMode}
                  >
                      { darkMode ? <FaSun /> :  <FaMoon />}
                  </button>
                </div>

                <div className="hidden sm:flex items-center justify-center gap-5 text-black dark:text-white font-semibold text-[26px] pr-[20px] border-r-2 border-gray-400">
                  <CiMail />
                  <PiBellRinging />
                </div>

                <div className="px-[20px] flex items-center justify-center gap-2">
                    <img src={user} width={32} height={32} className="rounded-full" />

                    <span className="h4 text-black dark:text-white">{username}</span>

                    <div className="text-black font-semibold text-[26px] pt-1 dark:text-white">
                      <GoChevronDown />

                    </div>
                </div>

            </div>

          </div>
      </div>
    </div>
  )
}

export default HeaderDashboar
