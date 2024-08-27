import React, { useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar/Sidebar'
import Main from '../component/Ui/Main'

import HeaderDashboar from '../component/HeaderDashboar/HeaderDashboar'
import Content from '../component/Ui/Content'
import Stats from '../component/Stats/Stats'
import AppleInt from '../component/Chart/AppleInt'
import WatchList from '../component/WatchList/WatchList'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Dashboar = () => {

  const user = useSelector((store) => store.app.user)
  const navigate = useNavigate()


  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] =useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const toggleMenu = () => {
      setIsOpen(prev => !prev);
  };

  // useEffect(() => {
  //     if (!user) {
  //         navigate('/login')
  //     }
  // }, [])

  useEffect(() => {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
      navigate('/dashboar')
      console.log('userStorage', userStorage);
      
    } else {
      navigate('/login')
      console.log('userStorage', userStorage);
      
    }
    
  }, [])

  return (
    <div  className={`${darkMode && 'dark'}`}>
      <div className='hidden sm:flex'>
        <Sidebar />
      </div>

      <div className='sm:hidden'>
        {
          isOpen && <Sidebar toggleMenu={toggleMenu}/>
        }
      </div>

      <Main>
        <HeaderDashboar toggleMenu={toggleMenu} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <Content>
              <Stats />

              <div className='flex flex-col gap-3 xl:flex-row'>
                  <AppleInt darkMode={darkMode}/>

                  <WatchList />
              </div>
          </Content>
      </Main>
    </div>
  )
}

export default Dashboar
