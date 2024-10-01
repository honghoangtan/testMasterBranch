
import './App.css'
import { Routes, Route } from 'react-router-dom'

import { getMonth } from './utils/date/date'
import CalendarHeader from './component/CalendarHeader'
import SideBar from './component/SideBar'
import Month from './component/Month'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from './context/GlobalContext'
import EventModal from './component/EventModal'
import Test from './component/Test'

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  const { monthIndex, showEventModal, showEventLiveModal, showCalender } = useContext(GlobalContext)  

  useEffect(() => {
      setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  useEffect(() => {
    console.log('show boolean', showCalender);
    
  }, [showCalender])
  
  return (
    <div className='bg-white md:bg-calendercolor'>
        {
          showEventModal && <EventModal />
        }

        {
          showEventLiveModal && <Test />
        }
        <div className='h-screen flex flex-col px-10 py-2'>

            <CalendarHeader />
            
            <div className='md:flex flex-1 gap-x-2'>
                <div className={`h-full md:block ${showCalender ? 'hidden md:block': 'block'}`}>
                  <SideBar />
                </div>



                <div className={`block ${showCalender ? 'block h-full md:flex-1' : 'hidden md:block md:flex-1'}`}>
                    <Month month={currentMonth} />
                </div>

                {/* <div className={`md:hidden ${showCalender ? 'block' : 'hidden'} md:w-[68%] xl:w-[80%] h-[100%]`}>
                    <Month month={currentMonth} />
                </div> */}

                {/* <SideBar />
                <div className='hidden md:block md:w-[68%] xl:w-[80%] h-[100%]'>
                <Month month={currentMonth}/>
                </div>  */}
            </div>

          
        </div>
    </div>
  )
}

export default App
