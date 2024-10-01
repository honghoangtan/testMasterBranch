import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'


const labelsClasses = [
    'lightblue',
    'darkblue',
    'lightorange',
    'darkOrange',
  ]

const Day = ({ day, indexRow }) => {

    const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent, selectedEvent, savedEventsLive } = useContext(GlobalContext)
    
    const [eventDays, setEventDays] = useState([])

    const [eventsDayLive, setEventsDayLive] = useState([])

    useEffect(() => {
        const events = savedEvents && savedEvents.filter(
          (evt) =>
            dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
        );
        setEventDays(events);
      }, [savedEvents, day]);

    
    useEffect(() => {
        const events = savedEventsLive && savedEventsLive.filter((event) => dayjs(event.start.utc).format("DD-MM-YY") === day.format("DD-MM-YY"))
        setEventsDayLive(events)
    }, [savedEventsLive, day])

    const getCurrentDayClaas = () => {
        // Tra ve ngay hien tai
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
                ? 'bg-darkblue text-white rounded-full w-7'
                : ''
    }

    const getBgEventLive = () => {
        const check = savedEventsLive && eventsDayLive.find((item) => dayjs(item.start.utc).format("DD-MM-YY") === day.format("DD-MM-YY"))

        return check ? 'bg-lightorange' : ''
    }


  return (
    <div className={`border border-gray-200 flex flex-col ${getBgEventLive()} rounded`}>
        <div className='flex flex-col items-center'>
            {
                // Show 7 ngay trong tuan dau tien
                indexRow === 0 && (
                    <p className='text-sm mt-1'>
                        {day.format("ddd").toUpperCase()}
                    </p>
                )
                
            }

            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClaas()}`}>
                {day.format("DD")}
            </p>
        </div>
                {/* Thu, 30 Sep 2024 10:09:26 GMT */}
        <div 
            className={`flex-1 cursor-pointer`}
            onClick={() => {
                setDaySelected(day)
                setShowEventModal(true)
                
            }}
        >
            {
                eventDays && eventDays.map((item, index) => {
                    const filteredClasses = labelsClasses.filter(label => label !== item.label);

                    if (filteredClasses.length === 0) return null;
                    // Random chọn màu từ mảng đã lọc
                    const randomLabel = filteredClasses[Math.floor(Math.random() * filteredClasses.length)];

                    return (
                        <div
                            onClick={() => {
                                setSelectedEvent(item) 
                                console.log('day', dayjs(item.day).format("DD-MM-YY"))}}
                            className={`bg-${item.label} p-1 mr-3 ${item.label === 'darkblue' || item.label === 'darkOrange' ? 'text-white' : 'text-gray-600'} text-sm rounded border-l-2 border-${randomLabel} mb-1 truncate`}
                            key={index}
                        >
                            {item.title}
                        </div>
                    )
                })
            }

            {
                eventsDayLive && eventsDayLive.map((item, index) => (
                    <div
                        className={`bg-darkblue p-1 mr-3 text-white  text-sm rounded border-l-2 border-darkblue mb-1 truncate`}
                        key={index}
                    >
                        {item.name.html}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Day
