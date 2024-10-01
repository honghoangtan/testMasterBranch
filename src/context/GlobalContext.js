
import React from "react";
import SmallCalender from "../component/SmallCalender";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalenderIndex: 0,
  setSmallCalenderIndex: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  showEventLiveModal:false,
  setShowEventLiveModal: () => {},
  dispatchCalEventLive: ({ type, payload }) => {},
  showCalender: false,
  setShowCalender: () => {}
});

export default GlobalContext;