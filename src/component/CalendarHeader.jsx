import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'
const CalendarHeader = () => {

    const { monthIndex, setMonthIndex, setShowEventLiveModal, showCalender, setShowCalender } = useContext(GlobalContext)

    const handlePrevMonth = () => {
        setMonthIndex(prev => prev - 1)
    }

    const handleNextMonth = () => {
        setMonthIndex(prev => prev + 1)
    }

    // monthIndex ===.... (la de toi uu cho lan dau tien khong hoat dong)
    const handleResetDate = () => {
      setMonthIndex(monthIndex === dayjs().month() ? dayjs().month() + Math.random() : dayjs().month())
    }

  return (
    <div className={`px-4 py-2 ${!showCalender ? 'hidden' : 'flex'} md:flex items-center flex-wrap gap-3 bg-calendercolor md:bg-white`}>

          <button 
            onClick={() => setShowCalender(false)}
            className={` border ${showCalender ? 'block md:hidden':'hidden'} border-lightblue rounded py-2 px-4 mr-5 hover:text-white hover:bg-darkblue`}
          >
            Back
          </button>

          <button 
              className='border border-lightblue rounded py-2 px-4 mr-5 hover:text-white hover:bg-darkblue'
              onClick={() => setShowEventLiveModal(true)}
          >
              Create Event
          </button> 

        <button 
          className={` ${showCalender ? 'hidden md:block' : 'block'} border border-lightblue rounded py-2 px-4 mr-5 hover:text-white hover:bg-darkblue`}
          onClick={handleResetDate}
        >
            Today
        </button> 
 
        <button onClick={handlePrevMonth}>
            <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
            chevron_left
            </span>
      </button>
      
        <button onClick={handleNextMonth}>
            <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
            chevron_right
            </span>
      </button>

      <h2 className="ml-4 mt-[-8px] text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
    </div>
  )
}

export default CalendarHeader
