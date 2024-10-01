import React, { useEffect, useReducer, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      );
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}


function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

function savedEventsLiveReducer (state, { type, payload }) {
  switch (type) {
    case 'push':
      return [...state, payload]
    
    case 'update':
      return state.map((item) => item.id ===payload.id ? payload : item)

    case 'delete':
      return state.filter((item) => item.id !== payload.id)

    default:
      throw new Error()
  }
}

function initEventsLive () {
  const storageEvents = localStorage.getItem('savedEventsLive')
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
  return parsedEvents
}

const ContextWrapper = (props) => {
    // Đặt tên giống GlobalContext khi dùng thì nó sẽ cập nhật
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallCalenderIndex, setSmallCalenderIndex] = useState(null)
    const [daySelected, setDaySelected] = useState(dayjs())
    const [showEventModal, setShowEventModal] = useState(false)

    const [showEventLiveModal, setShowEventLiveModal] = useState(false)

    const [showCalender, setShowCalender] = useState(false)

    const [savedEvents, dispatchCalEvent] = useReducer(
      savedEventsReducer,
      [],
      initEvents
    );

    const [savedEventsLive, dispatchCalEventLive] = useReducer(
      savedEventsLiveReducer,
      [],
      initEventsLive
    )

    useEffect(() => {
      localStorage.setItem('savedEventsLive', JSON.stringify(savedEventsLive))
    }, [savedEventsLive])

    const [selectedEvent, setSelectedEvent] = useState(null)

    useEffect(() => {
      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }, [savedEvents]);


    useEffect(() => {
        if (smallCalenderIndex !== null) {
          setMonthIndex(smallCalenderIndex)
        }
    }, [smallCalenderIndex])

    useEffect(() => {

      if (!showEventModal) {
        setSelectedEvent(null)
      }
    }, [showEventModal])

  return (
    <GlobalContext.Provider 
      value={{ 
        monthIndex, 
        setMonthIndex,
        smallCalenderIndex,
        setSmallCalenderIndex,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        savedEvents,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        showEventLiveModal,
        setShowEventLiveModal,
        savedEventsLive,
        dispatchCalEventLive,
        showCalender,
        setShowCalender
      }}
    >
        {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
