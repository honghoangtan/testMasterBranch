import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faVideo } from '@fortawesome/free-solid-svg-icons';


const labelsClasses = [
  'lightblue',
  'darkblue',
  'lightorange',
  'darkOrange',
]

const Label = () => {

  const {savedEvents, daySelected, savedEventsLive} = useContext(GlobalContext)

  const [events, setEvents] = useState([])
  const [eventsDayLive, setEventsDayLive] = useState([])

  useEffect(() => {

    const events = savedEvents.filter((item) => dayjs(item.day).format('dddd, MMMM DD YYYY') === dayjs().format('dddd, MMMM DD YYYY'))
    setEvents(events)
  }, [savedEvents])


  useEffect(() => {
    const events = savedEventsLive && savedEventsLive.filter((event) => dayjs(event.start.utc).format("DD-MM-YY") === dayjs().format("DD-MM-YY"))
    setEventsDayLive(events)
  }, [savedEventsLive])

  return (
    <div className='mt-3 border-t-2 border-gray-300'>
      <div className='text-darkblue font-bold text-lg mt-3'>Upcoming Events</div>

      <div>
        <span className='font-bold text-gray-500 text-sm'>
          {
            events.length > 0 && dayjs(events[0].day).format('dddd, MMMM DD YYYY')
          }
        </span>
      </div>

      {events.length > 0 && events.map((item, index) => {
        // Lọc màu hiện tại ra khỏi mảng
        const filteredClasses = labelsClasses.filter(label => label !== item.label);

        if (filteredClasses.length === 0) return null;
        // Random chọn màu từ mảng đã lọc
        const randomLabel = filteredClasses[Math.floor(Math.random() * filteredClasses.length)];
        return (
          <div key={index} className='mt-3'>
            <div 
              className={`mt-3 bg-${item.label} min-h-[60px] px-4 py-2 rounded ${item.label === 'darkblue' || item.label === 'darkOrange' ? 'text-white' : 'text-gray-600'} border-l-4 border-${randomLabel}`}
            >
              <div>
                <span className='font-bold'>
                  {item.title}
                </span>
              </div>

              <span key={index}>
                {item.time}
              </span>

            </div>
        </div>
        )
      })}

      {
        eventsDayLive && eventsDayLive.map((item, index) => {

          const date = new Date(eventsDayLive[0].start.utc)
          console.log('day venv')
          return (
            <div key={index} className='mt-3'>
              <div 
                className={`mt-3 bg-darkblue min-h-[60px] px-4 py-2 rounded text-white border-l-4 border-x-lightorange flex items-center justify-between md:justify-center`}
              > 
                <div className=''>
                  <div>
                    <span className='font-bold'>
                      {item.name.html}
                    </span>
                  </div>

                  <span key={index}>
                    {date.toUTCString()}
                  </span>
                </div>
                <FontAwesomeIcon icon={faVideo} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Label
