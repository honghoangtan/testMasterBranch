import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../utils/date/date';
import GlobalContext from '../context/GlobalContext';

const SmallCalender = () => {

    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());

    const [currentMonth, setCurrentMonth] = useState(getMonth());

    const [checkDay, setCheckDay] = useState({})

    const { savedEvents, setShowEventModal } = useContext(GlobalContext)

    // Lấy số chỉ mục tháng vào hàm getMonth sẽ trả ra 1 mảng tháng
    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);
    
    const { monthIndex, setSmallCalenderIndex, daySelected, setDaySelected, setShowEventLiveModal, setShowCalender } = useContext(GlobalContext);
    
    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    }, [monthIndex]);
    
    const handlePrev = () => {
        setCurrentMonthIdx(prev => prev - 1)
    }

    const handleNext = () => {
        setCurrentMonthIdx(prev => prev + 1)
    }
    const getCurrentDayClass = (day) => {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);

        const slcDay = daySelected && daySelected.format(format);
        if (nowDay === currDay) {
            return "!bg-darkblue rounded-full text-white p-1";
        } else if (currDay === slcDay) {
            return "bg-blue-100 rounded-full text-blue-600 font-bold";
        } else {
            return "";
        }
    }

    // const checkdate = (day) => {
    //     const check = dayjs(savedEvents[0].day).format('DD-MM-YY')
    //     console.log('check', check)

    //     const checkDay = savedEvents.find((item) => dayjs(item.day).format('DD-MM-YY') === day.format('DD-MM-YY'))
    //     console.log('CHECK DAY' , checkDay)
    //     console.log('day click',day.format('DD-MM-YY'))
    // }

    const getCheckDay = (day) => {
        const checkDay = savedEvents.find((item) => dayjs(item.day).format('DD-MM-YY') === day.format('DD-MM-YY'))

        if (checkDay) {
            return "bg-lightorange rounded-full p-1"
        }
    }

    const checkWidth = () => {
        console.log('window width', window.innerHeight)

        if (window.innerWidth < 768) {
            setShowEventModal(true)
        }
    }

    const openCalender = () => {
        setShowCalender(true)
    }
    
  return (
    <div className='mt-9'>
        <div className='flex flex-wrap justify-end gap-2 md:hidden pb-3 font-bold text-gray-500'>
            <button 
                className='border min-w-[150px] border-lightblue rounded py-2 px-4 mr-5 hover:text-white hover:bg-lightblue'
                onClick={() => openCalender()}
            > 
                Show Calender
            </button>

            <button 
                className='border min-w-[150px] border-lightblue rounded py-2 px-4 mr-5 hover:text-white hover:bg-lightblue'
                onClick={() => setShowEventLiveModal(true)}
            > 
                Create Event
            </button>
        </div>
        <div className='flex justify-center'>
                <button onClick={handlePrev}>
                    <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                        chevron_left
                    </span>
                </button>

            <p className='text-gray-500 font-bold text-sm md:text-[14px]'>
                {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
            </p>

            <button onClick={handleNext}>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                    chevron_right
                </span>
            </button>
        </div>

        <div className='grid grid-cols-7 grid-rows-6'>
            {currentMonth[0].map((day, i) => (
                <span key={i} className="text-sm py-1 text-center">
                    {day.format("ddd").charAt(0)}
                </span>
            ))}

            {currentMonth.map((row, indexRow) => (
                <React.Fragment key={indexRow}>
                    {
                        row.map((day, i) => (
                            <button 
                                key={i} 
                                className={`text-center p-1 my-1 rounded-full text-sm }`}
                                onClick={() => {
                                    setSmallCalenderIndex(currentMonthIdx);
                                    setDaySelected(day)
                                    // checkdate(day)
                                    checkWidth()
                                    openCalender()
                                  }}
                            >
                                <span className={`${getCheckDay(day)} ${getCurrentDayClass(day)}`}>
                                    {day.format('DD')} 
                                </span>
                            </button>
                        ))
                    }
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SmallCalender
